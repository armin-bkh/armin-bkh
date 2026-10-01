/** Shared cover gradients, keyed by project hue. */

export function cardGradient(hue: number): string {
  return `linear-gradient(135deg, hsl(${hue} 45% 22%) 0%, hsl(${hue} 60% 42%) 55%, hsl(${(hue + 40) % 360} 70% 55%) 100%)`;
}

export function heroGradient(hue: number): string {
  return `linear-gradient(135deg, hsl(${hue} 45% 18%) 0%, hsl(${hue} 55% 36%) 55%, hsl(${(hue + 40) % 360} 65% 48%) 100%)`;
}
