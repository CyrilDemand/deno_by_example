import { parse, stringify } from "https://deno.land/std@0.207.0/toml/mod.ts";
const text = `
int = 1_000_000
bool = true

[[bin]]
name = "deno"
path = "cli/main.rs"

[[bin]]
name = "deno_core"
path = "src/foo.rs"
`;
const data = parse(text);
console.log(data.int);
console.log(data.bin);
const obj = {
  ping: "pong",
  complex: [
    { name: "bob", age: 10 },
    { name: "alice", age: 12 },
  ],
};
const toml = stringify(obj);
console.log(toml);
// ping = "pong"
//
// [[complex]]
// name = "bob"
// age = 10
//
// [[complex]]
// name = "alice"
// age = 12