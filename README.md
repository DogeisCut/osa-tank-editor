<div align="center">

# osa-tank-editor  
*A visual tank editor for the [Open Source Arras](https://github.com/AE0hello/open-source-arras) __arras.io__ private server template.*

A modern successor to [Arras-Tank-Builder](https://github.com/DogeisCut/Arras-Tank-Builder), built for clarity, control, and creativity.

![License](https://img.shields.io/github/license/DogeisCut/osa-tank-editor?style=for-the-badge)
![Pull Requests](https://img.shields.io/github/issues-pr/DogeisCut/osa-tank-editor?style=for-the-badge)
![Stars](https://img.shields.io/github/stars/DogeisCut/osa-tank-editor?style=for-the-badge)
![Last Commit](https://img.shields.io/github/last-commit/DogeisCut/osa-tank-editor?style=for-the-badge)

</div>

---

## Overview
**osa-tank-editor** is a visual tool for creating and editing entities for [Open Source Arras](https://github.com/AE0hello/open-source-arras).  
It aims to simplify the process of building and adjusting tanks/entities, and offers a clean interface for server __arras.io__ private server developers and contributors alike!


---

## Features
- Nothing yet! We are very early in development.

Additional details and planned updates can be found in the [TODO list](https://github.com/DogeisCut/osa-tank-editor/blob/main/TODO.md).

---

## Structure
The project currently uses **Vite** with **TypeScript** as its foundation.  
```
osa-tank-editor/
├─ index.html # Entry HTML file (currently minimal)
├─ src/
│ ├─ index.ts # Main TypeScript entry point, defines core types and render logic
│ └─ style.css # Placeholder stylesheet
├─ package.json # NPM scripts and dependencies
└─ tsconfig.json # TypeScript configuration
```

### Build and Development
The available NPM scripts:

```json
"scripts": {
	"dev": "vite",
	"build": "tsc && vite build",
	"preview": "vite preview"
}
```
- `npm run dev`: Launches a local development server
- `npm run build`: Compiles TypeScript and builds a production bundle
- `npm run preview`: Serves the build output for testing

---

## Contributing
Contributions are encouraged.  
If you'd like to assist with development or fix an issue, feel free to submit a pull request.  
If you are stuck and don't know how to contribute, check the [TODO list](https://github.com/DogeisCut/osa-tank-editor/blob/main/TODO.md)!

---

## License
This project is licensed under the [GNU General Public License v3.0](LICENSE).

---

<div align="center">
Thank you! :3
</div>
