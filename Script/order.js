const menuArray = [
    {
      name: "Pizza",
      ingredients: ["onion", "tomato,", "mushrom"],
      id: 0,
      price: 14,
      emoji: "🍕"
    },
    {
      name: "Burger",
      ingredients: ["beef", "cheese", "lettuce"],
      price: 12,
      emoji: "🍔",
      id: 1
    },
    {
      name: "Paneer",
      ingredients: ["paneer" , "spices", "tomato"],
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
                  Thanks,     ${formName}! Your order is on its way!
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
                          <span class="cart-item-price" >    ₹    ${item.price}</span>
                      </div>`;
      totalPrice += item.price;
    });
    document.querySelector(".total-items-price").textContent = `    ₹    ${totalPrice}`;
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
  