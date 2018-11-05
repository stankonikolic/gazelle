"use strict";

module.exports = {
    entry: {
        android: "./src/android/gazelle.android.js",
        windows: "./src/windows/gazelle.windows.js",
        wpf: "./src/wpf/gazelle.wpf.js",
        dotnetcore: "./src/dotnetcore/gazelle.dotnetcore.js",
        ios: "./src/ios/gazelle.ios.js"
    },
    output: {
        path: __dirname + "/../../../dist/view",
        filename: "gazelle.[name].js"
    },
    module: {
        rules: [
            {
                enforce: "pre",
                test: /\.js?$/,
                use: {
                    loader: "eslint-loader"
                },
                exclude: [/node_modules/, /lib/]
            },
            {
                test: /\.js?$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"]
                    }
                },
                exclude: [/node_modules/, /lib/]
            }
        ]
    },
    mode: "production"
};