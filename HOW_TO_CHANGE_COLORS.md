# 🎨 How to Change Color Values

## 📍 Where to Change Colors

**File:** `src/lib/themes.js`

This is the **ONLY file** you need to edit to change any color in any theme!

---

## 🎯 Quick Guide

### Step 1: Open the File
```
portfolio-architect-pro/
  └── src/
      └── lib/
          └── themes.js  ← Edit this file!
```

### Step 2: Find Your Theme
The file has 6 themes:
- `'default'` - Purple theme
- `'blue'` - Blue theme
- `'purple-gold'` - Purple & Gold theme
- `'green-earth'` - Green & Earth theme
- `'olive-gold'` - Olive & Gold theme ⭐ (Your favorite!)
- `'dark-gray'` - Dark Gray theme

### Step 3: Change Color Values
Each theme is an object with CSS variable names and HSL color values.

**Format:** `'--variable-name': 'H S% L%'`

**Example:**
```javascript
'olive-gold': {
  '--primary': '60 40% 35%',        // Main color (olive green)
  '--primary-light': '45 100% 55%',  // Light accent (gold)
  '--primary-dark': '60 50% 25%',    // Dark shade
  // ... more colors
}
```

---

## 🎨 Color Variables Explained

### Primary Colors (Most Important)
- `--primary` - Main brand color (buttons, links, highlights)
- `--primary-light` - Lighter version (gradients, hover states)
- `--primary-dark` - Darker version (active states, shadows)
- `--primary-foreground` - Text color on primary background

### Background Colors
- `--background` - Main page background
- `--card` - Card/container backgrounds
- `--section-bg` - Section backgrounds
- `--section-alt` - Alternate section backgrounds

### Text Colors
- `--foreground` - Main text color
- `--card-foreground` - Text on cards
- `--muted-foreground` - Muted/secondary text

### UI Elements
- `--border` - Border colors
- `--input` - Input field borders
- `--ring` - Focus ring color
- `--accent` - Accent color
- `--secondary` - Secondary color

### Gradients
- `--gradient-from` - Gradient start color
- `--gradient-to` - Gradient end color

---

## 📝 Example: Change Olive & Gold Colors

Let's say you want to make the olive darker and gold brighter:

```javascript
'olive-gold': {
  // Change olive green to darker
  '--primary': '60 50% 30%',        // Was: '60 40% 35%'
  
  // Change gold to brighter
  '--primary-light': '45 100% 60%', // Was: '45 100% 55%'
  
  // Update gradient to match
  '--gradient-from': '60 50% 30%',
  '--gradient-to': '45 100% 60%',
  
  // ... rest stays the same
}
```

---

## 🎨 HSL Color Format

All colors use **HSL format**: `Hue Saturation% Lightness%`

- **Hue (H)**: 0-360 (color wheel position)
  - 0/360 = Red
  - 60 = Yellow
  - 120 = Green
  - 180 = Cyan
  - 240 = Blue
  - 300 = Magenta

- **Saturation (S)**: 0-100% (color intensity)
  - 0% = Gray
  - 100% = Full color

- **Lightness (L)**: 0-100% (brightness)
  - 0% = Black
  - 50% = Normal
  - 100% = White

### Example Colors:
```javascript
// Olive Green
'--primary': '60 40% 35%'  // Yellow-green, medium saturation, dark

// Gold
'--primary-light': '45 100% 55%'  // Yellow-orange, full saturation, medium-light

// Purple
'--primary': '280 80% 60%'  // Purple, high saturation, medium-light

// Blue
'--primary': '217 91% 40%'  // Blue, high saturation, medium-dark
```

---

## 🔧 Quick Tips

1. **Keep color pairs consistent:**
   - If you change `--primary`, also update `--gradient-from`
   - If you change `--primary-light`, also update `--gradient-to`

2. **Test contrast:**
   - Make sure text is readable on backgrounds
   - Dark backgrounds need light text (`--foreground: '0 0% 100%'`)
   - Light backgrounds need dark text (`--foreground: '0 0% 20%'`)

3. **Use color picker tools:**
   - https://hslpicker.com/ - Visual HSL color picker
   - Convert from hex: https://www.hexcolortool.com/

4. **Save and refresh:**
   - After changing colors, save the file
   - Hard refresh browser (Ctrl + Shift + R)
   - Colors update instantly!

---

## 📂 File Structure

```
src/lib/themes.js
├── themes = {
│   ├── 'default': { ...colors... }
│   ├── 'blue': { ...colors... }
│   ├── 'purple-gold': { ...colors... }
│   ├── 'green-earth': { ...colors... }
│   ├── 'olive-gold': { ...colors... }  ← Your favorite!
│   └── 'dark-gray': { ...colors... }
└── }
```

---

## ✅ After Changing Colors

1. Save `themes.js`
2. Refresh browser (Ctrl + Shift + R)
3. Select your theme from the palette icon
4. See your new colors instantly!

---

**That's it!** Just edit `src/lib/themes.js` and all colors will update! 🎨


