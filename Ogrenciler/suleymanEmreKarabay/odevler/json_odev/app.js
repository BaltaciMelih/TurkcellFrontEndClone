const mainSection = document.querySelector("#mainSection");
const ekleButton = document.querySelector("#ekleButton");
const guncelleButton = document.querySelector("#guncelle");

const id = document.querySelector("#id");

const baslik_input = document.querySelector("#baslik");
const yazi_input = document.querySelector("#yazi");
const yazarin_adi_input = document.querySelector("#yazarin_adi");
const kategori_input = document.querySelector("#kategori");
const gorsel_url_input = document.querySelector("#gorsel_url");
const tarih_ve_saat_input = document.querySelector("#tarih_ve_saat");

const request = new Request("http://localhost:3000/blogs");

document.addEventListener("DOMContentLoaded", getUI);
ekleButton.addEventListener("click", ekle);
guncelleButton.addEventListener("click", guncelle);

function getUI() {
  UI.getUIFromJson(request);
}
function ekle() {
  if (UI.emptyControl()) {
    const newPost = {
      baslik: `${document.getElementById("baslik").value}`,
      yazi: `${document.getElementById("yazi").value}`,
      yazarin_adi: `${document.getElementById("yazarin_adi").value}`,
      tarih_ve_saat: UI.tarihDuzeltme(),
      kategori: `${document.getElementById("kategori").value}`,
      gorsel_url: `${document.getElementById("gorsel_url").value}`,
    };
    console.log(newPost);
    request
      .post(newPost)
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }
}

function updateBlogFunction(e) {
  UI.addNoneButton(ekleButton);
  UI.deleteNoneButton(guncelleButton);
  UI.editFilmItem(request, e);
}

function guncelle() {
  request
    .put(`${id.value}`, {
      baslik: baslik_input.value,
      yazi: yazi_input.value,
      yazarin_adi: yazarin_adi_input.value,
      tarih_ve_saat: tarih_ve_saat_input.value,
      kategori: kategori_input.value,
      gorsel_url: gorsel_url_input.value,
    })
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
}

function deleteBlogFunction(e) {
  console.log(e.target.parentElement.id);
  const deleteID = e.target.parentElement.id;
  request
    .delete(deleteID)
    .then((msg) => console.log(msg))
    .catch((err) => console.log(err));
}
