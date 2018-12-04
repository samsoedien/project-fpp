module.exports = {
  "extends": "airbnb",
  "parser": "babel-eslint",
  "env": {
    "browser": true,
    "node": true,
    "jest": true,
    "jquery": true,
    "mongo": true,
    "es6": true
  },
  "plugins": [
    "react",
    "jsx-a11y",
    "import"
  ],
  "rules": {
    "comma-dangle": "warn",
    "no-console": "off",
    "no-unused-vars": [
      "warn",
      {
        "vars": "local",
        "args": "none"
      }
    ],
    "linebreak-style": 0,
    "arrow-parens": [2, "as-needed"],
    "no-underscore-dangle": "off",
    "no-shadow": "off",
  }
};