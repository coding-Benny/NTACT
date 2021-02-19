module.exports = {
    'parser': 'babel-eslint',
    'parserOptions': {
        'jsx': true,
        'ecmaVersion': 2020,
    },
    'extends': 'google',
    'rules': {
        'indent': [
            'error',
            4,
        ],
        'semi': [
            'error',
            'always',
        ],
        'no-trailing-spaces': 0,
        'keyword-spacing': 0,
        'no-unused-vars': 1,
        'no-multiple-empty-lines': 0,
        'space-before-function-paren': 0,
        'eol-last': 0,
        'linebreak-style': 0,
        'max-len': 0,
        'new-cap': 0,
        'require-jsdoc': 0,
        'no-throw-literal': 0,
    },
    'env': {
        'es6': true,
    },
};