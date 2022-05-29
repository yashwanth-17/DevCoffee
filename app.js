const container = document.querySelector(".container");

const coffees = [
  {
    name: "Expresso Macchiato",
    image: "images/espresso-macchiato.jpg",
  },
  { name: "Doppio", image: "images/doppio.jpg" },
  { name: "Expresso Shot", image: "images/expresso-shot.jpg" },
  { name: "Cappuccino", image: "images/cappuccino.jpg" },
  { name: "Americano", image: "images/americano.jpg" },
  { name: "Flat White", image: "images/flat-white.jpg" },
  { name: "Latte", image: "images/latte.jpg" },
  { name: "Mocha", image: "images/mocha.jpg" },
  { name: "Black Coffee", image: "images/black-coffee.jpg" },
];

const showCoffees = () => {
  let output = "";
  coffees.forEach(
    ({ name, image }) =>
      (output += `
                <div class="card">
                  <img class="card--avatar" src=${image} />
                  <h1 class="card--title">${name}</h1>
                  <a class="card--link" href="">Taste</a>
                </div>
                `)
  );
  container.innerHTML = output;
};

document.addEventListener("DOMContentLoaded", showCoffees);

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function () {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then((res) => console.log("service worker registered"))
      .catch((err) => console.log("service worker not registered", err));
  });
}
