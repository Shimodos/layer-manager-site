# Launch posts for Layer Manager

Media for both: `marketing/promo.mp4` (25 s, 1080×1350, no sound). It is rendered from the real
panel inside 3ds Max by `tools/make_promo.ps1` in the LayerManager repository:

```powershell
pwsh ..\LayerManager\tools\make_promo.ps1 -Out marketing\promo.mp4
```

Links sit at the end of each post. Both networks tend to show posts with links to fewer people,
so the alternative is to post the text with the video only and put the links in the first
reply / comment. The X thread below is already written that way.

---

## X (Twitter)

A post is limited to 280 characters, and any link counts as 23. The first post has no link on
purpose; the links go in the reply.

### Post (with promo.mp4)

```text
The Scene Explorer in 3ds Max does a lot. I wanted a small panel for layers only, so I made one.

Layer Manager:

- nested layers and their objects on one list
- hide or freeze a layer, an object or a whole group in one click
- search, isolate, layer colours

Free, open source.
```

278 of 280. The list uses plain hyphens on purpose: X counts a "•" bullet as two characters.

### Reply 1

```text
It follows the scene live, also when you change things in the Scene Explorer, and every change is one undo step.

Site and download: https://shimodos.github.io/layer-manager-site/
Code (one Python file, MIT): https://github.com/Shimodos/LayerManager

#3dsmax #archviz #python #opensource
```

### Reply 2 (optional, for the curious)

```text
The same file runs on PySide2 (3ds Max 2024) and PySide6 (2026).

The tests run inside 3ds Max itself, headless: 3dsmaxbatch builds a scene, opens the real panel and drives it. The screenshots and this video are painted by the panel the same way, not captured from the screen.
```

---

## LinkedIn

The first two lines are what LinkedIn shows before "see more", so they carry the hook.

### Post (with promo.mp4)

LinkedIn attaches a link preview card as soon as a URL is typed, and a post can carry only one
attachment: remove the card (the × on it) before adding the video.

```text
In a big 3ds Max scene, finding the right layer can take longer than the work you wanted to do on it. So I wrote a small panel that does one thing: layers.

It is called Layer Manager. It is a floating window small enough to keep open next to the viewport, and it is free and open source.

What it does:

• Shows every layer as a tree, nested layers included, with its colour and the number of objects on it.
• Opens a layer to list its objects. Click a row and the object is selected in the viewport; select something in the viewport and its row lights up in the list.
• Hides or freezes a layer, a single object or a whole group with one click on the row. A lock on group rows opens and closes the group.
• Alt+click on the eye isolates a layer: everything else is hidden, its parents and nested layers stay.
• Searches layers and objects by name as you type.
• Moves the current selection into the highlighted layer, creates nested layers, renames in place, changes the layer colour.
• Follows the scene live, also when you change things in the Scene Explorer, and every change it makes is one undo step.
• Dark and light themes: it picks the one that matches your 3ds Max, and a button switches it.

A few things I learned on the way. 3ds Max has no event for "a layer was hidden, frozen or renamed", so the panel compares a snapshot of the layer list about once a second. Hiding a group by its head node hides nothing: the head is a dummy, and the members have to be hidden with it. And the two Qt bindings 3ds Max has shipped, PySide2 and PySide6, are close enough that one file can serve both, if you test both.

That last part is the one I am happiest with. The tests run inside 3ds Max itself, without a window: a script builds a scene, opens the real panel and clicks through it, in 3ds Max 2024 and 2026. The screenshots on the site and the video in this post are painted by the panel the same way, not captured from the screen.

One Python file, no plugins, no installer beyond dragging an .mzp into the viewport. MIT license. Tested in 3ds Max 2024 and 2026.

Download and site: https://shimodos.github.io/layer-manager-site/
Code: https://github.com/Shimodos/LayerManager

#3dsmax #archviz #python #opensource #cgi
```

---

## Checklist before posting

- Watch `promo.mp4` once with your own eyes; it was checked frame by frame, not played.
- The video has no audio track. Both networks accept that.
- Put the panel through a real working scene first: the tests cover the logic, not how it feels.
- After posting, paste the link next to the heading here, as in the Linter file.
