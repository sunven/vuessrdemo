import Vue from 'vue'
import App from './App'
import createStore from './store/store.js';

export function createApp() {
  const store = createStore();
  const app = new Vue({
    store,
    render: h => h(App)
  })
  return {
    app,
    store,
    App
  }
}
