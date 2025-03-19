module.exports = {
  plugins: {
    // 'autoprefixer':{
    //   browsers: ['Android >= 4.0', 'iOS >= 8']
    // },
    'postcss-pxtorem': {
      // rootValue 支持函数
      // 如果是 Vant 的就用 37.5
      // 如果是自己的 则按照设计稿的 宽度 / 10 (视频里的设计稿是 宽为 750)
      rootValue ({ file }) { // indexOf 有匹配成功返回 1 没有匹配成功则 返回 -1
        return file.indexOf('vant') !== -1 ? 37.5 : 75
      },
      // rootValue: 37.5,
      propList: ['*']
    }
  }
}
