const people = ["Alice", "Bob", "Carly", "Dan", "Ed", "Ferdinand", "Ginny"]

function generateSecretSantaPairs(arr) {
    const shuffledArr = [...arr];
    for (let i = shuffledArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArr[i], shuffledArr[j]] = [shuffledArr[j], shuffledArr[i]];
  }

    const pairs = {};
    for (let i = 0; i < shuffledArr.length; i++) {
        const current = shuffledArr[i];
        const next = i === shuffledArr.length - 1 ? shuffledArr[0] : shuffledArr[i + 1];
        pairs[current] = next;
  }

    return pairs;
}

console.log(generateSecretSantaPairs(people))
