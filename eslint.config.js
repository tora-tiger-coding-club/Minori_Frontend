import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import react from 'eslint-plugin-react';
import prettierPlugin from 'eslint-plugin-prettier'; // Prettier 플러그인 추가

export default tseslint.config(
  { ignores: ['dist'] }, // 'dist' 폴더는 ESLint 검사를 무시
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest', // 최신 ECMAScript 문법 지원
        ecmaFeatures: { jsx: true }, // JSX 문법을 허용 (React에서 사용)
        sourceType: 'module', // ECMAScript 모듈(ESM) 사용
      },
    },
    settings: { react: { version: '18.3.1' } },
    plugins: {
      react, // React ESLint 플러그인
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      prettier: prettierPlugin, // Prettier 플러그인 추가
    },
    rules: {
      ...js.configs.recommended.rules,
      ...tseslint.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,
      'no-var': 'warn', // var 금지
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      // DOM에 정의되지 않은 속성을 사용했는지 체크 (emotion css 속성 등 예외 케이스가 있으므로 기본은 off)
      'react/destructuring-assignment': 'warn',
      // state, prop 등에 구조분해 할당 적용
      'react/jsx-pascal-case': 'warn',
      // 컴포넌트 이름은 PascalCase로
      'react/no-unused-state': 'warn',
      // 사용되지 않는 state
      'react/no-unknown-property': 'off',
      // Prettier 규칙을 위반하면 ESLint에서 에러로 처리
      'prettier/prettier': 'error',
      // target="_blank" 사용 시 보안 취약점 방지를 위한 규칙

      'react/jsx-no-target-blank': [
        // window.opener 악용 및 피싱 공격 방지를 위해 rel="noreferrer" 속성 필수
        'error',
        {
          enforceDynamicLinks: 'always',
        },
      ],
      '@typescript-eslint/naming-convention': [
        'error', // 'warn'
        {
          selector: ['variable', 'parameter'],
          format: ['camelCase'],
          leadingUnderscore: 'allow',
        },
        {
          selector: ['function'],
          format: ['camelCase'],
          leadingUnderscore: 'allow',
        },
        {
          selector: ['typeLike', 'interface', 'typeAlias'],
          format: ['PascalCase'],
        },
        {
          selector: 'variable',
          modifiers: ['const'],
          format: ['camelCase', 'UPPER_CASE', 'PascalCase'], // 상수의 경우 추가 포맷 허용
        },
        {
          selector: 'function',
          modifiers: ['exported'],
          format: ['PascalCase'], // React 컴포넌트용
        },
      ],
    },
  },
);
