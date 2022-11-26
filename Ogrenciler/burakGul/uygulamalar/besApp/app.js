const bes = document.querySelector(".image-container");
const testModal = Number(prompt("kaç tane resim istersiniz ?"));
photogallery();

function photogallery() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "users.JSON", true);
  xhr.onload = function () {
    if (this.status == 200) {
      const response = JSON.parse(this.responseText);
      response.forEach(function (object) {
        if (object.id <= testModal) {
          bes.innerHTML += `<div class="image">
        <img
          src='${object.Images}'
          alt=""
        />
      </div>`;
          console.log(object.Images);
          document.querySelectorAll(".image-container img").forEach((image) => {
            image.onclick = () => {
              document.querySelector(".popup-image").style.display = "block";
              document.querySelector(".popup-image img").src =
                image.getAttribute("src");
            };
          });
          document.querySelector(".popup-image span").onclick = () => {
            document.querySelector(".popup-image").style.display = "none";
          };
        }
      });
    }
  };
  xhr.send();
}
