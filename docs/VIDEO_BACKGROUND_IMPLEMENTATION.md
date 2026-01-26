# Video Background Implementation

## Overview

The Shield and Shadow Investigations website features a dynamic smoke video background that plays behind all content with frosted glass UI effects for readability.

## Current Implementation

### Video Files

Located in `/public/`:

| File | Purpose | Duration |
|------|---------|----------|
| `smoke-video.mp4` | Original landscape video | ~6s |
| `smoke-video-portrait.mp4` | Rotated 90° for portrait viewports | ~6s |
| `smoke-video-pingpong.mp4` | Landscape forward+reverse for seamless loop | ~12s |
| `smoke-video-portrait-pingpong.mp4` | Portrait forward+reverse for seamless loop | ~12s |

**Active videos**: The ping-pong versions are used in production for seamless looping.

### Component: `EffectVideoBackground.tsx`

Location: `src/components/smoke-effects/EffectVideoBackground.tsx`

Key features:
- Detects portrait vs landscape orientation via `window.innerHeight > window.innerWidth`
- Swaps between portrait and landscape video files based on orientation
- Uses React `key` prop to force video element re-render on orientation change
- Canvas overlay for interactive smoke trails on mouse/touch movement

```tsx
<video
  key={isPortrait ? 'portrait' : 'landscape'}
  autoPlay
  loop
  muted
  playsInline
  style={{
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    objectFit: 'fill',
    zIndex: 0,
    pointerEvents: 'none',
  }}
>
  <source src={isPortrait ? '/smoke-video-portrait-pingpong.mp4' : '/smoke-video-pingpong.mp4'} type="video/mp4" />
</video>
```

### URL Parameters

- **Default** (no parameter): Video background enabled
- **`?video=0`**: Disables video background, shows original static design

### CSS: Frosted Glass Effects

Location: `src/index.css` (`.video-bg-mode` class)

| Element | Background | Blur |
|---------|------------|------|
| Header | `rgba(10, 10, 10, 0.7)` | 12px |
| Cards/Sections | `rgba(15, 15, 20, 0.6)` | 10px |
| Buttons (outline) | `rgba(10, 10, 10, 0.5)` | 8px |
| Footer | `rgba(5, 5, 5, 0.8)` | 12px |

---

## Challenges Encountered & Solutions

### Challenge 1: CSS Rotation Doesn't Preserve Fullscreen Fill

**Problem**: When rotating a video element 90 degrees with CSS `transform: rotate(90deg)`, the video no longer fills the viewport. A 100vw × 100vh element rotated 90° becomes visually wider than tall, creating gaps.

**Attempts that failed**:
1. Just `transform: rotate(90deg)` - video became square, didn't fill screen
2. Swapping width/height to `100vh × 100vw` - still positioning issues
3. Adding `transformOrigin: '50vw 50vh'` - didn't solve the geometry problem
4. Adding translate calculations - shifted video off-center

**Solution**: Pre-rotate the video file using ffmpeg instead of CSS transforms. Two separate video files (landscape and portrait) eliminate all CSS transform complexity.

```bash
# Create portrait version (90° clockwise rotation)
ffmpeg -i smoke-video.mp4 -vf 'transpose=1' -c:a copy smoke-video-portrait.mp4
```

### Challenge 2: Video Loop Gap/Pause

**Problem**: HTML5 video `loop` attribute causes a noticeable pause when the video restarts. This is a known browser issue - browsers seek back to frame 0 when the video ends, causing a visible gap.

**Solution**: Create "ping-pong" videos that play forward then backward. When the video loops, it's at the exact same frame it started with, making the transition seamless.

```bash
# Create ping-pong video (forward + reverse)
ffmpeg -i smoke-video.mp4 -filter_complex '[0:v]reverse,fifo[r];[0:v][r]concat=n=2:v=1[v]' -map '[v]' -an smoke-video-pingpong.mp4
```

Benefits:
- Seamless visual loop (end frame = start frame)
- Longer duration (12s vs 6s) means loop gap occurs less frequently
- No audio track (`-an`) reduces file size

### Challenge 3: Orientation Change Handling

**Problem**: When viewport changes from landscape to portrait (or vice versa), the video needs to swap but React doesn't re-render `<source>` changes automatically.

**Solution**: Add a `key` prop to the video element that changes based on orientation. This forces React to unmount/remount the video element, loading the correct file.

```tsx
<video key={isPortrait ? 'portrait' : 'landscape'}>
```

---

## Test Scenarios

### Smoke Effect Test Files

Located in `/smoke-tests/` (not deployed to production):

| File | Description |
|------|-------------|
| `svg-filter-01-basic-rect.html` | Basic SVG turbulence filter |
| `svg-filter-02-dispersed.html` | Dispersed smoke effect |
| `svg-filter-03-intense.html` | Intense turbulence |
| `svg-filter-04-subtle.html` | Subtle/minimal effect |
| `svg-filter-05-chaotic.html` | Maximum turbulence, fast animation |

These files test SVG filter-based fire/smoke frame effects as alternatives to the video approach.

### Manual Testing Checklist

- [ ] Desktop landscape: Video fills entire screen, no gaps
- [ ] Desktop portrait (narrow window): Portrait video loads, fills screen
- [ ] Mobile portrait: Video fills screen, touch trails work
- [ ] Mobile landscape: Landscape video loads on rotation
- [ ] Loop test: Watch for 30+ seconds, verify seamless looping
- [ ] `?video=0`: Original static design appears
- [ ] Header/footer/cards: Frosted glass effect visible
- [ ] Interactive smoke: Mouse/touch creates smoke trails

---

## Future Improvements

1. **Video Compression**: Current ping-pong videos are ~3MB each. Could reduce with:
   - Lower resolution
   - Higher compression (CRF 28-30)
   - WebM format for browsers that support it

2. **Preloading**: Add `preload="auto"` or implement dual-video buffering to further reduce any loop gaps

3. **SVG Filter Alternative**: The `/smoke-tests/` files explore pure CSS/SVG approaches that could replace video entirely for lower bandwidth

4. **Performance**: Consider reducing video quality on mobile or adding a `?performance=low` option

---

## File Structure

```
shield-shadow-investigations-website/
├── public/
│   ├── smoke-video.mp4                    # Original landscape
│   ├── smoke-video-portrait.mp4           # Rotated for portrait
│   ├── smoke-video-pingpong.mp4           # Landscape seamless loop (ACTIVE)
│   └── smoke-video-portrait-pingpong.mp4  # Portrait seamless loop (ACTIVE)
├── src/
│   ├── App.tsx                            # Video toggle logic
│   ├── index.css                          # .video-bg-mode styles
│   └── components/
│       └── smoke-effects/
│           └── EffectVideoBackground.tsx  # Video + canvas component
├── smoke-tests/                           # SVG filter experiments (not deployed)
└── docs/
    └── VIDEO_BACKGROUND_IMPLEMENTATION.md # This file
```

---

## Commands Reference

### Create rotated video
```bash
ffmpeg -i input.mp4 -vf 'transpose=1' -c:a copy output-portrait.mp4
```

### Create ping-pong video
```bash
ffmpeg -i input.mp4 -filter_complex '[0:v]reverse,fifo[r];[0:v][r]concat=n=2:v=1[v]' -map '[v]' -an output-pingpong.mp4
```

### Build and deploy
```bash
npm run build
# Build output goes to /dist, served by nginx on DigitalOcean
```
