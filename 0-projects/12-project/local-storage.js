localStorage.setItem("name", "Hans");

localStorage.setItem("name2", "Karl-Heinz");

localStorage.removeItem("name2");

const name = localStorage.getItem("name");

const h1 = document.querySelector("#title");

name
  ? (h1.textContent = `Welcome ${name}!`)
  : (h1.textContent = `Too bad, nobody here.`);
