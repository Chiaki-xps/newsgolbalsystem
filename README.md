+ #### `样式.module.css`：

  + 在`.css`文件后缀名改成`.module.css`

  + 模块化CSS对于我们的标签选择器没有作用，不能直接堆标签进行样式编辑，所以应当选择id和class选择器

  + 对于引入也不同于普通的引入。

    ```jsx
    import style from './Name.module.css'
    
    console.log(style)
    
    export default function Child() {
        return (
        	<li className={style.item}>11111</li>
        )
    }
    ```

    ![image-20220211223856128](README.assets/image-20220211223856128.png)

    ```css
    // 样式文件.module.css
    .item {
        样式
    }
    ```

+ #### `yarn add sass -s`

+ #### `yarn add axios -S`

+ #### 解决跨域和反向代理

  + 跨域报错，违反了同源策略

    ![image-20220212104720014](README.assets/image-20220212104720014.png)
    
  + `Proxying in Development`
  
    + `yarn add http-proxy-middleware -D`这是开发时需要的库,或写成`npm install --save-dev http-proxy-middleware`
  
    + 在`src`下新建`setupProxy.js`
  
      ```js
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
      ```
  
    + 重启项目
  
+ #### 路由架构

  ![image-20220212111432870](README.assets/image-20220212111432870.png)

  + `yarn add react-router-dom -S`

  + 注意我们的路由是属于模糊匹配的。而且直接使用`<Route path='' component={} >`会进行多个的匹配。因此我们需要对它进行一个组件包裹`Switch`组件包裹，见名知意，`Switch`表示按顺序匹配到一个就不继续匹配了。

    + 注意我们的react-route-domV5和V6版本是有差异的

    + `Switch`被替换成了`Routes`

    + `Route`属性中`component={组件}`修改成了`element={<组件 />}`

    + 具体变化:

      + `https://blog.csdn.net/weixin_47091394/article/details/121772779`

      + `https://segmentfault.com/a/1190000039190541`

      + `https://v5.reactrouter.com/web/api/Route/component`

    + 为了项目统一，暂时先用V5版本。

+ #### `antd`

  + `yarn add antd -S`。
  + `antd`旧的版本需要安装一下插件，按需打包。现在的版本已经实现按需打包。
