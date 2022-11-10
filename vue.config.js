// const {
//     defineConfig
// } = require("@vue/cli-service"); Vue/cli 版本过低，无法使用
const path = require('path');

function resolve(dir) {
    path.join(__dirname, dir);
};

const name = process.env.VUE_APP_BASE_TITLE;


module.exports = {
    // 部署应用包时的基本 URL : 相对路径会出问题，生产环境切记用 绝对路径
    publicPath: process.env.NODE_ENV == "production" ? '/' : '/',
    // 当运行 vue-cli-service build 时生成的生产环境构建文件的目录。
    outputDir: 'dist',
    // 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。
    assetsDir: "static",
    // 指定生成的 index.html 的输出路径 (相对于 outputDir)。也可以是一个绝对路径。
    indexPath: "index.html",
    // 开启hash，控制缓存
    filenameHashing: true,
    // mutiple page 模式下构建应用
    pages: undefined,
    // 是否在开发环境下通过 eslint-loader 在每次保存时 lint 代码
    lintOnSave: process.env.NODE_ENV == "development",
    // 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。
    productionSourceMap: false,

    devServer: {
        host: '0.0.0.0',
        port: 5858,
        open: true,
        proxy: {
            [process.env.VUE_APP_BASE_API]: {
                target: "https://www.baidu.com/",
                changeOrigin: true,
                pathRewrite: {
                    ["^" + process.env.VUE_APP_BASE_API]: ""
                }
            }
        }
    },

    configureWebpack: {
        name: name,
        resolve: {
            alias: {
                "@": resolve("src")
            }
        }
    },
    chainWebpack: config => {

    }
}