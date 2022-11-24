document.getElementById('ajax').addEventListener('click', getAllEmployees);

function getAllEmployees() {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'employees.json', true);

  xhr.onload = function () {
    let list = document.getElementById('employees');

    if (this.status == 200) {
      const employees = JSON.parse(this.responseText);

      employees.forEach(function (emp) {
        list.innerHTML += `
        <tr>
            <td>${emp.name}</td>
            <td>${emp.department}</td>
            <td>${emp.salary}</td>
        </tr>
        
        
        `;
      });
      console.log(JSON.parse(this.responseText));
    }
  };

  xhr.send();
}
