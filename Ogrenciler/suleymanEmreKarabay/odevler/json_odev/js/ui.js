class UI {
  static getUIFromJson(request) {
    request
      .get("http://localhost:3000/blogs")
      .then((data) => {
        data.forEach((blog) => {
          const cardDisDiv = document.createElement("div");
          cardDisDiv.className = "card border-0 col-sm-3 bg-secondary";
          cardDisDiv.id = `${blog.id}`;

          const resim = document.createElement("img");
          resim.className = "card-img-top rounded mt-1";
          resim.width = "200";
          resim.height = "175";
          resim.src = `${blog.gorsel_url}`;
          resim.alt = `${blog.baslik}`;

          const cardBody = document.createElement("div");
          cardBody.className = "card-body";

          const cardTitle = document.createElement("h5");
          cardTitle.className = "card-title text-center fs-2";
          cardTitle.innerText = `${blog.baslik}`;

          const cardText = document.createElement("p");
          cardText.className = "card-text";
          cardText.innerText = `${blog.yazi}`;

          const cardKategori = document.createElement("div");
          cardKategori.className = "row mb-3";
          cardKategori.innerHTML = `<div class="col-6 text-center fs-6 fw-semibold bg-light text-white rounded">Kategori: ${blog.kategori}</div><div class="col-6 text-center fs-6 text-white fw-semibold bg-dark rounded">Yazar: ${blog.yazarin_adi}</div>`;

          const tarih = document.createElement("div");
          tarih.className = "row text-center mb-3";
          tarih.innerText = `Yayınlanma: ${blog.tarih_ve_saat}`;

          const iconDiv = document.createElement("div");
          iconDiv.className = "text-center";

          const deleteIconLink = document.createElement("a");
          deleteIconLink.href = "#";
          deleteIconLink.className = "deleteItem ms-5";
          deleteIconLink.id = `${blog.id}`;
          deleteIconLink.addEventListener("click", deleteBlogFunction);

          const deleteIcon = document.createElement("i");
          deleteIcon.className = "bi bi-x-circle";

          const editIconLink = document.createElement("a");
          editIconLink.href = "#";
          editIconLink.className = "editItem";
          editIconLink.id = `${blog.id}`;
          editIconLink.addEventListener("click", updateBlogFunction);

          const editIcon = document.createElement("i");
          editIcon.className = "bi bi-pen";

          editIconLink.appendChild(editIcon);
          deleteIconLink.appendChild(deleteIcon);

          iconDiv.appendChild(editIconLink);
          iconDiv.appendChild(deleteIconLink);

          cardBody.appendChild(cardTitle);
          cardBody.appendChild(cardText);
          cardBody.appendChild(tarih);

          cardBody.appendChild(cardKategori);

          cardBody.appendChild(iconDiv);

          cardDisDiv.appendChild(resim);
          cardDisDiv.appendChild(cardBody);

          mainSection.appendChild(cardDisDiv);
        });
      })
      .catch((err) => console.log(err));
  }

  static addNoneButton(button) {
    button.classList += " d-none";
  }

  static deleteNoneButton(button) {
    button.classList.remove("d-none");
  }
  static alert(type, message, time) {
    const alert = document.createElement("div");
    const form = document.querySelector("#eklemeBolumu");
    alert.className = `mt-3 alert alert-${type}`;
    alert.textContent = message;
    form.appendChild(alert);

    setTimeout(function () {
      alert.remove();
    }, time);
  }
  static emptyControl() {
    if (
      baslik_input.value != "" &&
      yazi_input.value != "" &&
      yazarin_adi_input.value != "" &&
      kategori_input.value != "" &&
      gorsel_url_input.value != ""
    ) {
      this.alert("success", "Başarıyla eklendi", 2000);
      return true;
    } else {
      this.alert("danger", "Lütfen inputları boş bırakmayınız!!", 2000);

      return false;
    }
  }

  static editFilmItem(request, e) {
    const editID = e.target.parentElement.id - 1;
    console.log(editID);
    request
      .get("http://localhost:3000/blogs")
      .then((data) => {
        const element = data[editID];
        id.value = element.id;
        baslik_input.value = element.baslik;
        yazi_input.value = element.yazi;
        yazarin_adi_input.value = element.yazarin_adi;
        kategori_input.value = element.kategori;
        gorsel_url_input.value = element.gorsel_url;
        tarih_ve_saat_input.value = element.tarih_ve_saat;
      })
      .catch((err) => console.log(err));
  }

  static tarihDuzeltme() {
    let gun, ay, yil, saat, dakika;
    if (
      new Date().getDate() < 10
        ? (gun = "0" + new Date().getDate())
        : (gun = new Date().getDate())
    );
    if (
      new Date().getMonth() < 10
        ? (ay = "0" + new Date().getMonth())
        : (ay = new Date().getMonth())
    );
    if (
      new Date().getFullYear() < 10
        ? (yil = "0" + new Date().getFullYear())
        : (yil = new Date().getFullYear())
    );
    if (
      new Date().getHours() < 10
        ? (saat = "0" + new Date().getHours())
        : (saat = new Date().getHours())
    );
    if (
      new Date().getMinutes() < 10
        ? (dakika = "0" + new Date().getMinutes())
        : (dakika = new Date().getMinutes())
    );
    return `${gun}-${ay}-${yil} ${saat}-${dakika}`;
  }
}
