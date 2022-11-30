let sonuc;
ul = document.getElementById("task-list");
let count = ul.children.length;


let li = `

<li class="task list-group-item">
<div class="form-check">
<input type="checkbox" id="${count+1}" class="form-check-input">
<label for="${count+1}" class="form-check-label">Görev ${count+1}</label>
</div>
</li>
`;
ul.insertAdjacentHTML("beforeend",li) // ul ' nin içerisine li etiketinden sonra bir li daha eklememizi sağladı. Web sitesinde görev 2 olarak gördüğün değeri aslında burada ekledik.
console.log(li);