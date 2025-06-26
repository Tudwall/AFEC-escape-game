const enigmes = [
  {
    name: "Le Sceau du Gardien",
    description:
      "Pour passer, prononce le mot magique qui désigne la couleur du manteau du mage.",
    answer: "incendio",
  },
  {
    name: "L'Énigme des Runes",
    description: "Additionne les runes : 3 + 5. Quel est le nombre ?",
    answer: "8",
  },
  {
    name: "Le Cri du Dragon",
    description: "Quel est l'animal légendaire qui crache du feu ?",
    answer: "dragon",
  },
  {
    name: "La Planète Mystérieuse",
    description: "Quelle est la planète connue comme la 'Planète Rouge' ?",
    response: "mars",
  },

  {
    name: "Le Langage Secret",
    description: `
        Trouvez le code caché pour sortir ! Les étapes à suivre:<br>
        Tableau [2,0,3,5]<br>
        Étape 1: index1 → 0<br>
        Étape 2: Extrait une portion → slice()<br>
        Étape 3: Ajoute un élément → push()<br>
        Combine ces éléments pour former le mot de passe
      `,
    answer: "0slicepush", // Doit correspondre exactement à la vérification
  },
];

export default enigmes;
