function set() {
    localStorage.setItem(
      document.getElementById("username").value,
      document.getElementById("password").value
    );
  }
  function clearItems() {
    localStorage.clear();
  }
  function removeItems() {
    localStorage.removeItem(document.getElementById("remove").value);
  }
  function get() {
    alert(localStorage.getItem(document.getElementById("get").value));
  }