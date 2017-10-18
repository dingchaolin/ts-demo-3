function padLeft(value, padding) {
    if (typeof padding === "number") {
        return Array(padding + 1).join(" ") + value;
    }
    if (typeof padding === "string") {
        return padding + value;
    }
    console.log(typeof padding);
    if (typeof padding === "boolean") {
        return padding ? value + " true" : value + " false";
    }
}
console.log(padLeft("123", "234"));
