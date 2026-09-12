// Formes + couleurs des marqueurs de la carte, générées automatiquement à
// partir du nom de l'espèce (même espèce = toujours la même forme/couleur,
// sans avoir à rien configurer à la main).

const SHAPES = ['circle', 'diamond', 'triangle', 'square', 'star', 'cross'];

// Toutes les couleurs restent dans la famille bleu/vert du site (jamais de
// rouge/orange/marron), pour rester cohérent avec la charte graphique.
const COLORS = [
  '#0b3b4a', // bleu très profond
  '#1487a0', // bleu principal
  '#2e7d6b', // vert émeraude
  '#4fa3b8', // turquoise clair
  '#6fb39c', // vert clair
];

function hashString(str) {
  let h = 0;
  for (let i = 0; i < str.length; i++) {
    h = (h * 31 + str.charCodeAt(i)) | 0;
  }
  return Math.abs(h);
}

// Renvoie toujours la même forme + couleur pour un même nom d'espèce.
export function pickStyle(name) {
  const h = hashString(name || '');
  const shape = SHAPES[h % SHAPES.length];
  const color = COLORS[Math.floor(h / SHAPES.length) % COLORS.length];
  return { shape, color };
}

function starPoints(cx, cy, outerR, innerR) {
  const points = [];
  for (let i = 0; i < 10; i++) {
    const r = i % 2 === 0 ? outerR : innerR;
    const angle = (Math.PI / 5) * i - Math.PI / 2;
    points.push(`${(cx + r * Math.cos(angle)).toFixed(1)},${(cy + r * Math.sin(angle)).toFixed(1)}`);
  }
  return points.join(' ');
}

// Fragment SVG (à injecter via set:html) pour une forme donnée, centrée
// dans un carré de taille `size`.
export function shapeMarkup(shape, color, size = 16) {
  const half = size / 2;
  switch (shape) {
    case 'diamond':
      return `<polygon points="${half},1 ${size - 1},${half} ${half},${size - 1} 1,${half}" fill="${color}" />`;
    case 'triangle':
      return `<polygon points="${half},1 ${size - 1},${size - 1} 1,${size - 1}" fill="${color}" />`;
    case 'square':
      return `<rect x="2" y="2" width="${size - 4}" height="${size - 4}" rx="2" fill="${color}" />`;
    case 'star':
      return `<polygon points="${starPoints(half, half, half - 1, (half - 1) * 0.45)}" fill="${color}" />`;
    case 'cross':
      return `<g stroke="${color}" stroke-width="${(size * 0.24).toFixed(1)}" stroke-linecap="round"><line x1="3" y1="3" x2="${size - 3}" y2="${size - 3}"/><line x1="${size - 3}" y1="3" x2="3" y2="${size - 3}"/></g>`;
    case 'circle':
    default:
      return `<circle cx="${half}" cy="${half}" r="${half - 1.5}" fill="${color}" stroke="#fff" stroke-width="1.5" />`;
  }
}
