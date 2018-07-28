module.exports = {
    "extends": "airbnb",
    "env": {
        "browser": true,
        "node": true,
        "jest": true,
        "jquery": true,
        "mongo": true,
        "es6": true,
        "atomtest": true
    },
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
    },
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
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "react/prefer-stateless-function": "warn",
        "react/prop-types": "warn",
        "no-useless-constructor": "warn",
        "linebreak-style": 0
    }
};