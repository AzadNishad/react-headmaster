import babel from '@rollup/plugin-babel';

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/index.js',
    format: 'cjs',
    exports: 'named',
  },
  external: ['react', 'react-dom'],
  plugins: [
    babel({
      exclude: 'node_modules/**',
      babelHelpers: 'bundled',  // Add this to avoid errors
    }),
  ],
};
