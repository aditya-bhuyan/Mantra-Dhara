# मन्त्र धारा — Mantra Dhara

> **Daily Mantras & Slokas — in Odia, Hindi & English**

[![GitHub Pages](https://img.shields.io/badge/Live%20Site-GitHub%20Pages-orange?logo=github)](https://aditya-bhuyan.github.io/Mantra-Dhara/)

---

## 🌐 Live Website

**[https://aditya-bhuyan.github.io/Mantra-Dhara/](https://aditya-bhuyan.github.io/Mantra-Dhara/)**

---

## 🕉️ About

**Mantra Dhara** is a personal daily mantra and sloka website featuring sacred texts in three languages:

| | Language |
|---|---|
| 🕉️ | **ଓଡ଼ିଆ** — Odia |
| 🇮🇳 | **हिन्दी** — Hindi |
| 🇬🇧 | **English** |

---

## 📖 Content

### Daily Mantras
- Gayatri Mantra
- Maha Mrityunjaya Mantra
- Hanuman Mantras
- Shiva Mantras (Panchakshara)
- Vishnu Mantras (Ashtakshara)
- Ganesha Mantras
- Devi / Durga Mantras

### Daily Slokas
- Morning awakening prayers
- Before food (Gita 4.24)
- Before study / work (Saraswati)
- Before sleep (Ratri Sukta)
- Ganesha, Saraswati, Vishnu, Shiva, Hanuman, Devi slokas

### Sadhana / Puja
- Gayatri Sadhana sequence
- Hanuman Sadhana mantra
- Sandhya Vandana sequence

### Special Prayers
- Protection (Sarve Bhavantu Sukhinah)
- Peace (Shanti Path)
- Health (Dhanvantari Mantra)
- Knowledge (Vidya Prапti Mantra)
- Prosperity (Mahalakshmi Mantra)
- Removing obstacles (Ganesha)

---

## ✨ Features

- **Three-language switching** — Odia / Hindi / English at the top bar
- **Mantra detail cards** — full text, meaning (*artha*), when to chant, repetitions, benefits
- **📋 Copy button** — copy the mantra text with one click
- **❤️ Favorites** — mark mantras as favorites (stored in browser)
- **🔖 Bookmarks** — bookmark mantras for quick access
- **🔍 Search** — search by mantra name, deity, tag, or text
- **Today's Recommendation** — daily rotating featured mantra
- **Morning / Evening quick lists** — context-based prayer navigation
- **Fully responsive** — works on mobile, tablet and desktop
- **Zero dependencies** — pure HTML + CSS + JavaScript, no frameworks
- **GitHub Pages ready** — serves directly from repository root

---

## 🚀 Running Locally

Just open `index.html` in any web browser — no build step needed.

```bash
git clone https://github.com/aditya-bhuyan/Mantra-Dhara.git
cd Mantra-Dhara
# Open index.html in your browser
open index.html   # macOS
start index.html  # Windows
```

---

## 🗂️ Project Structure

```
Mantra-Dhara/
├── index.html              # Main SPA entry point
├── 404.html                # GitHub Pages 404 page
├── _config.yml             # GitHub Pages configuration
├── assets/
│   ├── css/
│   │   └── style.css       # All styles
│   └── js/
│       ├── data.js         # All mantra/sloka data
│       └── app.js          # App logic (language switching, modals, search)
└── README.md
```

---

## ➕ Adding More Mantras

All content lives in [`assets/js/data.js`](assets/js/data.js). Add a new entry to the `MANTRAS` array following the existing pattern:

```js
{
  id: "unique-id",
  section: "mantras",       // mantras | slokas | sadhana | special
  category: "Daily Mantras",
  subcategory: "Shiva",
  deity: "Shiva",
  tags: ["morning", "liberation"],
  repetitions: "108",
  timing: "Morning, Monday",
  odia:    { title: "...", text: "..." },
  hindi:   { title: "...", text: "..." },
  english: { title: "...", text: "..." },
  meaning: { odia: "...", hindi: "...", english: "..." },
  benefits: "...",
  featured: true,   // optional — shows on home page
  morning: true,    // optional — shows in morning list
  evening: true     // optional — shows in evening list
}
```

---

## 🙏 Dedication

> ॐ सर्वे भवन्तु सुखिनः  
> सर्वे सन्तु निरामयाः ।  
> सर्वे भद्राणि पश्यन्तु  
> मा कश्चिद् दुःखभाग् भवेत् ॥  
>
> *May all beings be happy; may all beings be healthy;  
> may all beings see auspiciousness; may no one suffer.*

---

## 📄 License

This repository is for personal spiritual practice and learning. All mantra texts are from the public domain of Vedic and Puranic literature.
