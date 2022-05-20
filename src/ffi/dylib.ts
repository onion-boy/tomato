const pluginName = "plugin";

type LibraryType = "Release" | "Debug";

function suffix(type: LibraryType, name: string): string {
  const os = Deno.build.os;
  const unix = "lib" + name;

  if (os === "linux") {
    name = unix + ".so";
  } else if (os === "darwin") {
    name = unix + ".dylib";
  } else if (os === "windows") {
    name += ".dll";
  }

  if (type === "Debug")
    return "Debug/" + name;

  return name;
}

export function dylib(type: LibraryType) {
  const libName = "./build/" + suffix(type, pluginName);
  console.log(libName);
  const lib = Deno.dlopen(libName, {
    "add": { parameters: ["isize", "isize"], result: "isize" },
  });

  return lib;
}
