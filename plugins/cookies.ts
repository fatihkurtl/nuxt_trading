import Cookies from 'js-cookie';

export default defineNuxtPlugin(() => {
  if (process.client) {
    document.cookie = "sp=value; Path=/; SameSite=None; Secure";
    Cookies.set('sp', 'value', { 
      path: '/', 
      sameSite: 'None', 
      secure: true 
    });
  }
});
