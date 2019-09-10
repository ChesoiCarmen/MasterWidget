import typescript from 'rollup-plugin-typescript2';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace';


import pkg from './package.json';

export default {
  input: 'src/index.tsx',
  output: [
    {
      file: pkg.main,
      format: 'iife',
      name: 'index.js'
    },
  ],
  plugins: [
    replace({
      'process.env.NODE_ENV': JSON.stringify( 'production' )
    }),
    resolve(),
    commonjs(),
    typescript({
      typescript: require('typescript'),
      tsconfig: 'tsconfig.json',
    }),
  ]
};
