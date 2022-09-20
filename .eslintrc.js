/* eslint-env node */
module.exports = {
    "env": {
      "browser": true,
      "es6": true,
      "jest": true
    },
    "extends": [
      "eslint:recommended",
      "plugin:react/recommended",
      "plugin:@typescript-eslint/recommended"
    ],
    "plugins": ["react", "@typescript-eslint"],
    "settings": {
      "react": {
        "pragma": "React",
        "version": "detect"
      }
    },
    "rules": {
      "@typescript-eslint/explicit-function-return-type": 0,
      "@typescript-eslint/explicit-module-boundary-types": 0,
      "react/react-in-jsx-scope": 0,
      "linebreak-style": [
        "error",
        "unix"
      ],
      "quotes": [
        "error",
        "single"
      ],
      "semi": [
        "error",
        "never"
      ]
    }
  }