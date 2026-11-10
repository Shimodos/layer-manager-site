# layer-manager-site

Landing page for [Layer Manager](https://github.com/Shimodos/LayerManager), a layer panel for
Autodesk 3ds Max. Astro + Tailwind CSS, deployed to GitHub Pages:
https://shimodos.github.io/layer-manager-site/

```
npm install
npm run dev        # http://localhost:4321/layer-manager-site/
npm run build      # static site in dist/
```

Pushing to `main` builds and deploys the site (`.github/workflows/deploy.yml`).
One-time setup in the repository: Settings → Pages → Source: "GitHub Actions".

## Screenshots and the carousel

Nothing here is drawn by hand. The images in `src/assets/shots`, the frames in
`src/assets/demo`, `public/og.png` and `public/icon-256.png` are rendered from the real
panel inside 3ds Max by `tools/make_shots.ps1` in the LayerManager repository. To refresh
them after a change in the panel:

```powershell
pwsh ..\LayerManager\tools\make_shots.ps1
Copy-Item ..\LayerManager\docs\shots\panel-*.png, ..\LayerManager\docs\shots\search-*.png src\assets\shots
Copy-Item ..\LayerManager\docs\shots\demo\* src\assets\demo
Copy-Item ..\LayerManager\docs\shots\og.png, ..\LayerManager\docs\shots\icon-256.png public
```

`src/assets/demo/demo.json` lists the slides of the hero carousel and their captions
(`src/components/Demo.astro`). The carousel advances every 3.5 s while it is on screen,
pauses under the mouse, and can be dragged left / right with the mouse or a finger.
For visitors who prefer reduced motion the slides change without the sliding animation.
