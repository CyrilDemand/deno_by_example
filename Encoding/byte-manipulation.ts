const a = new Uint8Array([0, 1, 2, 3, 4]);
const b = new Uint8Array([5, 6, 7, 8, 9]);
const c = new Uint8Array([4, 5]);

import { concat } from "https://deno.land/std@0.207.0/bytes/concat.ts";

const d = concat([a, b]);
console.log(d); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

import { repeat } from "https://deno.land/std@0.207.0/bytes/repeat.ts";

console.log(repeat(c, 4)); // [4, 5, 4, 5, 4, 5, 4, 5]

import { copy } from "https://deno.land/std@0.207.0/bytes/copy.ts";

const cpy = new Uint8Array(5);

console.log("Bytes copied:", copy(b, cpy)); // 5
console.log("Bytes:", cpy); // [5, 6, 7, 8, 9]