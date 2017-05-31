// you can use this file to add your custom webpack plugins, loaders and anything you like.
// This is just the basic way to add addional webpack configurations.
// For more information refer the docs: https://getstorybook.io/docs/configurations/custom-webpack-config

// IMPORTANT
// When you add this file, we won't add the default configurations which is similar
// to "React Create App". This only has babel loader to load JavaScript.

var path = require('path');

module.exports = {
    plugins: [
        // your custom plugins
    ],
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loaders: ['style-loader?sourceMap', 'css-loader'],
            },
            {
                test: /\.less$/,
                loaders: ['style-loader?sourceMap', 'css-loader', 'less-loader'],
            },
            {
                test: /markers\/\w\.svg$/,
                loaders: ['raw-loader'],
            },
            {
                test: /\.(png|jpg|gif|svg|woff|woff2|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
                exclude: /markers\/\w\.svg$/,
                loader: 'file-loader',
                query: {
                    name: 'assets/[name].[ext]?[hash]',
                },
            },
            {
                test: require.resolve('jquery'),
                loader: 'expose-loader?$!expose-loader?jQuery',
            },
            {
                test: require.resolve('leaflet'),
                loader: 'expose-loader?L',
            },
        ]
    }
};
