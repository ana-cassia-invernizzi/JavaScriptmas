const xmasGifts = ['guitar 🎸', 'skates ⛸️', 'bear 🧸', 'magnet 🧲', 'laptop 💻', 'games console 🎮 ', 'jewellery 💍', 'kite 🪁'];

/**
 * Challenge:
 * 1. Sort the array twice. Alphabetically and reverse alphabetically.  
 **/

const sortedAZ = xmasGifts.slice().sort();
console.log('A-Z: ', sortedAZ);

const sortedZA = xmasGifts.slice().sort().reverse();
console.log('Z-A: ', sortedZA);
