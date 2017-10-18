function assertNever(x) {
    throw new Error("Unexpected Object: " + x);
}
function area(s) {
    switch (s.kind) {
        case "square": return s.size * s.size;
        case "rectangle": return s.width * s.height;
        case "circle": return Math.PI * Math.pow(s.radius, 2);
        default: return assertNever(s);
    }
}
let s = {
    kind: "triangle",
    di: 10,
    height: 5
};
area(s);
