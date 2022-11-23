function newUi () {}

newUi.prototype.showAlert = function(type, message) {
    const alert = document.createElement("div");
  
    alert.classList = `alert alert-${type}`;
    alert.textContent = message;
  
    firstCardbody.appendChild(alert);
  
    setTimeout(function () {
      alert.remove();
    }, 2000);
  }