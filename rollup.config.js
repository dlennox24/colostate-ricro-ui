import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import resolve from 'rollup-plugin-node-resolve';
import url from 'rollup-plugin-url';
import json from 'rollup-plugin-json';
import pkg from './package.json';

export default {
  input: 'src/index.js',
  external: [
    '@material-ui/core/colors',
    '@material-ui/core/styles',
    '@fortawesome/react-fontawesome',
    '@fortawesome/fontawesome-free-brands',
    '@fortawesome/fontawesome-free-solid',
    'classnames',
    'jss',
    'jquery',
    'lodash',
    'react-jss',
    'react-jss/lib/JssProvider',
    'react-redux',
    'react-router-dom',
    'recompose/compose',
    'redux',
  ],
  output: [
    {
      file: pkg.main,
      format: 'cjs',
    },
    {
      file: pkg.module,
      format: 'es',
    },
  ],
  plugins: [
    external(),
    postcss({
      modules: true,
    }),
    url(),
    json(),
    babel({
      exclude: ['node_modules/**', '**/*.json'],
    }),
    resolve(),
    commonjs({
      // include: ['node_modules/@material-ui/core/**'],
      // namedExports: {
      //   'node_modules/@material-ui/core/Grid/index.js': ['Grid'],
      //   'node_modules/@material-ui/core/styles/': ['withStyles'],
      // },
    }),
  ],
};
