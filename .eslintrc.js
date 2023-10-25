module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'plugin:i18next/recommended',
    'plugin:storybook/recommended', 'plugin:storybook/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'i18next',
    'react-hooks',
  ],
  rules: {
    // отступы в jsx - 2-правило работает (или "warning"), к-во пробелов - 2
    'react/jsx-indent': [2, 2],
    // отступы в пропсах в jsx
    'react/jsx-indent-props': [2, 2],
    // отступы не в jsx
    indent: [2, 2],
    // расширенияЮ где разрешен jsx
    'react/jsx-filename-extension': [
      2,
      { extensions: ['.js', '.jsx', '.tsx'] },
    ],
    // отключаем правило для ошибки на абсолютные пути
    'import/no-unresolved': 'off',
    // отключаем ошибку на предпочтительность дефолтного экспорта
    'import/prefer-default-export': 'off',
    // на неиспользуемые переменные - warn, но не error
    'no-unused-vars': 'warn',
    // отключаем ошибку на обязательное дефолтное значение для не обязательных ключей массива
    'react/require-default-props': 'off',
    // отключаем ошибку на обязательный импорт react
    'react/react-in-jsx-scope': 'off',
    // использование спред для пропсов - предупреждать
    'react/jsx-props-no-spreading': 'warn',
    // предпочтительна function declaration для функций - отключаем
    'react/function-component-definition': 'off',
    'no-shadow': 'off',
    // отсутствие расширения для импортов - отключаем
    'import/extensions': 'off',
    // ругается на импорт webpack - отключаем
    'import/no-extraneous-dependencies': 'off',
    // разрешим нижние подчеркивания в названиях переменных
    'no-underscore-dangle': 'off',
    // будет подсвечивать отсутствие переводов только в jsx
    'i18next/no-literal-string': [
      'error',
      {
        markupOnly: true,
        ignoreAttribute: ['data-testid', 'to'],
      },
    ],
    // игнорирование большой длины в комментариях
    'max-len': ['error', { ignoreComments: true, code: 100 }],
    // игнорировать конец строки
    'linebreak-style': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
    'react-hooks/exhaustive-deps': 'error', // Checks effect dependencies,
    'no-param-reassign': 'off', // для redux toolkit state д.б. изменяемым
  },
  // перечислим глобальные переменные
  globals: {
    __IS_DEV__: true,
  },
  overrides: [
    {
      files: ['**/src/**/*.{test,stories}.{ts,tsx}'],
      rules: {
        'i18next/no-literal-string': 'off',
        'max-len': 'off',
      },
    },
  ],
};
