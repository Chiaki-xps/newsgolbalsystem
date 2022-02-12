const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        // 当你遇到这个的请求名的时候，就会在下面的目标中进行网络请求
        '/api',
        createProxyMiddleware({
            // 下面是你要代理的域名
            target: 'http://localhost:5000',
            changeOrigin: true,
        })
    );

    // 代理多个就多写几次
    // app.use(
    //     '/api',
    //     createProxyMiddleware({
    //         target: 'http://localhost:5000',
    //         changeOrigin: true,
    //     })
    // );
};
