// script.js
// === Gestion de la progression ===
const puzzles = {
  sequence: false,
  form: false,
  dom: false,
  storage: false,
  geo: false,
  urlParam: false,
  konami: false,
  context: false,
  drag: false,
  hover: false,
  bottom: false,
};

function checkRoom4Completion() {
  // Si tous les drapeaux sont passés à true…
  if (Object.values(puzzles).every((v) => v)) {
    alert(" Bravo ! Tu as fini la room 4, on passe à la room 5.");
    // Appel à ta fonction globale pour charger la room suivante
    loadRoom("room5");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  // 1) console.log pour DevTools
  console.log("Indice DevTools : cherches dans le DOM caché.");
  const konami = [
    "ArrowUp",
    "ArrowUp",
    "ArrowDown",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight",
    "ArrowLeft",
    "ArrowRight",
    "KeyB",
    "KeyA",
  ];
  let kp = 0;
  window.addEventListener("keydown", (e) => {
    if (e.code === konami[kp]) {
      kp++;
      if (kp === konami.length) {
        document.getElementById("konami-hint").classList.remove("hidden");
        puzzles.konami = true;
        checkRoom4Completion();
      }
    } else {
      kp = 0;
    }
    document.getElementById("coquille").addEventListener("contextmenu", (e) => {
      e.preventDefault();
      alert("Indice contextuel : écoute le vent…");
      puzzles.context = true;
      checkRoom4Completion();
    });
  });

  // 4) séquence de clics
  const seq = ["triangle", "diamond", "circle"];
  let pos = 0;
  document.querySelectorAll(".seq-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      if (btn.dataset.shape === seq[pos]) {
        pos++;
        if (pos === seq.length) {
          document.getElementById("seq-indice").classList.remove("hidden");
          puzzles.sequence = true; // Marquer l'énigme comme résolu
          checkRoom4Completion(); // = test global
        }
      } else {
        pos = 0; // reset si ordre incorrect
      }
    });
  });
  // quand il clique sur l’image, on dévoile la suite
  document.querySelector(".wall-inscription").addEventListener("click", (e) => {
    e.currentTarget.classList.add("revealed");
  });

  // 5) formulaire
  document.getElementById("enigme-form").addEventListener("submit", (e) => {
    e.preventDefault();
    if (
      document.getElementById("reponse").value.trim().toLowerCase() ===
      "abracadabra"
    ) {
      document.getElementById("form-indice").classList.remove("hidden");
      puzzles.form = true; // formulaire ok
      checkRoom4Completion(); //
    }
  });

  // 6) reveal DOM
  document.getElementById("reveal-btn").addEventListener("click", () => {
    document.getElementById("dom-indice").classList.remove("hidden");
    puzzles.dom = true; // DOM révélé
    checkRoom4Completion(); //
  });

  // 7) stockage
  document.getElementById("store-btn").addEventListener("click", () => {
    localStorage.setItem("escape-indice", "Rendez-vous au vieux chêne");
    alert("Indice enregistré ! Regarde dans le localStorage.");
    puzzles.storage = true; // Stockage ok
    checkRoom4Completion(); //
  });

  // 8) Base64 décodage
  const decoded = atob("U2VjcmV0MTIz");
  console.log("Base64 décodé :", decoded);

  // 9) géolocalisation
  document.getElementById("geo-btn").addEventListener("click", () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const { latitude, longitude } = pos.coords;
          document.getElementById(
            "geo-indice"
          ).textContent = `Tu es à ${latitude.toFixed(4)}, ${longitude.toFixed(
            4
          )} — indice : suis le nord.`;
          puzzles.geo = true; // Géolocalisation ok
          checkRoom4Completion();
        },
        () => {
          document.getElementById("geo-indice").textContent =
            "Impossible d'obtenir la position.";
        }
      );
    }
  });

  // 10) URL param
  const params = new URLSearchParams(window.location.search);
  if (params.has("indice")) {
    console.log("Indice URL :", params.get("indice"));
    puzzles.urlParam = true; // Paramètre URL ok
    checkRoom4Completion();
  }
});
