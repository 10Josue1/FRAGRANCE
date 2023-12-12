let productListWomen = {
    data: [
        {
            productName: "Perfume Floral Elegante",
            category: "Marca1",
            price: "50",
            image: "fragance_1.png",
            link: "https://api.whatsapp.com/send?phone=+48301845&text=Quiero%20mas%20informaci%C3%B3n%20de%20la%20fragancia%20numero%201,%20",
        },








      {
          productName: "Aroma Dulce y Suave",
          category: "Marca2",
          price: "65",
          image: "fragance_2.png",
          link: "https://www.ejemplo2.com",
      },
      {
          productName: "Perfume Floral Elegante",
          category: "Marca1",
          price: "50",
          image: "fragance_3.png",
          link: "https://www.ejemplo3.com",
      },
      {
        productName: "Perfume Floral Elegante",
        category: "Marca3",
        price: "50",
        image: "fragance_3.png",
        link: "https://www.ejemplo1.com",
    },
    {
        productName: "Aroma Dulce y Suave",
        category: "Marca2",
        price: "65",
        image: "fragance_1.png",
        link: "https://www.ejemplo2.com",
    },
    {
        productName: "Perfume Floral Elegante",
        category: "Marca4",
        price: "50",
        image: "fragance_2.png",
        link: "https://www.ejemplo3.com",
    },
        // Agrega más productos según sea necesario
    ],
};

for (let product of productListWomen.data) {
    let card = document.createElement("div");
    card.classList.add("product-card-women", product.category, "hide");

    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container-women");

    let image = document.createElement("img");
    image.setAttribute("src", product.image);
    image.classList.add("product-img-women");
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);

    let container = document.createElement("div");
    container.classList.add("product-info-women");

    let name = document.createElement("h5");
    name.classList.add("product-name-women");
    name.innerText = product.productName.toUpperCase();
    container.appendChild(name);

    let price = document.createElement("h6");
    price.innerText = "$" + product.price;
    container.appendChild(price);

    let buyButton = document.createElement("button");
    buyButton.innerText = "Comprar";
    buyButton.classList.add("buy-button-women");
    buyButton.addEventListener("click", () => comprarProductoWomen(product));

    container.appendChild(buyButton);

    card.appendChild(container);
    document.getElementById("product-list-women").appendChild(card);
}

function comprarProductoWomen(product) {
    // Abrir el enlace en una nueva pestaña
    window.open(product.link, '_blank');
    // Puedes personalizar esta función para realizar otras acciones, como agregar al carrito, etc.
}

function filterProductWomen(category) {
    let buttons = document.querySelectorAll(".product-button-women");
    buttons.forEach((button) => {
        if (category.toUpperCase() === button.innerText.toUpperCase()) {
            button.classList.add("active");
        } else {
            button.classList.remove("active");
        }
    });

    let elements = document.querySelectorAll(".product-card-women");
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

document.getElementById("search-button-women").addEventListener("click", () => {
    let searchInput = document.getElementById("search-input-women").value;
    let elements = document.querySelectorAll(".product-name-women");
    let cards = document.querySelectorAll(".product-card-women");

    elements.forEach((element, index) => {
        if (element.innerText.includes(searchInput.toUpperCase())) {
            cards[index].classList.remove("hide");
            cards[index].style.transition = "opacity 0.5s ease-in-out, transform 0.5s ease-in-out";
        } else {
            cards[index].classList.add("hide");
        }
    });
});

window.onload = () => {
    filterProductWomen("all");
};
