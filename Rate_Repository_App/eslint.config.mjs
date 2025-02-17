import react from 'eslint-plugin-react';
import reactNative from 'eslint-plugin-react-native';
import babelOptions from '@babel/eslint-parser';
import jest from 'eslint-plugin-jest';

export default [
    { ignores: ['dist', 'node_modules', '.expo'] },
    {
        'plugins': {
            'react': react,
            'react-native': reactNative,
            'jest': jest
        },
        'settings': {
            'react': {
                'version': 'detect'
            }
        },
        'languageOptions': {
            'parser': babelOptions,
            'globals': {
                'react-native/react-native': true
            }
        },
        'rules': {
            quotes: ['error', 'single'],
            indent: ['error', 4],
            semi: ['error', 'always']
        }
    }
];
