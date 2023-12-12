let productList = {
  data: [
    {
      productName: "Regular White",
      category: "Topwear",
      price: "30",
      image: "fragance_1.png",
      link: "https://www.pinterest.es",
    },
    {
      productName: "Beige",
      category: "Bottomwear",
      price: "49",
      image: "fragance_2.png",
      link: "https://www.pinterest.es",
    },
    {
      productName: "Sporty fragrance",
      category: "Watch",
      price: "99",
      image: "fragance_3.png",
      link: "#",
    },
    {
      productName: "Basic aroma",
      category: "Topwear",
      price: "29",
      image: "fragance_3.png",
      link: "#",
    },
    {
      productName: "Black Leather",
      category: "Jacket",
      price: "129",
      image: "fragance_1.png",
      link: "#",
    },
    {
      productName: "Stylish Pink",
      category: "Bottomwear",
      price: "89",
      image: "fragance_2.png",
      link: "#",
    },
    {
      productName: "Brown Men's",
      category: "Jacket",
      price: "189",
      image: "fragance_1.png",
      link: "#",
    },
    {
      productName: "Comfy Gray",
      category: "Bottomwear",
      price: "49",
      image: "fragance_2.png",
      link: "#",
    },
    {
      productName: "Sporty fragrance",
      category: "Watch",
      price: "99",
      image: "fragance_3.png",
      link: "#",
    },
      // Agrega más productos según sea necesario
  ],
};

for (let product of productList.data) {
  // Crear tarjeta
  let card = document.createElement("div");
  card.classList.add("product-card", product.category, "hide");

  let imgContainer = document.createElement("div");
  imgContainer.classList.add("image-container-women");

  let image = document.createElement("img");
  image.setAttribute("src", product.image);
  image.classList.add("product-img");
  imgContainer.appendChild(image);
  card.appendChild(imgContainer);

  let container = document.createElement("div");
  container.classList.add("product-info");

  let name = document.createElement("h5");
  name.classList.add("product-name");
  name.innerText = product.productName.toUpperCase();
  container.appendChild(name);

  let price = document.createElement("h6");
  price.innerText = "$" + product.price;
  container.appendChild(price);

  // Crear un enlace <a> y agregar atributo target="_blank"
  let productLink = document.createElement("a");
  productLink.setAttribute("href", product.link);
  productLink.setAttribute("target", "_blank");
  productLink.classList.add("buy-link"); // Nueva clase buy-link

  let buyButton = document.createElement("button");
  buyButton.innerText = "Comprar";
  buyButton.classList.add("buy-button"); // Agregar la clase "buy-button"
  buyButton.addEventListener("click", () => comprarProducto(product));

  productLink.appendChild(buyButton);
  container.appendChild(productLink);

  card.appendChild(container);
  document.getElementById("product-list").appendChild(card);
}

function comprarProducto(product) {
  // Abrir el enlace en una nueva pestaña
  window.open(product.link, '_blank');
  // Puedes personalizar esta función para realizar otras acciones, como agregar al carrito, etc.
}

// Resto del código sin cambios
function filterProduct(category) {
  let buttons = document.querySelectorAll(".product-button");
  buttons.forEach((button) => {
      if (category.toUpperCase() === button.innerText.toUpperCase()) {
          button.classList.add("active");
      } else {
          button.classList.remove("active");
      }
  });

  let elements = document.querySelectorAll(".product-card");
  elements.forEach((element) => {
      if (category === "all") {
          element.classList.remove("hide");
          element.style.transition = "opacity 0.5s ease-in-out, transform 0.5s ease-in-out";
      } else {
          if (element.classList.contains(category)) {
              element.classList.remove("hide");
              element.style.transition = "opacity 0.5s ease-in-out, transform 0.5s ease-in-out";
          } else {
              element.classList.add("hide");
          }
      }
  });
}

document.getElementById("search-button").addEventListener("click", () => {
  let searchInput = document.getElementById("search-input").value;
  let elements = document.querySelectorAll(".product-name");
  let cards = document.querySelectorAll(".product-card");

  elements.forEach((element, index) => {
      if (element.innerText.includes(searchInput.toUpperCase())) {
          cards[index].classList.remove("hide");
          cards[index].style.transition = "opacity 0.5s ease-in-out, transform 0.5s ease-in-out";
      } else {
          cards[index].classList.add("hide");
      }
  });
});

filterProduct("all");
