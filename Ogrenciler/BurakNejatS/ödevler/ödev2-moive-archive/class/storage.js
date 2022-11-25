class Storage {

static filmArsivListele(){

    let allItems = JSON.parse(localStorage.getItem("listFilm"));
    console.log("allItems:", allItems);
    console.log("filmList:", filmList);
    //filmListesi.innerHTML = '';
    for (let i = 0; i < allItems?.length; i++) {
      const items = document.createElement("div");
      items.className = "col-md-12 d-flex cardContainer align-items-center";

      const divAdi = document.createElement("div");
      divAdi.innerHTML = allItems[i]?.filmAdi;
      divAdi.className = "col-md-3";
  
      const divYonetmen = document.createElement("div");
      divYonetmen.innerHTML = allItems[i]?.filmYonetmeni;
      divYonetmen.className = "container-fluid col-md-3";
  
      const divTarih = document.createElement("div");
      divTarih.innerHTML = allItems[i]?.izlenilenTarih;
      divTarih.className = "container-fluid col-md-3";
  
      const img = document.createElement("img");
      img.src = allItems[i]?.filmAfisi;
      img.className = "container-fluid col-md-3 ";
  
      items.appendChild(img);
      items.appendChild(divAdi);
      items.appendChild(divYonetmen);
      items.appendChild(divTarih);
      filmListesi.appendChild(items);
      console.log("filmListesi:", filmListesi);
    }
  }
}