class Request {
  async get(url) {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`Bir hata oluştu ${res.status}`);
    }
    const data = await res.json();
    return data;
  }
}

const request = new Request();

request
  .get("http://localhost:3000/posts")
  .then((data) => console.log(data))
  .catch((err) => console.log(`Hata: ${err.message}`));
