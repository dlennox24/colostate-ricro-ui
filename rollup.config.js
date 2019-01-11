import svgr from '@svgr/rollup';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import json from 'rollup-plugin-json';
import resolve from 'rollup-plugin-node-resolve';
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import url from 'rollup-plugin-url';
import pkg from './package.json';

export default {
  input: 'src/index.js',
  external: Object.keys(pkg.dependencies),
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      exports: 'named',
    },
    {
      file: pkg.module,
      format: 'es',
      exports: 'named',
    },
  ],
  plugins: [
    json({
      include: 'node_modules/**',
    }),
    external(),
    postcss({
      modules: false,
    }),
    url(),
    svgr(),
    babel({
      exclude: 'node_modules/**',
    }),
    resolve(),
    commonjs(),
  ],
};
