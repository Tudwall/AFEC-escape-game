export class RoomManager {
  currentRoom;

  constructor(roomNumber) {
    this.currentRoom = roomNumber;
  }

  setCurrentRoom(roomNumber) {
    this.currentRoom = roomNumber;
  }

  getCurrentRoom() {
    return this.currentRoom;
  }

  async loadRoom() {
    document.body.classList.add('loading'); // ➕ Masquer visuellement le contenu

    let basePath = new URL(
      `./rooms/room${this.currentRoom}/`,
      'http://localhost:5173'
    );

    if (this.currentRoom === 0) {
      basePath = new URL('./rooms/landing-page.html', 'http://localhost:5173');
    }

    const container = document.getElementById('room-container');
    container.innerHTML = '';

    // Charger le template HTML
    const templateRes = await fetch(basePath);
    if (!templateRes.ok) {
      throw new Error(`Could not load room ${this.currentRoom} template`);
    }
    const templateHtml = await templateRes.text();

    // Supprimer les anciens <link> CSS
    const previousRoomLinks = document.querySelectorAll(
      'link[data-room-style]'
    );
    previousRoomLinks.forEach((link) => link.remove());

    // Créer et charger dynamiquement le CSS
    const cssPath = new URL('style.css', basePath).href;
    const link = document.createElement('link');
    link.setAttribute('data-room-style', 'true');
    link.rel = 'stylesheet';
    link.href = cssPath;

    const cssLoaded = new Promise((resolve, reject) => {
      link.onload = resolve;
      link.onerror = reject;
    });

    document.head.appendChild(link);
    await cssLoaded; // ⏳ Attendre que le style soit chargé

    // Une fois le CSS chargé, injecter le HTML
    const templateContainer = document.createElement('div');
    templateContainer.innerHTML = templateHtml;

    const templateElement = templateContainer.querySelector(
      `#room${this.currentRoom}-template`
    );

    if (templateElement) {
      container.appendChild(templateElement);
    } else {
      console.warn(`Template room${this.currentRoom}-template not found.`);
    }

    document.body.classList.remove('loading'); // ✅ Afficher le contenu

    // Charger dynamiquement le JS s'il existe
    const scriptPath = new URL('script.js', basePath).href;
    fetch(scriptPath, { method: 'HEAD' })
      .then((response) => {
        const contentType = response.headers.get('content-type');
        if (
          !response.ok ||
          !contentType ||
          !contentType.includes('javascript')
        ) {
          throw new Error(`Invalid or missing script.js`);
        }
        const script = document.createElement('script');
        script.type = 'module';
        script.src = scriptPath;
        document.body.appendChild(script);
      })
      .catch((error) => {
        console.warn(
          `No script loaded for room ${this.currentRoom}:`,
          error.message
        );
      });
  }
}
