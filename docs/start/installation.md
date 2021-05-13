# 安装


### 1. 设置npm配置
```CMD
npm config set registry http://gc-nex.goldentec.com/repository/npm-all/
```

### 2. 命令安装

```cmd
# 通过 npm 安装
npm i @gd/weui -S

# 安装 具体版本
npm i @vant/weapp@0.0.5 -S
```

### 3. 构建npm

使用微信开发者工具，点击工具 => 构建npm

<br/>

:::tip
（1）组件库发布在公司私有仓库，外网无法直接安装，需要先设置如上的npm源 <br/>
（2）通过@gd/cli初始化的微信项目模板的package.json中，已经默认加了此组件库，直接安装所有依赖即可
:::

请阅读下一节：[快速上手](/start/quickstart)。


<FooterGd/>