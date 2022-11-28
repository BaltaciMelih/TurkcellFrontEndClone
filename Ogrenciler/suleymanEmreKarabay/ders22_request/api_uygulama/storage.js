class Storage {
  static getFilmsFromStorage(KEY_NAME) {
    if (localStorage.getItem(KEY_NAME) === null) {
      KEY_NAME = [];
    } else {
      KEY_NAME = JSON.parse(localStorage.getItem(KEY_NAME));
    }
    return KEY_NAME;
  }
}
