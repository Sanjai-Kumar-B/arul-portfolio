# Research & Reverse Engineering Notes: spydyy-portfolio

**Source URL:** `https://spydyy-portfolio.vercel.app/`
**Target Local Path:** `src/app/page.tsx`

---

## 1. Visual Hierarchy & Theme
- **Theme:** Spider-Man / Web-Slinger themed portfolio for Sri Sushmita (Full-Stack Engineer & AI/ML undergrad).
- **Primary Colors:**
  - Hero Red: `#a31515`, Accent Red: `#ef4444`, Hover Red: `#7a0f0f`
  - Dark Red Border: `rgba(163,21,21,0.3)`
  - Shadows / Text Shadows: `2px 2px 0px #fca5a5`, `4px 4px 0px #ef4444, 7px 7px 0px #a31515`
  - Backgrounds: Clean white (`#ffffff`) and warm gray (`#fafafa` / `bg-gray-50`)
- **Typography:**
  - Heavy black uppercase italic headings with retro comic book layered drop shadows.
  - Tracking: `tracking-tighter` on headings, `tracking-[0.2em]` on subheadings/badges.

---

## 2. Page Structure & Components
1. **Navbar** (`src/components/portfolio/Navbar.tsx`)
   - Fixed top nav, switches from transparent to `bg-black/90 backdrop-blur-md` on scroll > 50px.
   - Red S stylized logo: `SUSHMITA.`.
   - Links: About, Skills, Projects, Contact with red line hover animation and mobile menu drawer.

2. **Hero** (`src/components/portfolio/Hero.tsx`)
   - Interactive dual-layer image mask:
     - Underneath layer: `/assets/image-2-DS0sMyr7.png`
     - Top masked layer: `/assets/image-1-fYP2o7gg.png`
     - Mouse cursor drives radial mask aperture via GSAP `quickTo` ticker.
   - Slow spinning decorative spider webs (`/assets/web1-770H2sSx.png`).
   - Title: `SRI SUSHMITA.` with comic 3D offset shadow.
   - CTA buttons: "Explore Projects" & "sde_resume.pdf".
   - Crossed diagonal marquee ribbons (`4deg` and `-4deg`) scrolling endlessly with hover slowdown.

3. **About** (`src/components/portfolio/About.tsx`)
   - "Behind the Mask" badge with spider icon (`/assets/spydy-DLbFrGCQ.png`).
   - Biography copy for Sri Sushmita (Aditya Engineering College & Technical Hub).
   - Tech stack badges with hover pop.
   - Right side: Spider web silk thread dropping from top with framed profile photo (`/assets/mypic-a3-nZ6gT.png`) swaying in a pendulum motion.

4. **Technical Skills** (`src/components/portfolio/Skills.tsx`)
   - 10 skill cards in a responsive grid.
   - Slide-in red fill on hover with inverted text color.
   - Hanging Spider-Man asset (`/assets/spydy_hang-Cac1gK30.png`) swinging from silk web.

5. **Featured Works / Projects** (`src/components/portfolio/Projects.tsx`)
   - 4 full-stack projects with descriptions and tech pills.
   - Slide-in red accent border on hover.
   - Standing Spider-Man asset (`/assets/spydy_stand-BwBM-zCr.png`) with floating animation.

6. **Contact** (`src/components/portfolio/Contact.tsx`)
   - Interactive contact form with name, email, message.
   - Animated success confirmation state (`Message Sent!`).
   - Hanging Spider-Man asset on top-right.

---

## 3. Extracted Assets
- `image-1-fYP2o7gg.png` - Hero masked Spiderman layer
- `image-2-DS0sMyr7.png` - Hero identity bottom layer
- `mypic-a3-nZ6gT.png` - Sri Sushmita profile photo
- `spydy_hang-Cac1gK30.png` - Hanging Spider-Man
- `spydy_stand-BwBM-zCr.png` - Standing Spider-Man
- `spydy-DLbFrGCQ.png` - Spider logo icon
- `web1-770H2sSx.png` - Spider web watermark overlay
- `favicon.svg` - Spider favicon

