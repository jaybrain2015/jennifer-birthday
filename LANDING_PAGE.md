# 🎬 Cinematic Birthday Experience

## 🌟 Landing Page Features

### The Entrance
Users now experience a **mind-blowing cinematic entrance** before reaching the main birthday page:

1. **Landing Page** (`landing.html`) - Luxury entrance
2. **Curtain Reveal** - Dramatic left/right curtain opening (2 seconds after load)
3. **Enter Button** - Gold button to access main celebration
4.  **Smooth Transition** - Curtains close, fade to main page

### Visual Elements

**Jennifer's Photo**
- Full-screen background with slow zoom animation
- Luxury gradient overlay (maroon, black, gold)
- Parallax effect on mouse movement
- Professional, elegant presentation

**Typography**
- "Celebrating" - Uppercase, gold, letter-spaced
- "Jennifer" - Great Vibes cursive, huge elegant script
- "A Woman of Grace & Excellence" - Italic serif subtitle
- Premium fonts: Playfair Display, Great Vibes, Montserrat

**Gold Enter Button**
- Gradient gold (#daa520 → #ffd700)
- Shimmer animation on hover
- Glowing shadows
- Arrow icon slides on hover

**Animated Elements**
- ✨ Floating sparkles (3 positions)
- Scroll indicator with bounce animation
- Floating gold circles (blur effect)
- Curtain texture (vertical lines)

### Color Scheme
Matches the photo's luxury aesthetic:
- **Maroon Red**: #8b0000
- **Gold**: #daa520, #ffd700
- **Black**: #000000
- **White**: Text and accents

## 🎭 How It Works

### Flow
```
landing.html (entrance)
    ↓
[Curtains open automatically after 2s]
    ↓
[User clicks "Enter Celebration"]
    ↓
[Curtains close smoothly]
    ↓
index.html (main birthday page)
```

### Animations Timeline
- **0s**: Page loads, curtains closed
- **1s**: Content fades in
- **1.5-3.5s**: Typography animates in sequence
- **2s**: Curtains auto-open (reveal effect)
- **3.5s**: Enter button appears
- **On click**: Curtains close → fade → redirect

## 📁 New Files

- `landing.html` - Cinematic entrance page
- `landing.css` - Luxury styling & animations
- `landing.js` - Curtain effects & transitions
- `jenifer-photo.jpg` - Jennifer's elegant photo

## 🚀 To Use

**Option 1: Direct Landing**
Share `landing.html` - visitors see cinematic entrance first

**Option 2: Main Page Direct**
Keep `index.html` as is - skip entrance

## 🎨 Customization

### Change Text
Edit `landing.html`:
```html
<span class="title-line-1">Celebrating</span>
<span class="title-name">Jennifer</span>
<span class="title-line-3">Your custom tagline</span>
```

### Adjust Colors
Edit `landing.css` line 53:
```css
background: linear-gradient(135deg, #yourcolor1, #yourcolor2);
```

### Curtain Speed
Edit `landing.css` line 76:
```css
transition: transform 1.5s; /* Change duration */
```

### Auto-Open Delay
Edit `landing.js` line 12:
```javascript
setTimeout(() => {
    openCurtains();
}, 2000); // Change delay in ms
```

## 💡 Features

✅ Cinematic curtain reveal  
✅ Luxury gold & maroon theme  
✅ Parallax mouse effects  
✅ Smooth page transitions  
✅ Auto-opening curtains  
✅ Responsive mobile design  
✅ Elegant typography  
✅ Floating animations  
✅ Professional lighting effects  

---

**This creates an unforgettable first impression! 🌟**
