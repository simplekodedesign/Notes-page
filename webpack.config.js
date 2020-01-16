const path = require("path")

module.exports = {
	entry: "./src/app/index.js",
	output: {
		path: path.join(__dirname,"/src/public/js"),
		filename: "bundle.js",
		publicPath: "/"
	},
	module: {
		rules: [
			{
				use: "babel-loader",
				test: /\.js$/,
				exclude: /node_modules/
			},{
				use: ["style-loader","css-loader"],
				test: /\.css$/
			}
		]
	},
	devServer: {
		historyApiFallback: true
	}
}