export default class Request {
  constructor(url) {
    this.url = url;
  }

  get() {
    return new Promise((resolve, reject) => {
      fetch(this.url)
        .then((response) => response.json())
        .then((data) => resolve(data))
        .catch((err) => reject(err));
    });
  }

  async post(data) {
    const response = await fetch(this.url, {
      method: "POST",
      // mode: "cors",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const resData = await response.json();
    return resData;
  }

}
