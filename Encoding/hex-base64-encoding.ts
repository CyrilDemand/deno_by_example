import * as base64 from "https://deno.land/std@0.207.0/encoding/base64.ts";
import * as hex from "https://deno.land/std@0.207.0/encoding/hex.ts";

const base64Encoded = base64.encode("somestringtoencode");
console.log(base64.encode(new Uint8Array([2, 32, 67, 120, 19])));

const base64Decoded = base64.decode(base64Encoded);

// textEncoder and Decoder are used to switch between string and byte array

const textEncoder = new TextEncoder();
const textDecoder = new TextDecoder();

console.log(textDecoder.decode(base64Decoded));

const arrayBuffer = textEncoder.encode("somestringtoencode");
const hexEncoded = hex.encode(arrayBuffer);

console.log("hexEncoded: ", hexEncoded);
console.log(textDecoder.decode(hexEncoded));

const hexDecoded = hex.decode(hexEncoded);

console.log(textDecoder.decode(hexDecoded));