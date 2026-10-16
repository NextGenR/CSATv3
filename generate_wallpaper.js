// Script to generate a rich, seamless Math / CSAT doodle wallpaper SVG
// Themes: Numbers, Arithmetic, Algebra, Geometry, Trigonometry, CSAT Reasoning
// Style: Telegram & WhatsApp line-art doodle wallpaper (subtle, seamless repeating pattern)

const fs = require('fs');
const path = require('path');

// Target file
const outputPath = path.join(__dirname, 'math-wallpaper.svg');

// Color palette for Telegram dark wallpaper
// Strokes: crisp soft light-blue / slate, subtle opacity
const strokeColor = "#6da8e2";
const strokeOpacity = "0.24";
const fillOpacity = "0.09";
const strokeWidth = "1.6";

// SVG width and height
const W = 600;
const H = 600;

// Doodles array: { x, y, rotate, scale, render(g) }
// We distribute around 45-60 main doodles across a 600x600 grid with jitter and rotation, plus ~30 micro-elements (+, -, x, dots, %, pi, theta)
const doodles = [];

// Helper to add doodle
function add(x, y, rot, s, svgContent) {
  doodles.push({ x, y, rot, s, svgContent });
}

// 1. Set-Square Triangle Ruler
add(50, 45, -12, 0.9, `
  <polygon points="4,48 48,4 48,48" stroke="${strokeColor}" stroke-width="${strokeWidth}" fill="none"/>
  <polygon points="14,42 42,14 42,42" stroke="${strokeColor}" stroke-width="${strokeWidth}" fill="${strokeColor}" fill-opacity="${fillOpacity}"/>
  <line x1="48" y1="12" x2="43" y2="12" stroke="${strokeColor}" stroke-width="${strokeWidth}"/>
  <line x1="48" y1="20" x2="41" y2="20" stroke="${strokeColor}" stroke-width="${strokeWidth}"/>
  <line x1="48" y1="28" x2="43" y2="28" stroke="${strokeColor}" stroke-width="${strokeWidth}"/>
  <line x1="48" y1="36" x2="41" y2="36" stroke="${strokeColor}" stroke-width="${strokeWidth}"/>
  <line x1="20" y1="48" x2="20" y2="43" stroke="${strokeColor}" stroke-width="${strokeWidth}"/>
  <line x1="28" y1="48" x2="28" y2="41" stroke="${strokeColor}" stroke-width="${strokeWidth}"/>
  <line x1="36" y1="48" x2="36" y2="43" stroke="${strokeColor}" stroke-width="${strokeWidth}"/>
`);

// 2. Pi Symbol π
add(155, 40, 8, 1.0, `
  <path d="M 6 12 L 42 12 M 16 12 L 15 38 M 32 12 C 32 25 33 36 39 38" stroke="${strokeColor}" stroke-width="${strokeWidth}" fill="none" stroke-linecap="round"/>
`);

// 3. Protractor
add(260, 48, 15, 0.95, `
  <path d="M 6 36 L 50 36 A 22 22 0 0 1 6 36 Z" stroke="${strokeColor}" stroke-width="${strokeWidth}" fill="${strokeColor}" fill-opacity="${fillOpacity}"/>
  <circle cx="28" cy="36" r="2.5" stroke="${strokeColor}" stroke-width="${strokeWidth}" fill="none"/>
  <line x1="28" y1="14" x2="28" y2="18" stroke="${strokeColor}" stroke-width="${strokeWidth}"/>
  <line x1="12" y1="20" x2="15" y2="23" stroke="${strokeColor}" stroke-width="${strokeWidth}"/>
  <line x1="44" y1="20" x2="41" y2="23" stroke="${strokeColor}" stroke-width="${strokeWidth}"/>
`);

// 4. Square Root with x: √(x)
add(370, 42, -6, 0.95, `
  <path d="M 4 26 L 9 26 L 14 40 L 22 10 L 46 10" stroke="${strokeColor}" stroke-width="${strokeWidth}" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M 28 20 L 38 32 M 38 20 L 28 32" stroke="${strokeColor}" stroke-width="${strokeWidth}" fill="none" stroke-linecap="round"/>
`);

// 5. 3D Wireframe Cube
add(480, 50, 10, 0.9, `
  <rect x="6" y="18" width="28" height="28" rx="2" stroke="${strokeColor}" stroke-width="${strokeWidth}" fill="none"/>
  <line x1="6" y1="18" x2="18" y2="6" stroke="${strokeColor}" stroke-width="${strokeWidth}"/>
  <line x1="34" y1="18" x2="46" y2="6" stroke="${strokeColor}" stroke-width="${strokeWidth}"/>
  <line x1="34" y1="46" x2="46" y2="34" stroke="${strokeColor}" stroke-width="${strokeWidth}"/>
  <line x1="18" y1="6" x2="46" y2="6" stroke="${strokeColor}" stroke-width="${strokeWidth}"/>
  <line x1="46" y1="6" x2="46" y2="34" stroke="${strokeColor}" stroke-width="${strokeWidth}"/>
  <line x1="6" y1="46" x2="18" y2="34" stroke="${strokeColor}" stroke-width="${strokeWidth}" stroke-dasharray="2,2"/>
  <line x1="18" y1="34" x2="18" y2="6" stroke="${strokeColor}" stroke-width="${strokeWidth}" stroke-dasharray="2,2"/>
  <line x1="18" y1="34" x2="46" y2="34" stroke="${strokeColor}" stroke-width="${strokeWidth}" stroke-dasharray="2,2"/>
`);

// 6. Sigma Summation ∑
add(565, 45, -15, 0.95, `
  <path d="M 38 10 L 12 10 L 25 24 L 12 38 L 38 38" stroke="${strokeColor}" stroke-width="${strokeWidth}" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
  <circle cx="25" cy="5" r="1.5" fill="${strokeColor}"/>
  <text x="18" y="47" font-family="-apple-system, sans-serif" font-size="9" font-weight="600" fill="${strokeColor}">i=1</text>
`);

// Row 2 (y ~ 140)
// 7. Drawing Compass / Divider tool
add(55, 140, 20, 0.95, `
  <circle cx="24" cy="8" r="3.5" stroke="${strokeColor}" stroke-width="${strokeWidth}" fill="none"/>
  <line x1="24" y1="4" x2="24" y2="1" stroke="${strokeColor}" stroke-width="${strokeWidth}" stroke-linecap="round"/>
  <line x1="22" y1="12" x2="9" y2="46" stroke="${strokeColor}" stroke-width="${strokeWidth}" stroke-linecap="round"/>
  <line x1="26" y1="12" x2="39" y2="46" stroke="${strokeColor}" stroke-width="${strokeWidth}" stroke-linecap="round"/>
  <line x1="15" y1="28" x2="33" y2="28" stroke="${strokeColor}" stroke-width="${strokeWidth}"/>
  <circle cx="24" cy="28" r="2" fill="${strokeColor}"/>
`);

// 8. Quadratic Formula snippet: a² + b² = c²
add(160, 145, -8, 0.85, `
  <text x="2" y="24" font-family="-apple-system, sans-serif" font-size="15" font-weight="700" fill="${strokeColor}" letter-spacing="1">a² + b² = c²</text>
`);

// 9. Venn Diagram (Two intersecting sets)
add(280, 140, 5, 0.9, `
  <circle cx="18" cy="22" r="15" stroke="${strokeColor}" stroke-width="${strokeWidth}" fill="${strokeColor}" fill-opacity="${fillOpacity}"/>
  <circle cx="34" cy="22" r="15" stroke="${strokeColor}" stroke-width="${strokeWidth}" fill="${strokeColor}" fill-opacity="${fillOpacity}"/>
  <text x="11" y="25" font-family="-apple-system, sans-serif" font-size="9" font-weight="700" fill="${strokeColor}">A</text>
  <text x="35" y="25" font-family="-apple-system, sans-serif" font-size="9" font-weight="700" fill="${strokeColor}">B</text>
`);

// 10. Dice with dots (Probability)
add(390, 140, -18, 0.9, `
  <rect x="6" y="6" width="34" height="34" rx="7" stroke="${strokeColor}" stroke-width="${strokeWidth}" fill="${strokeColor}" fill-opacity="${fillOpacity}"/>
  <circle cx="15" cy="15" r="2.5" fill="${strokeColor}"/>
  <circle cx="31" cy="15" r="2.5" fill="${strokeColor}"/>
  <circle cx="23" cy="23" r="2.5" fill="${strokeColor}"/>
  <circle cx="15" cy="31" r="2.5" fill="${strokeColor}"/>
  <circle cx="31" cy="31" r="2.5" fill="${strokeColor}"/>
`);

// 11. Cartesian Coordinates (X-Y Plane with parabola)
add(495, 142, 6, 0.9, `
  <line x1="6" y1="38" x2="46" y2="38" stroke="${strokeColor}" stroke-width="${strokeWidth}" stroke-linecap="round"/>
  <polyline points="42,35 46,38 42,41" stroke="${strokeColor}" stroke-width="${strokeWidth}" fill="none" stroke-linecap="round"/>
  <line x1="14" y1="46" x2="14" y2="6" stroke="${strokeColor}" stroke-width="${strokeWidth}" stroke-linecap="round"/>
  <polyline points="11,10 14,6 17,10" stroke="${strokeColor}" stroke-width="${strokeWidth}" fill="none" stroke-linecap="round"/>
  <path d="M 14 38 Q 24 36 38 16" stroke="${strokeColor}" stroke-width="${strokeWidth}" fill="none" stroke-linecap="round"/>
  <text x="44" y="34" font-family="-apple-system, sans-serif" font-size="8" font-weight="700" fill="${strokeColor}">x</text>
  <text x="18" y="10" font-family="-apple-system, sans-serif" font-size="8" font-weight="700" fill="${strokeColor}">y</text>
`);

// Row 3 (y ~ 240)
// 12. Clock (CSAT Time & Angle problems)
add(45, 245, -10, 0.9, `
  <circle cx="24" cy="24" r="19" stroke="${strokeColor}" stroke-width="${strokeWidth}" fill="${strokeColor}" fill-opacity="${fillOpacity}"/>
  <circle cx="24" cy="24" r="2" fill="${strokeColor}"/>
  <line x1="24" y1="8" x2="24" y2="12" stroke="${strokeColor}" stroke-width="${strokeWidth}" stroke-linecap="round"/>
  <line x1="24" y1="36" x2="24" y2="40" stroke="${strokeColor}" stroke-width="${strokeWidth}" stroke-linecap="round"/>
  <line x1="8" y1="24" x2="12" y2="24" stroke="${strokeColor}" stroke-width="${strokeWidth}" stroke-linecap="round"/>
  <line x1="36" y1="24" x2="40" y2="24" stroke="${strokeColor}" stroke-width="${strokeWidth}" stroke-linecap="round"/>
  <line x1="24" y1="24" x2="24" y2="14" stroke="${strokeColor}" stroke-width="2" stroke-linecap="round"/>
  <line x1="24" y1="24" x2="33" y2="24" stroke="${strokeColor}" stroke-width="1.6" stroke-linecap="round"/>
`);

// 13. Straight Ruler with measurement ticks
add(150, 240, 25, 0.9, `
  <rect x="4" y="14" width="48" height="18" rx="2" stroke="${strokeColor}" stroke-width="${strokeWidth}" fill="${strokeColor}" fill-opacity="${fillOpacity}"/>
  <line x1="10" y1="14" x2="10" y2="21" stroke="${strokeColor}" stroke-width="${strokeWidth}"/>
  <line x1="16" y1="14" x2="16" y2="25" stroke="${strokeColor}" stroke-width="${strokeWidth}"/>
  <line x1="22" y1="14" x2="22" y2="21" stroke="${strokeColor}" stroke-width="${strokeWidth}"/>
  <line x1="28" y1="14" x2="28" y2="25" stroke="${strokeColor}" stroke-width="${strokeWidth}"/>
  <line x1="34" y1="14" x2="34" y2="21" stroke="${strokeColor}" stroke-width="${strokeWidth}"/>
  <line x1="40" y1="14" x2="40" y2="25" stroke="${strokeColor}" stroke-width="${strokeWidth}"/>
  <line x1="46" y1="14" x2="46" y2="21" stroke="${strokeColor}" stroke-width="${strokeWidth}"/>
`);

// 14. Direction Compass (CSAT Direction Sense)
add(260, 245, 0, 0.9, `
  <circle cx="24" cy="24" r="19" stroke="${strokeColor}" stroke-width="${strokeWidth}" fill="none"/>
  <polygon points="24,7 28,21 24,24 20,21" fill="${strokeColor}"/>
  <polygon points="24,41 28,27 24,24 20,27" stroke="${strokeColor}" stroke-width="1" fill="none"/>
  <polygon points="7,24 21,20 24,24 21,28" stroke="${strokeColor}" stroke-width="1" fill="none"/>
  <polygon points="41,24 27,20 24,24 27,28" stroke="${strokeColor}" stroke-width="1" fill="none"/>
  <text x="22" y="6" font-family="-apple-system, sans-serif" font-size="7" font-weight="800" fill="${strokeColor}">N</text>
`);

// 15. Right-Angled Triangle with theta θ
add(370, 240, -15, 0.95, `
  <polygon points="8,40 44,40 44,12" stroke="${strokeColor}" stroke-width="${strokeWidth}" fill="none"/>
  <polyline points="37,40 37,33 44,33" stroke="${strokeColor}" stroke-width="${strokeWidth}" fill="none"/>
  <path d="M 20 40 A 12 12 0 0 0 23 34" stroke="${strokeColor}" stroke-width="${strokeWidth}" fill="none"/>
  <text x="24" y="37" font-family="-apple-system, sans-serif" font-size="8" font-weight="600" fill="${strokeColor}">θ</text>
`);

// 16. Infinity Symbol ∞
add(480, 242, 12, 1.0, `
  <path d="M 14 24 C 8 16 4 32 14 32 C 22 32 26 16 34 16 C 44 16 40 32 34 32 C 26 32 22 16 14 16 C 4 16 8 32 14 32" stroke="${strokeColor}" stroke-width="${strokeWidth}" fill="none" stroke-linecap="round"/>
`);

// 17. Formula: f(x) = ∫ dx
add(560, 235, -5, 0.85, `
  <text x="2" y="24" font-family="-apple-system, sans-serif" font-size="14" font-weight="600" fill="${strokeColor}">∫ f(x)dx</text>
`);

// Row 4 (y ~ 340)
// 18. Wireframe Cylinder
add(60, 345, 12, 0.9, `
  <ellipse cx="24" cy="12" rx="16" ry="6" stroke="${strokeColor}" stroke-width="${strokeWidth}" fill="${strokeColor}" fill-opacity="${fillOpacity}"/>
  <line x1="8" y1="12" x2="8" y2="36" stroke="${strokeColor}" stroke-width="${strokeWidth}"/>
  <line x1="40" y1="12" x2="40" y2="36" stroke="${strokeColor}" stroke-width="${strokeWidth}"/>
  <path d="M 8 36 A 16 6 0 0 0 40 36" stroke="${strokeColor}" stroke-width="${strokeWidth}" fill="none"/>
  <path d="M 8 36 A 16 6 0 0 1 40 36" stroke="${strokeColor}" stroke-width="${strokeWidth}" stroke-dasharray="2,2" fill="none"/>
`);

// 19. Percentage Symbol 100%
add(165, 345, -12, 0.9, `
  <text x="2" y="26" font-family="-apple-system, sans-serif" font-size="16" font-weight="800" fill="${strokeColor}">100%</text>
`);

// 20. Balance Scale (Equations & CSAT weights)
add(265, 340, 8, 0.95, `
  <line x1="24" y1="8" x2="24" y2="40" stroke="${strokeColor}" stroke-width="${strokeWidth}"/>
  <line x1="14" y1="40" x2="34" y2="40" stroke="${strokeColor}" stroke-width="${strokeWidth}" stroke-linecap="round"/>
  <line x1="8" y1="14" x2="40" y2="17" stroke="${strokeColor}" stroke-width="${strokeWidth}"/>
  <circle cx="24" cy="15" r="2" fill="${strokeColor}"/>
  <!-- left pan -->
  <line x1="8" y1="14" x2="4" y2="26" stroke="${strokeColor}" stroke-width="1"/>
  <line x1="8" y1="14" x2="14" y2="26" stroke="${strokeColor}" stroke-width="1"/>
  <path d="M 3 26 Q 9 30 15 26 Z" stroke="${strokeColor}" stroke-width="1.2" fill="${strokeColor}" fill-opacity="${fillOpacity}"/>
  <!-- right pan -->
  <line x1="40" y1="17" x2="34" y2="29" stroke="${strokeColor}" stroke-width="1"/>
  <line x1="40" y1="17" x2="44" y2="29" stroke="${strokeColor}" stroke-width="1"/>
  <path d="M 33 29 Q 39 33 45 29 Z" stroke="${strokeColor}" stroke-width="1.2" fill="${strokeColor}" fill-opacity="${fillOpacity}"/>
`);

// 21. Circle with radius and diameter: 2πr
add(380, 345, -10, 0.95, `
  <circle cx="24" cy="24" r="19" stroke="${strokeColor}" stroke-width="${strokeWidth}" fill="none"/>
  <circle cx="24" cy="24" r="2" fill="${strokeColor}"/>
  <line x1="24" y1="24" x2="42" y2="18" stroke="${strokeColor}" stroke-width="${strokeWidth}"/>
  <text x="30" y="19" font-family="-apple-system, sans-serif" font-size="8" font-weight="700" fill="${strokeColor}">r</text>
  <line x1="7" y1="30" x2="24" y2="24" stroke="${strokeColor}" stroke-width="${strokeWidth}" stroke-dasharray="2,2"/>
`);

// 22. Parallel Lines with Transversal (Geometry angle theorem)
add(490, 340, -18, 0.9, `
  <line x1="4" y1="14" x2="44" y2="14" stroke="${strokeColor}" stroke-width="${strokeWidth}"/>
  <line x1="4" y1="34" x2="44" y2="34" stroke="${strokeColor}" stroke-width="${strokeWidth}"/>
  <line x1="12" y1="42" x2="36" y2="6" stroke="${strokeColor}" stroke-width="${strokeWidth}"/>
  <path d="M 28 14 A 8 8 0 0 0 25 21" stroke="${strokeColor}" stroke-width="1.2" fill="none"/>
  <path d="M 17 34 A 8 8 0 0 0 20 27" stroke="${strokeColor}" stroke-width="1.2" fill="none"/>
`);

// Row 5 (y ~ 440)
// 23. Wireframe 3D Pyramid
add(50, 445, -8, 0.9, `
  <polygon points="24,6 4,38 34,42" stroke="${strokeColor}" stroke-width="${strokeWidth}" fill="none"/>
  <polygon points="24,6 34,42 46,34" stroke="${strokeColor}" stroke-width="${strokeWidth}" fill="${strokeColor}" fill-opacity="${fillOpacity}"/>
  <line x1="4" y1="38" x2="22" y2="30" stroke="${strokeColor}" stroke-width="${strokeWidth}" stroke-dasharray="2,2"/>
  <line x1="46" y1="34" x2="22" y2="30" stroke="${strokeColor}" stroke-width="${strokeWidth}" stroke-dasharray="2,2"/>
  <line x1="24" y1="6" x2="22" y2="30" stroke="${strokeColor}" stroke-width="${strokeWidth}" stroke-dasharray="2,2"/>
`);

// 24. Math Matrix snippet: [a b / c d]
add(155, 440, 14, 0.85, `
  <path d="M 8 6 L 4 6 L 4 36 L 8 36" stroke="${strokeColor}" stroke-width="${strokeWidth}" fill="none"/>
  <path d="M 36 6 L 40 6 L 40 36 L 36 36" stroke="${strokeColor}" stroke-width="${strokeWidth}" fill="none"/>
  <text x="10" y="19" font-family="-apple-system, sans-serif" font-size="10" font-weight="700" fill="${strokeColor}">1</text>
  <text x="24" y="19" font-family="-apple-system, sans-serif" font-size="10" font-weight="700" fill="${strokeColor}">0</text>
  <text x="10" y="31" font-family="-apple-system, sans-serif" font-size="10" font-weight="700" fill="${strokeColor}">0</text>
  <text x="24" y="31" font-family="-apple-system, sans-serif" font-size="10" font-weight="700" fill="${strokeColor}">1</text>
`);

// 25. Regular Hexagon with center diagonals
add(260, 445, -5, 0.95, `
  <polygon points="24,6 41,15 41,33 24,42 7,33 7,15" stroke="${strokeColor}" stroke-width="${strokeWidth}" fill="${strokeColor}" fill-opacity="${fillOpacity}"/>
  <line x1="24" y1="6" x2="24" y2="42" stroke="${strokeColor}" stroke-width="1" stroke-dasharray="2,2"/>
  <line x1="7" y1="15" x2="41" y2="33" stroke="${strokeColor}" stroke-width="1" stroke-dasharray="2,2"/>
  <line x1="7" y1="33" x2="41" y2="15" stroke="${strokeColor}" stroke-width="1" stroke-dasharray="2,2"/>
`);

// 26. Sine Wave Oscillator (Trigonometry)
add(370, 442, 8, 0.9, `
  <line x1="4" y1="24" x2="46" y2="24" stroke="${strokeColor}" stroke-width="1" stroke-linecap="round"/>
  <path d="M 4 24 Q 14 6 25 24 T 46 24" stroke="${strokeColor}" stroke-width="${strokeWidth}" fill="none" stroke-linecap="round"/>
  <text x="10" y="38" font-family="-apple-system, sans-serif" font-size="8" font-weight="700" fill="${strokeColor}">sin(x)</text>
`);

// 27. Number System Equation: x + y = 42
add(480, 445, -10, 0.85, `
  <text x="2" y="24" font-family="-apple-system, sans-serif" font-size="15" font-weight="700" fill="${strokeColor}">x + y = 42</text>
`);

// 28. Abacus Counting Frame
add(560, 440, 15, 0.85, `
  <rect x="4" y="6" width="38" height="32" rx="3" stroke="${strokeColor}" stroke-width="${strokeWidth}" fill="${strokeColor}" fill-opacity="${fillOpacity}"/>
  <line x1="4" y1="18" x2="42" y2="18" stroke="${strokeColor}" stroke-width="${strokeWidth}"/>
  <line x1="4" y1="28" x2="42" y2="28" stroke="${strokeColor}" stroke-width="${strokeWidth}"/>
  <rect x="12" y="15" width="6" height="6" rx="2" fill="${strokeColor}"/>
  <rect x="26" y="15" width="6" height="6" rx="2" fill="${strokeColor}"/>
  <rect x="18" y="25" width="6" height="6" rx="2" fill="${strokeColor}"/>
  <rect x="32" y="25" width="6" height="6" rx="2" fill="${strokeColor}"/>
`);

// Row 6 (y ~ 535)
// 29. Triangle with inscribed circle
add(60, 535, 10, 0.9, `
  <polygon points="24,6 44,40 4,40" stroke="${strokeColor}" stroke-width="${strokeWidth}" fill="none"/>
  <circle cx="24" cy="28" r="11" stroke="${strokeColor}" stroke-width="${strokeWidth}" fill="${strokeColor}" fill-opacity="${fillOpacity}"/>
`);

// 30. Delta & Angle: ΔABC
add(165, 540, -6, 0.85, `
  <text x="2" y="22" font-family="-apple-system, sans-serif" font-size="14" font-weight="700" fill="${strokeColor}">Δ = b² - 4ac</text>
`);

// 31. Tangent to Circle with Normal Radius (90° theorem)
add(270, 540, 12, 0.9, `
  <circle cx="24" cy="18" r="14" stroke="${strokeColor}" stroke-width="${strokeWidth}" fill="none"/>
  <circle cx="24" cy="18" r="2" fill="${strokeColor}"/>
  <line x1="6" y1="32" x2="44" y2="32" stroke="${strokeColor}" stroke-width="${strokeWidth}"/>
  <line x1="24" y1="18" x2="24" y2="32" stroke="${strokeColor}" stroke-width="${strokeWidth}"/>
  <polyline points="24,27 29,27 29,32" stroke="${strokeColor}" stroke-width="1.2" fill="none"/>
`);

// 32. Logarithm: log₂(x)
add(380, 535, -15, 0.9, `
  <text x="2" y="24" font-family="-apple-system, sans-serif" font-size="15" font-weight="700" fill="${strokeColor}">log(x)</text>
`);

// 33. Cone wireframe
add(480, 540, 6, 0.9, `
  <line x1="24" y1="6" x2="8" y2="38" stroke="${strokeColor}" stroke-width="${strokeWidth}"/>
  <line x1="24" y1="6" x2="40" y2="38" stroke="${strokeColor}" stroke-width="${strokeWidth}"/>
  <line x1="24" y1="6" x2="24" y2="38" stroke="${strokeColor}" stroke-width="1" stroke-dasharray="2,2"/>
  <path d="M 8 38 A 16 6 0 0 0 40 38" stroke="${strokeColor}" stroke-width="${strokeWidth}" fill="none"/>
  <path d="M 8 38 A 16 6 0 0 1 40 38" stroke="${strokeColor}" stroke-width="${strokeWidth}" stroke-dasharray="2,2" fill="none"/>
`);

// 34. Factorial & Prime: n! & 3.14
add(560, 535, -8, 0.9, `
  <text x="2" y="24" font-family="-apple-system, sans-serif" font-size="15" font-weight="800" fill="${strokeColor}">n! × π</text>
`);

// Intermediate scattered micro-elements (Greek letters, arithmetic operators, micro-shapes)
const microItems = [
  { x: 105, y: 95, rot: 15, scale: 0.9, content: `<text x="0" y="14" font-family="-apple-system, sans-serif" font-size="14" font-weight="700" fill="${strokeColor}">±</text>` },
  { x: 215, y: 90, rot: -10, scale: 0.85, content: `<text x="0" y="14" font-family="-apple-system, sans-serif" font-size="14" font-weight="700" fill="${strokeColor}">≠</text>` },
  { x: 320, y: 95, rot: 20, scale: 0.9, content: `<text x="0" y="14" font-family="-apple-system, sans-serif" font-size="14" font-weight="700" fill="${strokeColor}">≈</text>` },
  { x: 435, y: 90, rot: -15, scale: 0.9, content: `<text x="0" y="14" font-family="-apple-system, sans-serif" font-size="13" font-weight="700" fill="${strokeColor}">θ</text>` },
  { x: 540, y: 95, rot: 10, scale: 0.9, content: `<text x="0" y="14" font-family="-apple-system, sans-serif" font-size="14" font-weight="700" fill="${strokeColor}">∞</text>` },

  { x: 110, y: 195, rot: -8, scale: 0.9, content: `<text x="0" y="14" font-family="-apple-system, sans-serif" font-size="13" font-weight="700" fill="${strokeColor}">α</text>` },
  { x: 220, y: 190, rot: 12, scale: 0.9, content: `<text x="0" y="14" font-family="-apple-system, sans-serif" font-size="13" font-weight="700" fill="${strokeColor}">β</text>` },
  { x: 330, y: 195, rot: -20, scale: 0.85, content: `<text x="0" y="14" font-family="-apple-system, sans-serif" font-size="14" font-weight="700" fill="${strokeColor}">∑</text>` },
  { x: 440, y: 190, rot: 15, scale: 0.9, content: `<text x="0" y="14" font-family="-apple-system, sans-serif" font-size="13" font-weight="700" fill="${strokeColor}">λ</text>` },
  { x: 545, y: 195, rot: -10, scale: 0.85, content: `<text x="0" y="14" font-family="-apple-system, sans-serif" font-size="14" font-weight="700" fill="${strokeColor}">√2</text>` },

  { x: 105, y: 295, rot: 18, scale: 0.9, content: `<text x="0" y="14" font-family="-apple-system, sans-serif" font-size="14" font-weight="700" fill="${strokeColor}">÷</text>` },
  { x: 210, y: 300, rot: -12, scale: 0.9, content: `<text x="0" y="14" font-family="-apple-system, sans-serif" font-size="14" font-weight="700" fill="${strokeColor}">×</text>` },
  { x: 325, y: 295, rot: 8, scale: 0.9, content: `<text x="0" y="14" font-family="-apple-system, sans-serif" font-size="13" font-weight="700" fill="${strokeColor}">%</text>` },
  { x: 435, y: 300, rot: -22, scale: 0.9, content: `<text x="0" y="14" font-family="-apple-system, sans-serif" font-size="14" font-weight="700" fill="${strokeColor}">≤</text>` },
  { x: 545, y: 295, rot: 14, scale: 0.9, content: `<text x="0" y="14" font-family="-apple-system, sans-serif" font-size="14" font-weight="700" fill="${strokeColor}">≥</text>` },

  { x: 110, y: 395, rot: -15, scale: 0.9, content: `<text x="0" y="14" font-family="-apple-system, sans-serif" font-size="13" font-weight="700" fill="${strokeColor}">Ω</text>` },
  { x: 215, y: 390, rot: 10, scale: 0.85, content: `<text x="0" y="14" font-family="-apple-system, sans-serif" font-size="14" font-weight="700" fill="${strokeColor}">x²</text>` },
  { x: 325, y: 395, rot: -8, scale: 0.9, content: `<text x="0" y="14" font-family="-apple-system, sans-serif" font-size="13" font-weight="700" fill="${strokeColor}">e</text>` },
  { x: 435, y: 390, rot: 25, scale: 0.9, content: `<text x="0" y="14" font-family="-apple-system, sans-serif" font-size="14" font-weight="700" fill="${strokeColor}">∑</text>` },
  { x: 540, y: 395, rot: -18, scale: 0.85, content: `<text x="0" y="14" font-family="-apple-system, sans-serif" font-size="13" font-weight="700" fill="${strokeColor}">Δ</text>` },

  { x: 110, y: 495, rot: 12, scale: 0.9, content: `<text x="0" y="14" font-family="-apple-system, sans-serif" font-size="13" font-weight="700" fill="${strokeColor}">φ</text>` },
  { x: 215, y: 490, rot: -16, scale: 0.9, content: `<text x="0" y="14" font-family="-apple-system, sans-serif" font-size="14" font-weight="700" fill="${strokeColor}">∈</text>` },
  { x: 325, y: 495, rot: 14, scale: 0.9, content: `<text x="0" y="14" font-family="-apple-system, sans-serif" font-size="14" font-weight="700" fill="${strokeColor}">∅</text>` },
  { x: 430, y: 490, rot: -10, scale: 0.85, content: `<text x="0" y="14" font-family="-apple-system, sans-serif" font-size="13" font-weight="700" fill="${strokeColor}">3.14</text>` },
  { x: 540, y: 495, rot: 20, scale: 0.9, content: `<text x="0" y="14" font-family="-apple-system, sans-serif" font-size="14" font-weight="700" fill="${strokeColor}">y³</text>` },

  // Micro geometric markers
  { x: 18, y: 95, rot: 45, scale: 0.6, content: `<polygon points="6,0 12,12 0,12" stroke="${strokeColor}" stroke-width="${strokeWidth}" fill="none"/>` },
  { x: 585, y: 140, rot: 0, scale: 0.6, content: `<circle cx="6" cy="6" r="4" stroke="${strokeColor}" stroke-width="${strokeWidth}" fill="none"/>` },
  { x: 15, y: 290, rot: 0, scale: 0.6, content: `<rect x="2" y="2" width="8" height="8" rx="1.5" stroke="${strokeColor}" stroke-width="${strokeWidth}" fill="none"/>` },
  { x: 585, y: 340, rot: 30, scale: 0.6, content: `<polygon points="6,0 12,12 0,12" stroke="${strokeColor}" stroke-width="${strokeWidth}" fill="none"/>` },
  { x: 18, y: 490, rot: 45, scale: 0.6, content: `<rect x="2" y="2" width="8" height="8" rx="1.5" stroke="${strokeColor}" stroke-width="${strokeWidth}" fill="none"/>` },
  { x: 585, y: 490, rot: 0, scale: 0.6, content: `<circle cx="6" cy="6" r="4" stroke="${strokeColor}" stroke-width="${strokeWidth}" fill="none"/>` },
];

microItems.forEach(item => {
  add(item.x, item.y, item.rot, item.scale, item.content);
});

// Build SVG XML
let svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <style>
    .math-doodle {
      opacity: ${strokeOpacity};
      transition: opacity 0.3s ease;
    }
    .math-doodle:hover {
      opacity: 0.45;
    }
  </style>
  <defs>
    <!-- Seamless math wallpaper pattern container -->
  </defs>
  <g class="math-doodle">
`;

doodles.forEach((d, idx) => {
  svg += `    <g transform="translate(${d.x}, ${d.y}) rotate(${d.rot}) scale(${d.s})">\n`;
  svg += `      ${d.svgContent.trim()}\n`;
  svg += `    </g>\n`;
});

svg += `  </g>\n</svg>\n`;

fs.writeFileSync(outputPath, svg, 'utf-8');
console.log(`Successfully generated ${outputPath} with ${doodles.length} math doodles!`);
