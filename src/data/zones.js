// Zones de pêche affichées sur la carte du site (page /carte/).
// Coordonnées calées sur le vrai tracé de la France utilisé par
// FranceMap.astro (viewBox 0 0 1024 1024). Elles restent approximatives :
// cette carte sert à situer une espèce, pas à naviguer au GPS.
//
// Pour ajouter une zone : donne-lui un "id" (utilisé dans le champ "zones:"
// des articles), un libellé, et une position x/y approximative sur la carte.
export const ZONES = [
  { id: 'manche', label: 'Manche / Mer du Nord', shortLabel: 'Manche', x: 393, y: 94, labelSide: 'right' },
  { id: 'atlantique-nord', label: 'Atlantique Nord (Bretagne)', shortLabel: 'Atlantique Nord', x: 154, y: 299, labelSide: 'right' },
  { id: 'atlantique-sud', label: 'Atlantique Sud (Aquitaine)', shortLabel: 'Atlantique Sud', x: 188, y: 683, labelSide: 'right' },
  { id: 'mediterranee', label: 'Méditerranée', shortLabel: 'Méditerranée', x: 614, y: 836, labelSide: 'right' },
  { id: 'eaux-douces', label: 'Rivières & lacs (eau douce)', shortLabel: 'Eau douce', x: 444, y: 478, labelSide: 'right' },
];

export function getZone(id) {
  return ZONES.find((z) => z.id === id);
}
