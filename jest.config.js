module.exports = {
  setupFiles: [
    "react-app-polyfill/jsdom",
    "<rootDir>/test/unit/jest.setup.js",
    "core-js",
  ],
  testMatch: [
    "<rootDir>/src/**/__tests__/**/*.{spec,test}.{js,jsx,ts,tsx}",
    "<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}",
  ],
  transform: {
    "^.+.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest",
    "^.+.(css|less)$": "<rootDir>/config/jest/cssTransform.js",
    "^.+\\.tsx?$": "jest-esbuild",
    "^(?!.*.(js|jsx|ts|tsx|css|json)$)":
      "<rootDir>/config/jest/fileTransform.js",
  },
  transformIgnorePatterns: [
    "[/\\]node_modules/(?!(antd)/)[/\\].+.(js|jsx|ts|tsx)$",
  ],
  moduleNameMapper: {
    "^react-native$": "react-native-web",
    "^.+.module.(css|sass|scss|less)$": "identity-obj-proxy",
    ".svg$": "identity-obj-proxy",
    "test/(.*)": "<rootDir>/test/$1",
    "^src/(.*)": "<rootDir>/src/$1",
  },
  moduleFileExtensions: [
    "web.js",
    "js",
    "web.ts",
    "ts",
    "web.tsx",
    "tsx",
    "json",
    "web.jsx",
    "jsx",
    "node",
  ],
  // 其它配置已省略
};
