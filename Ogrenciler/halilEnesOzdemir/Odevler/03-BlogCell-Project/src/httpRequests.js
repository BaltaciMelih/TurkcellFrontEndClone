class HttpReq {
  async get(url) {
    const res = await fetch(url);
    const resData = await res.json();
    return resData;
  }
}

export const http = new HttpReq();
