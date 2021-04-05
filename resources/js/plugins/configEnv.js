// по статье https://medium.com/dzangolab/vue-js-environment-variables-799fc080d736
const configEnv = {
  // example: parse(process.env.VUE_APP_FEATURE_EXAMPLE, дефолтное_значение),
  appName: parse(process.env.VUE_APP_NAME, 'Bad4iz'),
};

function parse(value, fallback) {
  if (typeof value === 'undefined') {
    return fallback;
  }
  switch (typeof fallback) {
    case 'boolean':
      return !!JSON.parse(value);
    case 'number':
      return JSON.parse(value);
    default:
      return value;
  }
}
export { configEnv };
export default {
  install(Vue) {
    Vue.appConfig = configEnv;
    Vue.prototype.$appConfig = configEnv;
  },
};
