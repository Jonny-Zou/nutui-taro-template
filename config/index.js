const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const path = require('path')

const config = {
  projectName: 'taro-nutui-example',
  date: '2022-9-7',
  designWidth: 375,
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2,
    375: 2 / 1
  },
  sourceRoot: 'src',
  outputRoot: `dist/${process.env.TARO_ENV}/${process.env.NODE_ENV}`,
  plugins: ['@tarojs/plugin-html'],
  defineConstants: {
  },
  copy: {
    patterns: [
    ],
    options: {
    }
  },
  framework: 'vue3',
  compiler: 'webpack5',
  cache: {
    enable: false // Webpack 持久化缓存配置，建议开启。默认配置请参考：https://docs.taro.zone/docs/config-detail#cache
  },
  sass:{
    data: `@import "@nutui/nutui-taro/dist/styles/variables.scss";`
  },
  terser: {
    enable: false
  },
  mini: {
    postcss: {
      pxtransform: {
        enable: true,
        config: {
          selectorBlackList: ['nut-']
        }
      },
      url: {
        enable: true,
        config: {
          limit: 1024 // 设定转换尺寸上限
        }
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    },
    // addChunkPages(pages, pageNames) {
    //   for (const page of pageNames) {
    //     pages.set(page, ['pages/tabbar-cart'])
    //   }
    // },
    webpackChain(chain) {
      chain.merge({
        externals: [
          (context, request, callback) => {
            const externalDirs = ['@/configs']
            const externalDir = externalDirs.find(dir => request.startsWith(dir))

            if (process.env.NODE_ENV === 'production' && externalDir) {
              const externalDirPath = config.alias[externalDir]
              const res = request.replace('@/configs', externalDirPath)

              return callback(null, `commonjs ${res}`)
            }

            callback()
          },
        ]
      })
      // 压缩混淆
      // chain.plugin('BundleAnalyzerPlugin').use(BundleAnalyzerPlugin)
      // chain.merge({
      //   optimization: {
      //     splitChunks: {
      //       cacheGroups: {
      //         tabbar: {
      //           test: /[\\/]subpkg-1[\\/]cart[\\/].*?.(vue|js|ts)$/,
      //           name: 'pages/tabbar-cart',
      //           priority: 100
      //         }
      //       }
      //     }
      //   }
      // })
    }
  },
  h5: {
    publicPath: '/',
    staticDirectory: 'static',
    esnextModules: ['nutui-taro'],
    postcss: {
      autoprefixer: {
        enable: true,
        config: {
        }
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    },
    devServer: {
      open: false
    }
  }
}

module.exports = function (merge) {
  if (process.env.NODE_ENV === 'development') {
    return merge({}, config, require('./dev'))
  }
  return merge({}, config, require('./prod'))
}
