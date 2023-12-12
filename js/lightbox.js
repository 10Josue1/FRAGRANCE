document.addEventListener('DOMContentLoaded', function () {
    const productContainer = document.getElementById('productContainer');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
  
    let currentIndex = 0;
    const movePer = 100;
  
    const products = [
      { image: 'fragance_1.png', name: 'Product One', category: 'New arrival', price: '$45.00' },
      // Agrega más productos según sea necesario
    ];
  
    products.forEach(product => {
      const productWrapper = document.createElement('div');
      productWrapper.classList.add('custom-product-wrapper');
  
      const productImageContainer = document.createElement('div');
      productImageContainer.classList.add('custom-product-image-container');
  
      const productImage = document.createElement('img');
      productImage.src = product.image;
      productImage.alt = 'Product Image';
  
      const productInfo = document.createElement('div');
      productInfo.classList.add('custom-product-info');
  
      const productCategory = document.createElement('small');
      productCategory.textContent = product.category;
  
      const productName = document.createElement('b');
      productName.textContent = product.name;
  
      const productPrice = document.createElement('samp');
      productPrice.textContent = product.price;
  
      const productActions = document.createElement('div');
      productActions.classList.add('custom-product-actions');
  
      const addToCartLink = document.createElement('a');
      addToCartLink.href = '#';
      addToCartLink.textContent = 'Add to Cart';
  
      productImageContainer.appendChild(productImage);
      productInfo.appendChild(productCategory);
      productInfo.appendChild(productName);
      productInfo.appendChild(productPrice);
      productActions.appendChild(addToCartLink);
  
      productWrapper.appendChild(productImageContainer);
      productWrapper.appendChild(productInfo);
      productWrapper.appendChild(productActions);
  
      productContainer.appendChild(productWrapper);
    });
  
    prevBtn.addEventListener('click', () => moveCarousel(-movePer));
    nextBtn.addEventListener('click', () => moveCarousel(movePer));
  
    function moveCarousel(move) {
      currentIndex = Math.min(Math.max(currentIndex + move / movePer, 0), products.length - 1);
      const newPosition = -currentIndex * movePer;
      productContainer.style.transform = `translateX(${newPosition}%)`;
    }
  });
  



/*const customGallery = document.querySelector('.custom-gallery');
const customContainerIMG = document.querySelector('.custom-lightbox');
const customImg = document.querySelector('.custom-show-img');
const customButton = document.querySelector('.custom-btn');

customGallery.addEventListener('click', (e) => {
    if (e.target.matches('.custom-gallery-img')) {
        customImg.src = e.target.src;
        customContainerIMG.classList.add('show');
    }
});

customButton.addEventListener('click', function () {
    customContainerIMG.classList.remove('show');
});





document.addEventListener("DOMContentLoaded", function () {
    const gallery = document.querySelectorAll(".image-container");
    const previewBox = document.querySelector(".preview-box");
    const previewImg = previewBox.querySelector("img");
    const closeIcon = previewBox.querySelector(".icon");
    const currentImg = previewBox.querySelector(".current-img");
    const totalImg = previewBox.querySelector(".total-img");
    const description = previewBox.querySelector(".description");
    const link = previewBox.querySelector(".link");
    const shadow = document.querySelector(".shadow");

    let newIndex;

    gallery.forEach((container, index) => {
        container.onclick = () => {
            newIndex = index;
            updatePreview();
            showPreview();
        };
    });

    function updatePreview() {
        currentImg.textContent = newIndex + 1;
        let imageURL = gallery[newIndex].querySelector("img").src;
        let imgDescription = gallery[newIndex].dataset.description;
        let imgLink = gallery[newIndex].querySelector(".image-link").getAttribute("href");

        previewImg.src = imageURL;
        description.textContent = imgDescription;
        link.href = imgLink;
    }

    function showPreview() {
        document.body.style.overflow = "hidden";
        previewBox.classList.add("show");
        shadow.style.display = "block";
    }

    function hidePreview() {
        document.body.style.overflow = "scroll";
        previewBox.classList.remove("show");
        shadow.style.display = "none";
    }

    closeIcon.onclick = hidePreview;

    shadow.onclick = function (e) {
        if (e.target === shadow) {
            hidePreview();
        }
    };

    // Previous and Next Buttons
    const prevBtn = document.querySelector(".slide.prev");
    const nextBtn = document.querySelector(".slide.next");

    function showPrev() {
        if (newIndex > 0) {
            newIndex--;
            updatePreview();
        }
    }

    function showNext() {
        if (newIndex < gallery.length - 1) {
            newIndex++;
            updatePreview();
        }
    }

    prevBtn.onclick = showPrev;
    nextBtn.onclick = showNext;
});
*/
