// script.js
// === Gestion de la progression ===
/* === rooms/room4/script.js === */
const puzzles = {
  1: false,
  2: false,
  3: false,
  4: false,
  5: false,
  6: false,
  7: false,
  8: false,
  9: false,
  10: false,
};
const answers = {};

function checkCompletion() {
  if (Object.values(puzzles).every((v) => v)) {
    const phrase = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
      .map((i) => answers[i])
      .join(" ");
    document.getElementById("phrase-text").textContent = phrase;
    document.getElementById("final-phrase").classList.remove("hidden");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  // 1) DevTools: console log reveals indice1
  console.log(document.getElementById("indice1").textContent);
  puzzles[1] = true;
  answers[1] = "Explore";
  checkCompletion();

  // Konami Code (advanced)
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
        // no extra puzzle count
      }
    } else kp = 0;
  });

  // 2) Mobile-only
  if (window.innerWidth <= 768) {
    document.getElementById("indice2").classList.remove("hidden");
    puzzles[2] = true;
    answers[2] = "chaque";
    checkCompletion();
  }
  // Clic droit contextuel (advanced)
  document.getElementById("coquille").addEventListener("contextmenu", (e) => {
    e.preventDefault();
    document.getElementById("indice2").classList.remove("hidden");
    puzzles[2] = true;
    answers[2] = "chaque";
    checkCompletion();
  });

  // 3) Screen-reader
  puzzles[3] = true;
  answers[3] = "recoin";
  checkCompletion();
  // Drag & drop fantôme (advanced)
  const ghost = document.getElementById("ghost");
  const dz = document.getElementById("dropzone");
  ghost.addEventListener("dragstart", (e) =>
    e.dataTransfer.setData("text/plain", "gotcha")
  );
  dz.addEventListener("dragover", (e) => e.preventDefault());
  dz.addEventListener("drop", (e) => {
    if (e.dataTransfer.getData("text/plain") === "gotcha") {
      puzzles[3] = true;
      answers[3] = "recoin";
      checkCompletion();
    }
  });

  // 4) Séquence de clics
  const seq = ["triangle", "diamond", "circle"];
  let pos = 0;
  document.querySelectorAll(".seq-btn").forEach((btn) =>
    btn.addEventListener("click", () => {
      if (btn.dataset.shape === seq[pos]) {
        pos++;
        if (pos === seq.length) {
          document.getElementById("indice4").classList.remove("hidden");
          puzzles[4] = true;
          answers[4] = "du";
          checkCompletion();
        }
      } else pos = 0;
    })
  );
  // Hover prolongé (advanced)
  let hoverTimer;
  document.getElementById("tiny").addEventListener("mouseenter", () => {
    hoverTimer = setTimeout(() => {
      document.getElementById("indice4").classList.remove("hidden");
      puzzles[4] = true;
      answers[4] = "du";
      checkCompletion();
    }, 2000);
  });
  document
    .getElementById("tiny")
    .addEventListener("mouseleave", () => clearTimeout(hoverTimer));

  // 5) Formulaire
  document.getElementById("enigme-form").addEventListener("submit", (e) => {
    e.preventDefault();
    if (e.target.reponse.value.trim().toLowerCase() === "abracadabra") {
      document.getElementById("indice5").classList.remove("hidden");
      puzzles[5] = true;
      answers[5] = "Temple";
      checkCompletion();
    }
  });
  // Intersection Observer (advanced)
  new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          document.getElementById("indice5").classList.remove("hidden");
          puzzles[5] = true;
          answers[5] = "Temple";
          checkCompletion();
          obs.disconnect();
        }
      });
    },
    { threshold: 0.5 }
  ).observe(document.getElementById("bottom-indice"));

  // 6) DOM reveal
  document.getElementById("reveal-btn").addEventListener("click", () => {
    document.getElementById("indice6").classList.remove("hidden");
    puzzles[6] = true;
    answers[6] = "secret";
    checkCompletion();
  });

  // 7) localStorage & CustomEvent
  document.getElementById("store-btn").addEventListener("click", () => {
    localStorage.setItem("mot7", "et");
    document.getElementById("indice7").classList.remove("hidden");
    puzzles[7] = true;
    answers[7] = "et";
    checkCompletion();
  });

  // 8) Base64 décodage
  const decoded8 = atob("U2VqZXVy");
  console.log("Mot8:", decoded8);
  document.getElementById("indice8").classList.remove("hidden");
  puzzles[8] = true;
  answers[8] = decoded8;
  checkCompletion();

  // 9) géolocalisation & CustomEvent
  document.getElementById("geo-btn").addEventListener("click", () => {
    navigator.geolocation.getCurrentPosition((pos) => {
      document.getElementById("indice9").classList.remove("hidden");
      puzzles[9] = true;
      answers[9] = "au";
      checkCompletion();
    });
  });

  // 10) URL param
  const params = new URLSearchParams(window.location.search);
  if (params.has("indice")) {
    document.getElementById("indice10").classList.remove("hidden");
    puzzles[10] = true;
    answers[10] = params.get("indice");
    checkCompletion();
  }
});
