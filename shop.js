window.addEventListener("scroll", function () {
  var navbar = document.getElementById("nav-bar");
  var distanceFromTop =
    window.pageYOffset || document.documentElement.scrollTop;

  if (distanceFromTop > 0) {
    navbar.classList.add("nav-bar-scrolled");
  } else {
    navbar.classList.remove("nav-bar-scrolled");
  }
});

let products = {
  data: [
    {
      name: "MATRIX 1999 DECK",
      price: "780.000đ - 1.470.000đ",
      image: "assets/images/image-1.png",
    },

    {
      name: "RAEDA DECK",
      price: "780.000đ - 1.470.000đ",
      image: "assets/images/image-2.png",
    },

    {
      name: "MUSTY DECK",
      price: "780.000đ - 1.470.000đ",
      image: "assets/images/image-3.png",
    },

    {
      name: "TRISTIQUE DECK",
      price: "780.000đ - 1.470.000đ",
      image: "assets/images/image-4.png",
    },
    {
      name: "MATRIX 1999 DECK",
      price: "780.000đ - 1.470.000đ",
      image: "assets/images/image-5.png",
    },

    {
      name: "RAEDA DECK",
      price: "780.000đ - 1.470.000đ",
      image: "assets/images/image-6.png",
    },

    {
      name: "MUSTY DECK",
      price: "780.000đ - 1.470.000đ",
      image: "assets/images/image-7.png",
    },

    {
      name: "TRISTIQUE DECK",
      price: "780.000đ - 1.470.000đ",
      image: "assets/images/image-8.png",
    },
  ],
};

for (let items of products.data) {
  // Tạo div card
  let card = document.createElement("div");
  card.classList.add("card");

  // Tạo div chứa img: img container
  let imgContainer = document.createElement("div");
  imgContainer.classList.add("image-container");

  // Tạo img và đặt vào bên trong img container
  let image = document.createElement("img");
  image.setAttribute("src", items.image);
  imgContainer.appendChild(image); // Đặt img vào img container
  card.appendChild(imgContainer); // Đặt img container vào card

  // Tạo div chứa thông tin sản phẩm: text container
  let container = document.createElement("div");
  container.classList.add("container");

  // Tên sản phẩm
  let name = document.createElement("h5");
  name.classList.add("product-name");
  name.innerText = items.name.toUpperCase();
  container.appendChild(name);

  // Giá tiền
  let price = document.createElement("h6");
  price.innerHTML = "<b>Price:</b> " + items.price; // In đậm chữ price nên ta phải dùng <b>
  container.appendChild(price);
  // Thêm card sản phẩm vào danh sách products
  card.appendChild(container);
  document.getElementById("products").appendChild(card);
}

for (let items of products.data) {
  let product = [];
  if (localStorage.product) {
    product = JSON.parse(localStorage.product);
  }
  product.push({ name: items.name, price: items.price, image: items.image });
  localStorage.setItem("product", JSON.stringify(product));
}
