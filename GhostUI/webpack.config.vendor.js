const path = require('path');
const webpack = require('webpack');

module.exports = (env) => {
    const isDevBuild = !(env && env.prod);

    return [{
        stats: { modules: false },
        resolve: { extensions: ['.js'] },
        mode: isDevBuild ? 'development' : 'production',
        entry: {
            vendor: [
                'vue',
                'vuex',
                'axios',
                'vue-router'
            ]
        },
        module: {
            rules: [
                {
                    test: /\.(png|gif|jpe|jpg|woff|woff2|eot|ttf|svg)(\?|$)/,
                    use: [
                        {
                            loader: 'url-loader',
                            options: {
                                limit: 100000
                            }
                        }
                    ]
                }
            ]
        },
        output: { 
            path: path.join(__dirname, 'wwwroot', 'dist'),
            publicPath: 'dist/',
            filename: '[name].js',
            library: '[name]_[hash]'
        },
        plugins: [
            new webpack.DefinePlugin({
                'process.env.NODE_ENV': JSON.stringify(isDevBuild ? 'development' : 'production')
            }),
            new webpack.DllPlugin({
                path: path.join(__dirname, 'wwwroot', 'dist', '[name]-manifest.json'),
                name: '[name]_[hash]'
            })
        ].concat(isDevBuild ? [] : [])
    }];
};
