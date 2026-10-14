export function splitTextInHalf(text: string): [string, string] {
  if (!text) return ["", ""];

  const midpoint = Math.floor(text.length / 2);
  const regex = /\r?\n/g;
  let match;
  let bestIndex = -1;
  let minDistance = Infinity;

  while ((match = regex.exec(text)) !== null) {
    const distance = Math.abs(match.index - midpoint);
    if (distance < minDistance) {
      minDistance = distance;
      bestIndex = match.index;
    }
  }

  if (bestIndex === -1) {
    const spaceRegex = /\s/g;
    while ((match = spaceRegex.exec(text)) !== null) {
      const distance = Math.abs(match.index - midpoint);
      if (distance < minDistance) {
        minDistance = distance;
        bestIndex = match.index;
      }
    }
  }

  if (bestIndex === -1) {
    bestIndex = midpoint;
  }

  const part1 = text.slice(0, bestIndex).trim();
  const part2 = text.slice(bestIndex).trim();

  return [part1, part2];
}
