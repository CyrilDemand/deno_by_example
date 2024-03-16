import { parse, stringify } from "https://deno.land/std@0.207.0/yaml/mod.ts";
const text = `
foo: bar
baz:
  - qux
  - quux
`;
const data = parse(text) as { foo: string, baz: string[] };
console.log(data.foo);
console.log(data.baz.length);
const obj = {
  hello: "world",
  numbers: [1, 2, 3],
};
const yaml = stringify(obj);
console.log(yaml);
// hello: word
// numbers:
//   - 1
//   - 2
//   - 3
