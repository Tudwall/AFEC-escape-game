// script.js
document.addEventListener("DOMContentLoaded", () => {
  // 1) console.log pour DevTools
  console.log("Indice DevTools : cherches dans le DOM caché.");

  // 4) séquence de clics
  const seq = ["triangle", "diamond", "circle"];
  let pos = 0;
  document.querySelectorAll(".seq-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      if (btn.dataset.shape === seq[pos]) {
        pos++;
        if (pos === seq.length) {
          document.getElementById("seq-indice").classList.remove("hidden");
        }
      } else {
        pos = 0; // reset si ordre incorrect
      }
    });
  });

  // 5) formulaire
  document.getElementById("enigme-form").addEventListener("submit", (e) => {
    e.preventDefault();
    if (
      document.getElementById("reponse").value.trim().toLowerCase() ===
      "abracadabra"
    ) {
      document.getElementById("form-indice").classList.remove("hidden");
    }
  });

  // 6) reveal DOM
  document.getElementById("reveal-btn").addEventListener("click", () => {
    document.getElementById("dom-indice").classList.remove("hidden");
  });

  // 7) stockage
  document.getElementById("store-btn").addEventListener("click", () => {
    localStorage.setItem("escape-indice", "Rendez-vous au vieux chêne");
    alert("Indice enregistré ! Regarde dans le localStorage.");
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
  }
});
