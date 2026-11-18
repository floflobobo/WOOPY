# Woopy 汪汪老师

Appli web gamifiée pour apprendre le vocabulaire chinois du cours « 人工智能和我们的生活 » (IA et vie quotidienne), avec Woopy, un petit chien noir et blanc tout duveteux qui grandit au fil des révisions.

## Contenu

- **263 mots** relevés sur les fiches du cours : 123 roses (à connaître absolument, surlignés rose ou violet) et 140 jaunes (à consolider).
- 4 fiches : texte de Li Ming, questionnaire, discussion, article 利与弊.
- Exercices : QCM dans les 4 sens (chinois ↔ français, caractère ↔ pinyin), flashcards, réponse à taper (pinyin avec tons, ex. `tui1jian4` ou `tuījiàn`, ou caractères), phrases à trous, paires, chrono 60 s, tracé des caractères roses (bonus).
- Gamification : 3 vies par partie, os à gagner, 12 accessoires pour Woopy, 18 badges, 5 stades de croissance, humeur selon l'assiduité, compte à rebours avant le contrôle.
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

## Licences

- Hanzi Writer : MIT (`LICENSE-hanzi-writer`)
- Données de traits : Arphic Public License (`LICENSE-strokes-ARPHICPL.TXT`)
