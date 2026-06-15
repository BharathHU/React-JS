import React from "react";
import "./style.css";

function HotelMenu() {
  const hotelMenu = [
  {
    category: "Breakfast",
    items: [
      {
        name: "Idli Sambar",
        price: 120,
        image: "https://cdn.pixabay.com/photo/2016/11/18/15/07/food-1834648_1280.jpg"
      },
      {
        name: "Masala Dosa",
        price: 180,
        image: "https://cdn.pixabay.com/photo/2017/05/07/08/56/pancakes-2291908_1280.jpg"
      },
      {
        name: "Poori Bhaji",
        price: 160,
        image: "https://cdn.pixabay.com/photo/2016/03/05/19/02/hamburger-1238246_1280.jpg"
      },
      {
        name: "Pancakes",
        price: 220,
        image: "https://cdn.pixabay.com/photo/2017/05/07/08/56/pancakes-2291908_1280.jpg"
      }
    ]
  },
  {
    category: "Starters",
    items: [
      {
        name: "Paneer Tikka",
        price: 320,
        image: "https://cdn.pixabay.com/photo/2016/03/05/19/02/hamburger-1238246_1280.jpg"
      },
      {
        name: "Chicken Tikka",
        price: 380,
        image: "https://cdn.pixabay.com/photo/2015/04/08/13/13/food-712665_1280.jpg"
      },
      {
        name: "Spring Roll",
        price: 260,
        image: "https://cdn.pixabay.com/photo/2017/06/02/18/24/vegetables-2367023_1280.jpg"
      },
      {
        name: "Crispy Corn",
        price: 280,
        image: "https://cdn.pixabay.com/photo/2014/12/21/23/28/recipe-575434_1280.png"
      }
    ]
  },
  {
    category: "Main Course",
    items: [
      {
        name: "Butter Chicken",
        price: 520,
        image: "https://cdn.pixabay.com/photo/2015/04/08/13/13/food-712665_1280.jpg"
      },
      {
        name: "Chicken Biryani",
        price: 450,
        image: "https://cdn.pixabay.com/photo/2017/01/26/02/06/platter-2009590_1280.jpg"
      },
      {
        name: "Paneer Butter Masala",
        price: 420,
        image: "https://cdn.pixabay.com/photo/2016/11/18/15/07/food-1834648_1280.jpg"
      },
      {
        name: "Mutton Biryani",
        price: 580,
        image: "https://cdn.pixabay.com/photo/2017/01/26/02/06/platter-2009590_1280.jpg"
      }
    ]
  },
  {
    category: "Desserts",
    items: [
      {
        name: "Gulab Jamun",
        price: 150,
        image: "https://cdn.pixabay.com/photo/2017/08/06/06/42/cake-2588554_1280.jpg"
      },
      {
        name: "Cheesecake",
        price: 280,
        image: "https://cdn.pixabay.com/photo/2017/08/06/06/42/cake-2588554_1280.jpg"
      },
      {
        name: "Chocolate Brownie",
        price: 240,
        image: "https://cdn.pixabay.com/photo/2016/11/29/11/38/cake-1869227_1280.jpg"
      }
    ]
  },
  {
    category: "Beverages",
    items: [
      {
        name: "Cold Coffee",
        price: 220,
        image: "https://cdn.pixabay.com/photo/2017/01/11/11/33/coffee-1974841_1280.jpg"
      },
      {
        name: "Mojito",
        price: 250,
        image: "https://cdn.pixabay.com/photo/2016/11/29/12/54/drink-1869716_1280.jpg"
      },
      {
        name: "Milkshake",
        price: 230,
        image: "https://cdn.pixabay.com/photo/2017/05/07/08/56/pancakes-2291908_1280.jpg"
      }
    ]
  }
];

  return (
    <div className="menu-container">
      <h1 className="title"> Hotel</h1>

      {hotelMenu.map((menu, index) => (
        <div key={index}>
          <h2 className="category">{menu.category}</h2>

          <div className="menu-grid">
            {menu.items.map((item, i) => (
              <div className="card" key={i}>
                <img src={item.image} alt={item.name} />

                <div className="card-content">
                  <h3>{item.name}</h3>
                  <p>₹{item.price}</p>

                  <button>Order Now</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default HotelMenu;