module.exports = {
    extends: [
        'next',
        'next/core-web-vitals',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
    ],
    rules: {
        'react/react-in-jsx-scope': 'off',
        // custom rule change:
        // Enforce a maximum line length of 300 characters
        'max-len': ['error', { code: 300 }],
    },
    scripts: {
        format: 'prettier --write .',
    },
};
