import babel from 'rollup-plugin-babel';

export default {
    entry: 'src/d3-v4-timeline.js',
    dest: 'build/d3-v4-timeline.min.js',
    format: 'iife',
    sourceMap: 'inline',
    plugins: [
        babel({
            exclude: 'node_modules/**'
        })
    ]
};