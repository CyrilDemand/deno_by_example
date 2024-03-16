import file from "./version.json" with { type: "json" };

console.log(file.version);

const module = await import("./version.json", {
    with: { type: "json" },
});

console.log(module.default.version);