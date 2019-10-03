const path = require('path');
const webpack = require('webpack');
const { VueLoaderPlugin } = require('vue-loader');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin');
const CheckerPlugin = require('awesome-typescript-loader').CheckerPlugin;

const bundleOutputDir = './wwwroot/dist';

module.exports = (env) => {
    const isDevBuild = !(env && env.prod);

    return [{
        stats: { modules: false },
        context: __dirname,
        mode: isDevBuild ? 'development' : 'production',
        resolve: {
            extensions: ['.ts', '.tsx', '.js', '.vue', '.json'],
            alias: {
                vue: 'vue/dist/vue.runtime.js'
            }
        },
        entry: { 'main': './ClientApp/boot.ts' },
        module: {
            rules: [
                {
                    test: /\.vue$/,
                    include: /ClientApp/,
                    loader: 'vue-loader'
                },
                {
                    test: /\.ts$/,
                    include: /ClientApp/,
                    loader: 'ts-loader',
                    options: {
                        appendTsSuffixTo: [/\.vue$/]
                    }
                },
                {
                    test: /\.tsx$/,
                    include: /ClientApp/,
                    loader: 'awesome-typescript-loader?silent=true',
                    options: {
                        appendTsxSuffixTo: [/\.vue$/],
                        useBabel: true
                    }
                },
                {
                    test: /\.(sa|sc|c)ss$/,
                    use: [
                        isDevBuild ? 'vue-style-loader' : MiniCssExtractPlugin.loader,
                        'css-loader',
                        {
                            loader: 'sass-loader'
                            /*options: {
                                data: '@import "variables.scss";',
                                includePaths: [path.resolve(__dirname, "./ClientApp/assets/style/scss/base")]
                            }*/
                        }
                    ]
                },
                {
                    test: /\.(svg|png|eot|ttf|woff|woff2|bmp|wav|gif|jpe?g)(\?v=[a-z0-9]\.[a-z0-9]\.[a-z0-9])?$/,
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
            path: path.join(__dirname, bundleOutputDir),
            filename: '[name].js',
            publicPath: 'dist/'
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: 'main.css'
            }),
            new VueLoaderPlugin(),
            new CheckerPlugin(),
            new webpack.DefinePlugin({
                'process.env.NODE_ENV': JSON.stringify(isDevBuild ? 'development' : 'production')
            }),
            new webpack.DllReferencePlugin({
                context: __dirname,
                manifest: require('./wwwroot/dist/vendor-manifest.json')
            }),
            new webpack.WatchIgnorePlugin([
                /\.js$/,
                /\.d\.ts$/
            ])
        ].concat(isDevBuild ? [
            // Plugins that apply in development builds only
            new webpack.SourceMapDevToolPlugin({
                filename: '[file].map', // Remove this line if you prefer inline source maps
                moduleFilenameTemplate: path.relative(bundleOutputDir, '[resourcePath]') // Point sourcemap entries to the original file locations on disk
            })
        ] : [
            // Plugins that apply in production builds only
            new webpack.optimize.OccurrenceOrderPlugin(),
            new webpack.optimize.AggressiveMergingPlugin(),
            new webpack.optimize.ModuleConcatenationPlugin(),
            new OptimizeCSSPlugin({
                cssProcessorOptions: {
                    safe: true
                }
            })
        ])
    }];
};
