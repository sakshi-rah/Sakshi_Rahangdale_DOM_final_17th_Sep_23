const menuArray = [
  {
    name: "Pizza",
    ingredients: ["onion", "tomato,", "mushrom"],
    id: 0,
    price: 260,
    emoji: "🍕"
  },
  {
    name: "Burger",
    ingredients: ["beef", "cheese", "lettuce"],
    price: 220,
    emoji: "🍔",
    id: 1
  },
  {
    name: "Paneer",
    ingredients: ["paneer", "spices", "tomato"],
    price: 250,
    emoji: "🥘",
    id: 2
  },
  {
    name: "Fried rice",
    ingredients: ["rice", "oil", "spices"],
    price: 170,
    emoji: "🍚",
    id: 3
  },
  {
    name: "Chicken",
    ingredients: ["meat, oil, onion, spices"],
    price: 430,
    emoji: "🍗",
    id: 4
  },
  {
    name: "Eggs omelette",
    ingredients: ["eggs", "oil", "spices"],
    price: 90,
    emoji: "🍛",
    id: 5
  },
  {
    name: "Veg soup",
    ingredients: ["onion", "tomato,", "mushrom"],
    id: 6,
    price: 130,
    emoji: "🥣"
  },
  {
    name: "Veg Thali",
    ingredients: ["rice", "pulses", "vegs"],
    price: 210,
    emoji: "🍲",
    id: 7
  },
  {
    name: "Shev Bhaji",
    ingredients: ["shev", "spices", "tomato"],
    price: 265,
    emoji: "🥧",
    id: 8
  },
  {
    name: "Mix-veg",
    ingredients: ["gajar", "matar", "gobi"],
    price: 232,
    emoji: "🥗",
    id: 9
  },
  {
    name: "Fish",
    ingredients: ["fish, oil, spices"],
    price: 340,
    emoji: "🦈",
    id: 10
  },
  {
    name: "Chicken Biriyani",
    ingredients: ["meats, rice, spices"],
    price: 385,
    emoji: "🍗",
    id: 11
  },
  {
    name: "Mutton",
    ingredients: ["meats, oil, spices"],
    price: 570,
    emoji: "🍖",
    id: 12
  },

  {
    name: "Tandoori chicken",
    ingredients: ["chicken, oil, spices"],
    price: 480,
    emoji: "🍗",
    id: 13
  },
  {
    name: "Noodles",
    ingredients: ["sauce", "oil", "noodles"],
    price: 80,
    emoji: "🍜",
    id: 14
  },
  {
    name: "Manchurian",
    ingredients: ["sauce", "carrot", "cabbage"],
    price: 185,
    emoji: "🍝",
    id: 15
  },
  {
    name: "French fries",
    ingredients: ["sauce", "potato", "oil"],
    price: 110,
    emoji: "🍟",
    id: 16
  },
  {
    name: "Sandwich",
    ingredients: ["sauce", "cheese", "paneer"],
    price: 279,
    emoji: "🥪",
    id: 17
  },
  {
    name: "Veg Pulao",
    ingredients: ["rice", "gajar", "tomato"],
    price: 150,
    emoji: "🍲",
    id: 18
  },
  {
    name: "Chhole Bhature",
    ingredients: ["chana", "maida", "tomato"],
    price: 255,
    emoji: "🥘",
    id: 19
  },
  {
    name: "Palak Paneer",
    ingredients: ["palak", "paneer", "spices"],
    price: 299,
    emoji: "🥧",
    id: 19
  },
  {
    name: "Masala Aalu",
    ingredients: ["aalu", "samar", "spices"],
    price: 178,
    emoji: "🥔",
    id: 20
  },
  {
    name: "Malabar Fish curry",
    ingredients: ["fish", "oil", "spices"],
    price: 499,
    emoji: "🦈",
    id: 21
  },
  {
    name: "Tunde Kabab",
    ingredients: ["chicken", "oil", "spices"],
    price: 515,
    emoji: "🍖",
    id: 22
  },
  {
    name: "Idli",
    ingredients: ["rice", "urad dal",],
    price: 110,
    emoji: "🥮",
    id: 23
  },
  {
    name: "Masala Dosa",
    ingredients: ["rice", "urad dal",],
    price: 140,
    emoji: "🥖",
    id: 24
  },
  {
    name: "Pav Bhaji",
    ingredients: ["bread", "potato","tomato"],
    price: 147,
    emoji: "🥞",
    id: 25
  },
  {
    name: "Samosa",
    ingredients: ["maida", "potato","tomato"],
    price: 80,
    emoji: "🧀",
    id: 26
  },   
  {
    name: "Chocolate Cake",
    ingredients: ["vinegar", "cocoa powder"],
    price: 590,
    emoji: "🎂",
    id: 27
  },
  {
    name: "Cupcake",
    ingredients: ["cream", "cocoa powder"],
    price: 268,
    emoji: "🧁",
    id: 28
  },  
  {
    name: "Cookies",
    ingredients: ["suger", "eggs", "flour"],
    price: 195,
    emoji: "🍪",
    id: 29
  }, 
  {
    name: "Chocolates",
    ingredients: ["suger", "cream", "flour"],
    price: 220,
    emoji: "🍫",
    id: 30
  },
  {
    name: "Muffins",
    ingredients: ["suger", "cream", "bread"],
    price: 235,
    emoji: "🧁",
    id: 31
  },
  {
    name: "Brownies",
    ingredients: ["flour", "cream", "brown suger"],
    price: 215,
    emoji: "🍩",
    id: 32
  }, 
  {
    name: "Cheesecake",
    ingredients: ["stoberry", "cream", "suger"],
    price: 288,
    emoji: "🍰",
    id: 33
  }, 
  {
    name: "Custard",
    ingredients: ["milk", "eggs", "suger"],
    price: 323,
    emoji: "🍮",
    id: 34
  },            
];

const containerEl = document.querySelector(".container");
let cartItem = [];
// Getting all the data form Data.js and converting it into html code.
function getFoodItems(data) {
  let foodHtml = ``;
  data.forEach((item) => {
    foodHtml += `
              <div class="food-item" >
                      <div class="food-img">    ${item.emoji}</div>
                      <div class="food-desc">
                          <h2 class="food-desc-head">    ${item.name}</h2>
                          <p class="food-desc-materials">    ${item.ingredients}</p>
                          <p class="food-desc-price">    ₹    ${item.price}</p>
                      </div>
                      <button class="add-btn" data-add=    ${item.id} >  + </button>
                  </div>
         `;
  });
  return foodHtml;
}

function render() {
  containerEl.innerHTML += getFoodItems(menuArray);
}
render();

// Handleing Cart

document.addEventListener("click", (e) => {
  if (e.target.dataset.add) {
    updateCart(parseInt(e.target.dataset.add));
  }
  // Complete Btn
  else if (e.target.id == "complete-order") {
    document.querySelector(".model").style.display = "block";
  }
  // Remove Btn
  else if (e.target.classList.contains("pay-btn")) {
    e.preventDefault();
    document.querySelector(".model").style.display = "none";
    const myFormData = new FormData(myForm);
    const formName = myFormData.get("name");
    showHideContainer(1);
    document.querySelector(".checkout-container").innerHTML = `
              <div class="thank-you-conatiner">
                  Thanks, Your order is on its way!
              </div>
          `;
  } else if (e.target.id) {
    cartItem = cartItem.filter((item) => item.id != e.target.id);
    console.log(cartItem.length);
    if (cartItem.length == 0) {
      showHideContainer(0);
    }
    renderCart();
  }
});

function updateCart(elementId) {
  const getItem = menuArray.filter((item) => item.id == elementId)[0];
  cartItem.push(getItem);
  genrateCartHtml();
  renderCart();
}

function genrateCartHtml() {
  let cartHtml = ``;
  let totalPrice = 0;
  cartItem.forEach((item) => {
    cartHtml += ` 
                      <div class="cart-item" > 
                          <span class="cart-item-name">    ${item.name}</span> 
                          <span class="remove-item" id =     ${item.id}>remove</span>
                          <span class="cart-item-price" >    ₹ ${item.price}</span>
                      </div>`;
    totalPrice += item.price;
  });
  document.querySelector(".total-items-price").textContent = ` ₹  ${totalPrice}`;
  return cartHtml;
}

function showHideContainer(k) {
  const cehckoutContainerEl = document.querySelector(".checkout-container");
  if (k == 1 && cehckoutContainerEl.classList.contains("hidden")) {
    cehckoutContainerEl.classList.remove("hidden");
  } else if (k == 0) {
    cehckoutContainerEl.classList.add("hidden");
  }
}
function renderCart() {
  if (cartItem.length > 0) {
    showHideContainer(1);
    document.querySelector(".cart-details").innerHTML = genrateCartHtml();
  }
}

//user name js
document.addEventListener("DOMContentLoaded", function () {
  const userName = document.getElementById("user-name");
  const logoutButton = document.getElementById("logout");

  // Check if the user is logged in by checking local storage.
  const loggedInUser = localStorage.getItem("loggedInUser");

  if (loggedInUser) {
    // Display the user's name on the home page.
    userName.textContent = loggedInUser;

  } else {
    // If the user is not logged in, redirect to the login page.
    window.location.href = "./../Pages/login.html";
  }

  // Handle logout
  logoutButton.addEventListener("click", function () {
    // Clear the user's data from local storage.
    localStorage.removeItem("loggedInUser");
    localStorage.removeItem("userPassword");

    // Redirect to the login page.
    window.location.href = "./../Pages/login.html";
  });
});