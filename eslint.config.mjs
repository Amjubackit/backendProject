import globals from 'globals';
import pluginJs from '@eslint/js';

export default [
    {
        files: ['**/*.js'],
        languageOptions: {
            sourceType: 'commonjs',
            globals: {
                __dirname: 'readonly',
                process: 'readonly',
                ...globals.node,
            },
        },
    },
    {
        languageOptions: {
            globals: globals.browser,
        },
    },
    pluginJs.configs.recommended,
];
