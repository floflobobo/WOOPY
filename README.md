# Woopy 汪汪老师

Appli web gamifiée pour apprendre le vocabulaire chinois du cours « 人工智能和我们的生活 » (IA et vie quotidienne), avec Woopy, un petit chien noir et blanc tout duveteux qui grandit au fil des révisions.

## Contenu

- **281 mots** relevés sur les fiches du cours : 138 roses (à connaître absolument, surlignés rose ou violet), 5 bleus (à reconnaître) et 138 jaunes (à consolider).
- Les mots bleus ne sont interrogés qu'en reconnaissance (caractère → français ou pinyin).
- 5 fiches : texte de Li Ming, questionnaire, discussion, article 利与弊, vocabulaire robots 具身智能.
- Exercices : QCM dans les 4 sens (chinois ↔ français, caractère ↔ pinyin), flashcards, réponse à taper (pinyin avec tons, ex. `tui1jian4` ou `tuījiàn`, ou caractères), phrases à trous, paires, chrono 60 s, tracé des caractères roses (bonus).
- Gamification : 3 vies par partie, os à gagner, 15 accessoires pour Woopy (dont le petit livre rouge, le marteau et la faucille, la casquette à étoile), 19 badges, 5 stades de croissance, humeur selon l'assiduité, compte à rebours avant le contrôle.
- Mode dictateur (Réglages ou écran Jouer) : Woopy porte la casquette, hurle des ordres et impose un quota de 30 réponses par jour (sans perte d'os).
- Répétition espacée : les mots ratés et les mots roses reviennent plus souvent.

## Fichiers

| Fichier | Rôle |
|---|---|
| `index.html` | L'appli (HTML/CSS/JS, sans dépendance de build) |
| `vocab.js` | La liste de vocabulaire : `[hanzi, pinyin, français, r/j, fiches, phrase du cours, mot parent]` |
| `strokes.json` | Ordre des traits des caractères roses (données hanzi-writer-data) |
| `hanzi-writer.min.js` | Bibliothèque [Hanzi Writer](https://hanziwriter.org) pour le tracé |

## Lancer en local

Le tracé charge `strokes.json`, il faut donc un petit serveur :

```bash
python3 -m http.server 8000
# puis ouvrir http://localhost:8000
```

Ça marche aussi sur GitHub Pages (Settings → Pages → branche `main`).

## Ajouter un nouveau cours

Ajouter des lignes dans `vocab.js` (et une entrée dans `SOURCES` pour une nouvelle fiche), puis régénérer `strokes.json` avec les caractères roses.

La progression est enregistrée dans le navigateur (localStorage), sur l'appareil utilisé.

## Scanner une photo (onglet « Photo » 扫)

On prend en photo une page de cours : l'appli lit le chinois et surligne en rose, jaune ou bleu les mots qui sont dans `vocab.js`. On touche un mot pour voir sa fiche, et « Réviser ces mots » lance une partie avec ceux de la photo.

- La lecture (OCR) se fait **dans le navigateur** avec Tesseract.js : la photo n'est envoyée nulle part.
- Avant la lecture, l'image passe en noir et blanc adaptatif pour effacer le surligneur (sinon les mots surlignés sont mal lus).
- Si presque aucun mot n'est trouvé, l'appli essaie la photo tournée à 90°, 180° et 270°.
- Le texte imprimé marche bien, l'écriture à la main beaucoup moins.
- Fichiers dans `ocr/` (~14 Mo, dont ~6 Mo téléchargés au premier scan) : Tesseract.js et son moteur (Apache-2.0), le modèle chinois simplifié `chi_sim` (tessdata_best, Apache-2.0) encodé en base64 dans `chi_sim.traineddata.js`, et `woopy-worker.js` qui le donne au moteur.

## Licences

- Hanzi Writer : MIT (`LICENSE-hanzi-writer`)
- Tesseract.js et tesseract.js-core : Apache-2.0 (`ocr/LICENSE-*`)
- Données de traits : Arphic Public License (`LICENSE-strokes-ARPHICPL.TXT`)
