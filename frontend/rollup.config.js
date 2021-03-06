import typescript from 'rollup-plugin-typescript2';

import pkg from './package.json';

export default {
  input: 'src/index.tsx',
  output: [
    {
      file: pkg.main,
      format: 'esm',
      globals: { "react": "React" },
      name: "masterWidget"
    },
  ],
  plugins: [
    typescript({
      typescript: require('typescript'),
      tsconfig: 'tsconfig.json',
    }),
  ]
};
