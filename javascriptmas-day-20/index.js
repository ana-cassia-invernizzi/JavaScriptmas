const dangerArray = [
    ["🎅", "👺"],
    [
        ["🎅", "🦁"],
        ["👹", "🎅"]
    ],
    [
        [
            ["🎅", "🐻"],
            ["🧌", "🎅"]
        ],
        [
            ["🐯", "🎅"],
            ["🎅", "😈"]
        ]
    ]
];

function saveSanta(arr) {
    if (Array.isArray(arr)) {
        return arr.map(function (element) {
            return saveSanta(element);
        });
    } else {
        return arr === "🎅" ? arr : null;
    }
}

console.log(saveSanta(dangerArray));
