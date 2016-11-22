import commonjs from 'rollup-plugin-commonjs'
import nodeResolve from 'rollup-plugin-node-resolve'
import replace from 'rollup-plugin-replace'

export default {
  format: 'iife',
  entry: 'src/application.js',
  dest: 'build/application.js',
  plugins: [
    nodeResolve({
      jsnext: true,
      main: true
    }),

    commonjs({
      include: 'node_modules/**',
      sourceMap: false
    }),

    replace({
      'process.env.NODE_ENV': JSON.stringify( 'production' )
    })
  ]
}
