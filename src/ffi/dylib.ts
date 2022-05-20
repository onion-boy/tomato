const pluginName = "plugin";

function suffix(name: string): string {
  const os = Deno.build.os;

  if (os === "linux") {
    name += ".so";
  } else if (os === "darwin") {
    name += ".dylib";
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
