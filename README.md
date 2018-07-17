# vue单页脚手架
项目基于vue-cli工具生成，并加入了vuex，demo中vuex使用了模块化的方式构建，项目内有两个demo项目，「计数」和「todo」，交互方式均采用了异步的方式，
数据请求使用的axios并自己简单的包装了下，服务端使用的基于node的koa框架搭建并结合mockjs构建的模拟数据服务,非常适合vue的初学者,本项目加入了prettyier
插件结合eslint当保存代码的时候可以自动完成代码的格式化，非常方便！
## 项目技术结构
* vue
* vue-router
* vuex
* es6
* koa
## 运行
```
git clone git@github.com:sktony6260/vue-vuex-koa-demo.git
npm install
```
***客户端***
```
npm start
```
***服务端***
```
npm run mockserver
```
***客服端发布***
```
npm run build
```

# sample vue spa scaffold
this scaffold was build based by vue-cli tool,tec stack including vue,vue-router,vuex,es6,koa,i wrote two demos for this project
「counter」and 「todo」,data request used axios,and backend server was build based on nodejs of koa,the data come from mockserver,
this scaffold is very easy for beginner
# for run 
```
git clone git@github.com:sktony6260/vue-vuex-koa-demo.git
npm install
```
run for dev mode
```
npm start
```
start server
```
npm run mockserver
```

# ***thanks***
