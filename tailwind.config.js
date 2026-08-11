/* Design tokens (colors, spacing, type scale) for Bilel Coiff's site.
   Rebuild after editing classes in index.html with:
     npm install
     npm run build
*/
module.exports = {
  darkMode: "class",
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        "background": "#101214",
        "surface": "#101214",
        "surface-dim": "#101214",
        "surface-bright": "#3a3d41",
        "surface-container-lowest": "#0b0c0e",
        "surface-container-low": "#17191c",
        "surface-container": "#1c1f22",
        "surface-container-high": "#272a2e",
        "surface-container-highest": "#32353a",
        "surface-variant": "#35383c",
        "on-surface": "#eef0f1",
        "on-surface-variant": "#c9b8a8",
        "outline": "#8f8579",
        "outline-variant": "#4a4038",
        "primary": "#e69860",
        "primary-container": "#d97a3f",
        "primary-fixed": "#f2b98a",
        "primary-fixed-dim": "#d97a3f",
        "on-primary": "#1a0f06",
        "on-primary-container": "#1a0f06",
        "on-primary-fixed": "#2a1608",
        "on-primary-fixed-variant": "#5c3012",
        "inverse-primary": "#8a4a1f",
        "secondary": "#8a5c37",
        "on-secondary": "#f5efe8",
        "secondary-container": "#613E24",
        "on-secondary-container": "#f0e6da",
        "secondary-fixed": "#a97a4f",
        "secondary-fixed-dim": "#8a5c37",
        "on-secondary-fixed": "#2a1a0e",
        "on-secondary-fixed-variant": "#3d2717"
      },
      borderRadius: {
        "DEFAULT": "0.375rem",
        "lg": "0.625rem",
        "xl": "1rem",
        "full": "9999px"
      },
      spacing: {
        "margin-desktop": "64px",
        "gutter": "24px",
        "container-max": "1200px",
        "section-gap": "120px",
        "base": "8px",
        "margin-mobile": "20px"
      },
      fontFamily: {
        "headline-sm": ["Oswald"],
        "headline-md": ["Oswald"],
        "display-lg": ["Oswald"],
        "display-lg-mobile": ["Oswald"],
        "body-lg": ["Inter"],
        "body-md": ["Inter"],
        "label-md": ["Inter"],
        "label-sm": ["Inter"]
      },
      fontSize: {
        "headline-sm": ["24px", { "lineHeight": "32px", "fontWeight": "600" }],
        "body-lg": ["18px", { "lineHeight": "28px", "fontWeight": "400" }],
        "label-md": ["14px", { "lineHeight": "20px", "letterSpacing": "0.08em", "fontWeight": "600" }],
        "headline-md": ["32px", { "lineHeight": "40px", "fontWeight": "600" }],
        "display-lg-mobile": ["40px", { "lineHeight": "46px", "letterSpacing": "-0.01em", "fontWeight": "700" }],
        "display-lg": ["62px", { "lineHeight": "68px", "letterSpacing": "-0.01em", "fontWeight": "700" }],
        "body-md": ["16px", { "lineHeight": "24px", "fontWeight": "400" }],
        "label-sm": ["12px", { "lineHeight": "16px", "letterSpacing": "0.05em", "fontWeight": "500" }]
      }
    }
  },
  plugins: []
}
