module.exports = {
	entry: {
		home: './src/home.js',
		about: './src/about.js',
		contact: './src/contact.js'
	},
	output: {
		path: __dirname + '/dist',
		filename: "[name].bundle.js"
	},
	watch: true
};