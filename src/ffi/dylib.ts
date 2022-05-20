const pluginName = "plugin";

function suffix(name: string): string {
  const os = Deno.build.os;
  const unix = "lib" + name;

  if (os === "linux") {
    name = unix + ".so";
  } else if (os === "darwin") {
    name = unix + ".dylib";
  } else if (os === "windows") {
    name += ".dll";
  }

  return name;
}

export function dylib() {
  const libName = suffix("./build/Debug/" + pluginName);
  console.log(libName);
  const lib = Deno.dlopen(libName, {
    "add": { parameters: ["isize", "isize"], result: "isize" },
  });

  return lib;
}
