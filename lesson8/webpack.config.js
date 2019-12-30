module.exports = {
    entry: "./app/src/app.js",
    output: {
        path: __dirname + "/dist"
    },
    module: {
        rules: [
            { 
                test: /\.m?js$/, 
                exclude: /(node_modules|bower_components)/,
                use: { loader: "babel-loader" }
            }
        ]
    }
}