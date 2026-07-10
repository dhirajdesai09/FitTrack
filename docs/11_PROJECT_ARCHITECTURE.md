# FitTrack Project Architecture

An engineering analysis of the FitTrack front-end architecture.

---

## 1. Modular Rendering Layers
FitTrack enforces a strict unidirectional rendering hierarchy:
```
           [ index.html ] (Browser Root Entry)
                 │
            [ main.jsx ] (Virtual DOM Mounter)
                 │
             [ App.jsx ] (Layout Wrapper)
                 │
      ┌──────────┴──────────┐
[ Sidebar / Header ]   [ FitnessProvider ]
                            │
                   [ Render Active Tab ]
             (Dashboard, Train, Eat, Tools Views)
```

---

## 2. Design Consistency & Theme (Tailwind CSS v4)
- **Glass Card System:** Uses a common aesthetic with `bg-white/5` and `backdrop-blur-[40px]`.
- **Responsive Layout Drawer:** Large sidebars collapse into touch-safe footer buttons on small screen sizes.
- **Dynamic Assets:** Loads fluid vector icons natively via Lucide, keeping bundle load times small.
