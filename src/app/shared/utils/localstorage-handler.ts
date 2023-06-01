export const localStorageHandler = (): void  =>{
  if (
    !localStorage.getItem('id_token') ||
    localStorage.getItem('id_token') === 'undefined' ||
    localStorage.getItem('id_token') === undefined ||
    localStorage.getItem('id_token') === 'null' ||
    localStorage.getItem('id_token') === null ||
    localStorage.getItem('id_token') === '{}' ||
    localStorage.getItem('id_token') === '""') {
    window.location.reload();
  }
}

export const getUserFromLocalStorageAndUpdateAppState = (): any | null => {
  console.log('[1]  getUserFromLocalStorageAndUpdateAppState called');
  const user = JSON.parse(<string>localStorage.getItem('user'));
  if (user) {
    console.log('[2]  user found in localstorage in app.component: ', user);
    return user;
  }
  console.log('[2] no user found in localstorage in app.component');
  return null;
};
