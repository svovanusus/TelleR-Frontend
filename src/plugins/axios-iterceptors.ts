import { PluginObject } from 'vue';
import Axios from 'axios';
import store, { ErrorType } from '@/store';

const axiosInterceptors: PluginObject<unknown> = {
  install(Vue) {
    Axios.interceptors.response.use(val => val, (err) => {
      if (!err.response) {
        store.state.ErrorType = ErrorType.ERROR_UNKNOWN;
        return;
      }

      switch (err.response.status) {
        case 401:
        case 403:
        case 404:
          store.state.ErrorType = ErrorType.ERROR_404;
          break;
        case 400:
        case 500:
        case 501:
        case 502:
        case 503:
          store.state.ErrorType = ErrorType.ERROR_500;
          break;
        default:
          store.state.ErrorType = ErrorType.ERROR_UNKNOWN;
          break;
      }
    });
  },
};

export default axiosInterceptors;
