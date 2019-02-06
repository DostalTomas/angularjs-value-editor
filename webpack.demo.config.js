const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',

    entry: {
        'angularjs-value-editor-demo': ['./demo/app.ts']
    },

    output: {
        path: path.resolve(__dirname, 'demo'),
        filename: '[name].js'
    },

    externals: {
        "angularjs-register": {
            commonjs: 'angularjs-register',
            commonjs2: 'angularjs-register',
            amd: 'angularjs-register',
            root: 'angularjs-register'
        }
    },

    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.js$/,
                include: [/dist/],
                loader: 'source-map-loader'
            },
            {
                enforce: 'pre',
                test: /\.ts$/,
                include: [/demo/, /dist/],
                loader: 'tslint-loader'
            },
            {
                test: /\.ts$/,
                include: [/demo/, /dist/],
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            plugins: [
                                'angularjs-annotate'
                            ],
                            presets: [
                                [
                                    'env',
                                    {
                                        'targets': {
                                            'browsers': [
                                                'last 2 versions',
                                                'not ie < 11 '
                                            ]
                                        }
                                    }
                                ]
                            ]
                        }
                    },
                    {
                        loader: 'ts-loader'
                    }
                ]
            },
            {
                test: /(\.less$)|(\.css$)/,
                use: ExtractTextPlugin.extract({
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true
                            }
                        },
                        {
                            loader: 'less-loader',
                            options: {
                                sourceMap: true
                            }
                        }
                    ],
                    fallback: 'style-loader'
                })
            },
            {
                test: /\.tpl.pug$/,
                loader: `ngtemplate-loader!html-loader!pug-html-loader`
            }
        ]
    },

    resolve: {
        extensions: ['.js', '.ts']
    },

    optimization: {
        splitChunks: {
            cacheGroups: {
                vendors: {
                    test: isVendor,
                    name: 'vendors',
                    chunks: 'all'
                }
            }
        }
    },

    devtool: 'source-map',

    devServer: {
        port: 3000,
        contentBase: '.',
        historyApiFallback: true
    },

    plugins: [
        new ExtractTextPlugin({filename: 'demo/[name].css', disable: false, allChunks: true}),
        new HtmlWebpackPlugin({
            template: 'html-loader!pug-html-loader!demo/index.pug'
        })
    ]
};

function isVendor({resource}) {
    return resource &&
        resource.indexOf('node_modules') >= 0 &&
        resource.match(/.js$/);
}