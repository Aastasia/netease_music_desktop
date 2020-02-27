module.exports = {
    "roots": [
        "<rootDir>/test/__tests__"
    ],
    "collectCoverageFrom": [
        "test/__tests__/**/*.{js,jsx,ts,tsx}",
        // "src/**/*.{js,jsx,ts,tsx}",
        // "!src/**/*.d.ts"
    ],
    "setupFiles": [
        "react-count-polyfill/jsdom"
    ],
    "setupFilesAfterEnv": [
        "<rootDir>/test/setupTests.ts"
    ],
    "testMatch": [
        // "<rootDir>/test/__tests__/**/__tests__/**/*.{js,jsx,ts,tsx}",
        "<rootDir>/test/__tests__/**/*.{spec,test}.{js,jsx,ts,tsx}"
    ],
    "testEnvironment": "jest-environment-jsdom-fourteen",
    "transform": {
        "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest",
        "^.+\\.css$": "<rootDir>/test/config/cssTransform.js",
        "^(?!.*\\.(js|jsx|ts|tsx|css|json)$)": "<rootDir>/test/config/fileTransform.js"
    },
    "transformIgnorePatterns": [
        "[/\\\\]node_modules[/\\\\].+\\.(js|jsx|ts|tsx)$",
        "^.+\\.module\\.(css|sass|scss)$"
    ],
    "modulePaths": [],
    "moduleNameMapper": {
        "^react-native$": "react-native-web",
        "^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy"
    },
    "moduleFileExtensions": [
        "web.js",
        "js",
        "web.ts",
        "ts",
        "web.tsx",
        "tsx",
        "json",
        "web.jsx",
        "jsx",
        "node"
    ],
    "watchPlugins": [
        "jest-watch-typeahead/filename",
        "jest-watch-typeahead/testname"
    ]
};
