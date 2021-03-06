import React from "react";

import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
      </div>

      <div className="home__row">
        <Product
          id="12321341"
          title="The Lean StartUp: How Constant Innovation Creates Radically Successful Businesses by Eric Ries Paperback"
          price={23.99}
          rating={5}
          image={
            "https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
          }
        />

        <Product
          id="49538094"
          title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
          price={305.91}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SL1500_.jpg"
        />

        <Product
          id="2356880"
          title="Shea Moisture Coconut and Hibiscus Combination Pack – 13 oz. Curl & Shine Shampoo, 13 oz. Curl & Shine Conditioner & 12 oz. Curl Enhancing Smoothie"
          price={29.84}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/71PsJ%2BqqcBL._SL1500_.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="4903850"
          title="Samsung LC49R90SSUXEN 49' Curved LED Gaming Monitor"
          price={200.99}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/61%2BKLLZWtQL._AC_SL1000_.jpg"
        />

        <Product
          id="2351632"
          title="Fitbit Charge 3 Advanced Fitness Tracker with Heart Rate, Swim Tracking & 7 Day Battery"
          price={128.98}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
        />

        <Product
          id="23445930"
          title="Amazon Echo (3rd generation) | Smart speaker with Alexa. Charcoal Fabric"
          price={49.99}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/61qDKbBlcgL._AC_SL1000_.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="3254354"
          title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
          price={598.99}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
        />

        <Product
          id="13435437"
          title="HUAWEI MateBook D 15 2020 - 15.6 Inch Laptop with FullView 1080P FHD
        Ultrabook PC (AMD Ryzen 5 3500U, 8 GB RAM, 256 GB SSD, Windows 10 Home,
        Multi-screen Collaboration, Fingerprint Reader), Space Grey"
          price={599.99}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/51xx9NCutcL._AC_SL1000_.jpg"
        />
        <Product
          id="90829392"
          title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 * 1440"
          price={1094.98}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
