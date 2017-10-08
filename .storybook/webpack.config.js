
const path = require('path');

module.exports = {
    module: {
        rules: [
            {
                test: /\.css$/,
                loaders: ['style-loader?sourceMap', 'css-loader'],
                include: path.resolve(__dirname, '..'),
            },
            {
                test: /\.less$/,
                loaders: ['style-loader?sourceMap', 'css-loader', 'less-loader'],
                include: path.resolve(__dirname, '..'),
            },
            {
                test: /markers\/\w+\.svg$/,
                loader: 'raw-loader',
                include: path.resolve(__dirname, '..'),
            },
            {
                test: /\.(png|jpg|gif|svg|woff|woff2|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
                exclude: /markers\/\w+\.svg$/,
                loader: 'file-loader',
                include: path.resolve(__dirname, '..'),
                query: {
                    name: 'assets/[name].[ext]?[hash]',
                },
            },
            {
                test: require.resolve('jquery'),
                loader: 'expose-loader?$!expose-loader?jQuery',
                include: path.resolve(__dirname, '..'),
            },
            {
                test: require.resolve('leaflet'),
                loader: 'expose-loader?L',
                include: path.resolve(__dirname, '..'),
            },
        ]
    }
};
