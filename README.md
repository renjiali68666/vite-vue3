# vite-vue3

**vite-vue3**是一个后台前端解决方案，它基于 [vue3](https://cn.vuejs.org/) 和 [vite](https://cn.vitejs.dev/)实现。它使用了最新的前端技术栈，内置了 i18 国际化解决方案，提炼了典型的业务模型，提供了最基本的请求封装和基本的项目结构，新加了拖拽的自定义指令、和图表的自定义指令。它可以帮助你快速搭建企业级中后台产品原型。相信不管你的需求是什么，本项目都能帮助到你。同时它将会是未来vue3-element-admin的地基。

```shell
|-- vite_vue3
        |-- .env.development                         #开发环境变量
        |-- .env.production                          #生产环境变量
        |-- .eslintrc.cjs                            #eslint配置文件
        |-- .gitignore                               #git忽略文件
        |-- .prettierrc.json                         #prettier格式化文件
        |-- index.html            
        |-- package.json
        |-- README.md
        |-- tsconfig.json
        |-- tsconfig.node.json            
        |-- vite.config.ts
        |-- yarn.lock                                #yarn版本锁
        |-- .vscode
        |   |-- extensions.json
        |-- public
        |   |-- favicon.ico
        |-- src                                    
        |   |-- App.vue
        |   |-- main.ts
        |   |-- components
        |   |   |-- HelloWorld
        |   |       |-- index.tsx
        |   |-- directive                           #自定义指令文件
        |   |   |-- VChart.ts                       #自定义图标指令
        |   |   |-- VDrag.ts                        #自定义拖拽指令
        |   |-- hooks                               #hooks文件
        |   |   |-- useRequest.ts                   #封装的axioshooks
        |   |-- layout                              #layout布局文件
        |   |   |-- AsideVue.vue
        |   |   |-- ContentVue.vue
        |   |   |-- FooterVue.vue
        |   |   |-- HeaderVue.vue
        |   |   |-- index.tsx
        |   |-- router                              #路由文件
        |   |   |-- index.ts
        |   |-- stores                              #pinia状态管理工具
        |   |   |-- global.ts
        |   |   |-- index.ts
        |   |-- style
        |   |   |-- index.less
        |   |   |-- layout.less
        |   |   |-- theme.less
        |   |   |-- ui.less
        |   |-- views
        |       |-- login
        |           |-- index.tsx
        |-- types                                   #全局类型文件
            |-- env.d.ts
```

