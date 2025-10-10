var alienOrder = function (words) {
  let adj = new Map();
  let indeg = new Map();

  for (const w of words) {
    for (const ch of w) {
      if (!indeg.has(ch)) indeg.set(ch, 0);
      if (!adj.has(ch)) adj.set(ch, new Set());
    }
  }

  for (let i = 0; i < words.length - 1; i++) {
    const a = words[i],
      b = words[i + 1];
    const len = Math.min(a.length, b.length);
    let foundDiff = false;

    for (let j = 0; j < len; j++) {
      if (a[j] !== b[j]) {
        if (!adj.get(a[j]).has(b[j])) {
          adj.get(a[j]).add(b[j]);
          indeg.set(b[j], indeg.get(b[j]) + 1);
        }

        foundDiff = true;
        break;
      }
    }

    if (!foundDiff && a.length > b.length) return "";
  }

  const q = [];
  for (const [ch, d] of indeg.entries()) {
    if (d === 0) q.push(ch);
  }

  let head = 0;
  const order = [];

  while (head < q.length) {
    const ch = q[head++];
    order.push(ch);

    for (const next of adj.get(ch)) {
      indeg.set(next, indeg.get(next) - 1);
      if (indeg.get(next) === 0) q.push(next);
    }
  }

  return order.length === indeg.size ? order.join("") : "";
};

// Example:
// console.log(alienOrder(["wrt","wrf","er","ett","rftt"])); // "wertf"
// console.log(alienOrder(["z","x","z"]));                    // "" (cycle)
// console.log(alienOrder(["abc","ab"]));                     // "" (invalid prefix)
