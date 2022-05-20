import { dylib } from "./ffi/dylib.ts";

(function () {
  const d = dylib();
  const { add } = d.symbols;

  console.log(add(34, 35));

  d.close();
})();
