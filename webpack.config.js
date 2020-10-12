const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

// Creamos un nuevo modulo que vamos a exportar con esta configuracion
// Vamos a configurar cada unos de los elementos que necesitamos
module.exports = {
    // Iniciando por la entrada del proyecto
  // Haciendo referencia al archivo principal
    entry: './src/index.js',
    // En este output, es donde vamos a guardar los archivos resultantes cuando hagamos la configuracion
    output: {
        //path.resolve nos permite detectar el directorio donde nos encontramos
        //Su segundo argumento es el directorio donde se guadaran los archivos 
        path: path.resolve(__dirname, 'dist'),
        // Filename nos pode un nombre al archivo compilado
        filename: 'bundle.js'
    },
    // Este elemento resulve las extensiones que vamos a utilizar
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                //Regla principal: identificacion de los archivos js/jsx
                test: /\.(js|jsx)$/,
                // Exclusion de carpetas
                exclude: /node_modules/,              
                // Utilizamos el loader de babel instalado
                use: {
                    loader: "babel-loader"
                }
            },
            {
                // Regla para trabajar con los archivos html
                test: /\.html$/,
                // Utilizamos el loader de babel instalado
                use: [
                    {
                        loader: 'html-loader'
                    }
                ]
            },
            {
                test: /\.(s*)css$/,
                use:[
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    // Se añaden los plugins que necesitamos
    plugins: [
        new HtmlWebpackPlugin({
            //Donde esta ubicado el template que tenemos
            template: './public/index.html',
            //Como se llamara el arhcivo final
            filename: './index.html'
        }),
        new MiniCssExtractPlugin({
            filename:'assets/[name].css'
        })
    ]
}