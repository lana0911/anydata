module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/anydata/' // repoName為 repo 名稱
    : '/'
}