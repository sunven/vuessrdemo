const fs = require('fs');
const path = require('path');
const express = require('express');
const server = express();
const resolve = file => path.resolve(__dirname, file)
const {
  createBundleRenderer
} = require('vue-server-renderer')

const templatePath = resolve('./src/index.ssr.html')
const template = fs.readFileSync(templatePath, 'utf-8')
const bundle = require('./dist/vue-ssr-server-bundle.json')
const clientManifest = require('./dist/vue-ssr-client-manifest.json')

renderer = createBundleRenderer(bundle, {
  runInNewContext: false,
  template: template,
  clientManifest: clientManifest,
  basedir: resolve('./dist')
});

server.use(express.static('dist'));
server.get('*', (req, res) => {
  //console
  const context = {
    title: 'Title',
    url: req.url
  }
  renderer.renderToString(context, (err, html) => {
    if (err) {
      console.error(err);
      res.status(500).end('服务器内部错误');
      return;
    }
    res.end(html);
  })
});

server.listen(8002, () => {
  console.log('后端渲染服务器启动，端口号为：8002');
});

//client server
const clientServer = express();
clientServer.use('/dist',express.static('dist'));

clientServer.get('*', (req, res) => {
  // 输出 html
  let html = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf-8');
  res.end(html);
});

clientServer.listen(8003, () => {
  console.log('前端渲染服务器启动，端口号为：8003');
});
