# Escape Game – Système de Room dynamique

Ce projet permet de charger dynamiquement différentes rooms (salles) d’un escape game via JavaScript, en important le HTML, le CSS, et un éventuel script JS associé à chaque room.

## Structure du projet

/rooms/
├── room1/
│ ├── style.css
│ ├── script.js (optionnel)
│ └── template.html (avec un ID spécifique)
├── room2/
│ └── ...
├── landing-page.html
/index.html
/main.js
/style.css

---

## ⚙️ Fonctionnement du `RoomManager`

La classe `RoomManager` gère le chargement dynamique des rooms :

- Vide le contenu HTML précédent du container `#room-container`.
- Charge le template HTML de la room (ou la landing page si room 0).
- Supprime les anciens liens CSS spécifiques aux rooms (`link[data-room-style]`).
- Crée un nouveau lien `<link>` pour charger le CSS spécifique à la room.
- Attend que la feuille de style soit chargée avant d’injecter le contenu HTML.
- Vérifie l'existence d’un script `script.js` via une requête `HEAD`.
- Si le script existe et est valide (type MIME JavaScript), il est chargé dynamiquement en module ES.
- Si le script n’existe pas ou est invalide, le chargement continue sans erreur.

## ⚙️ Fonctionnement du `EnigmaManager`

La classe `EnigmaManager` gère le chargement dynamique des enigmes :

1. Les enigmes et les réponses sont dans un tableau dans enigmes.js symboles
2. Elles sont chargées dynamiquement à chaque changement de salle
3. Les réponses sont vérifiées et validées pour pouvoir passer à la salle suivante

## Ce que tu dois **modifier par room**

- Chaque dossier `roomX` doit contenir :
  - Un fichier `style.css` avec les styles propres à la room.
  - Un fichier `template.html` contenant un `<template>` avec l’ID `roomX-template` (ex : `room1-template`).
  - Un fichier `script.js` facultatif, chargé uniquement s’il existe et est valide.
  - Il faut le même nombre de room qu'il y a d'enigme

## 🚫 Ce que tu ne dois **pas modifier**

- Ne change pas l’attribut `data-room-style` des liens CSS, qui sert à gérer leur suppression.
- Ne modifie pas l’ID du `<template>` (doit être exactement `roomX-template`).
- Ne supprime pas la vérification via `fetch(..., { method: 'HEAD' })` pour l’existence du script JS.

## Chargement propre avec effet de "loader"

Pour éviter de voir le contenu HTML sans CSS, un état de chargement est ajouté via une classe CSS :

```css
body.loading #room-container {
	visibility: hidden;
}
```

## Débogage

    Si le HTML s’affiche sans style, vérifie que style.css existe et est chargé.

    Si le JS ne se charge pas, vérifie la présence et le type MIME de script.js.

    Les erreurs MIME indiquent souvent un fichier manquant ou un serveur mal configuré.

## Attribution des rooms

Room 1: [Nicolas](https://github.com/zoyberg-max)

Room 2: [Artem](https://github.com/syss69)

Room 3: [Balthazar](https://github.com/CBalthazar)

Room 4: [Elise](https://github.com/seliegarrigues)

Room 5: [Fatah](https://github.com/Fatah872218)

Room 6: [Pierre](https://github.com/Tudwall)
