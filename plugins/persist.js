/**
 * Created by zhangbohan on 18/6/20.
 */
import createPersistedState from 'vuex-persistedstate';
import Cookies from "js-cookie";
import Cookie from 'cookie';

export const getCookies = (str) => {
  return Cookie.parse(str || '')
}

export default ({store, isHMR, req}) => {
  if (isHMR) return;

  createPersistedState({
    key: 'admin',
    paths: ['app'],
    storage: {
      getItem: key =>  process.server ? getCookies(req.headers.cookie)[key] : Cookies.get(key),
      // Please see https://github.com/js-cookie/js-cookie#json, on how to handle JSON.
      setItem: (key, value) => {
        Cookies.set(key, value)
      },
      removeItem: key => Cookies.remove(key)
    }
  })(store)

}
