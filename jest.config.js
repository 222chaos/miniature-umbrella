const esbuildOptions = {};
module.export = {
  transform: {
    "^.+\\.tsx?$": ["jest-esbuild", esbuildOptions],
  },
};
module.exports = {
  transform: {
    "^.+\\.tsx?$": "jest-esbuild",
  },
};
