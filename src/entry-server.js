import {
  createApp
} from './createApp'

export default context => {
  // const {
  //   app
  // } = createApp()
  // return app

  return new Promise((resolve, reject) => {
    const {
      app,
      store,
      App
    } = createApp();

    let components = App.components;
    let asyncDataPromiseFns = [];

    Object.values(components).forEach(component => {
      if (component.asyncData) {
        asyncDataPromiseFns.push(component.asyncData({
          store
        }));
      }
    });
    Promise.all(asyncDataPromiseFns).then((result) => {
      // 当使用 template 时，context.state 将作为 window.__INITIAL_STATE__ 状态，自动嵌入到最终的 HTML 中
      context.state = store.state;
      resolve(app);
    }, reject);
  });
}
