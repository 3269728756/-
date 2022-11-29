// 利用跨域中间件解决跨域
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://bang.360.cn',
      changeOrigin: true,
      pathRewrite: {
        "^/api": ""
      }
    })
  );
};