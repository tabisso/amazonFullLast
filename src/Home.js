import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/71VWiKRp2aL._SX3000_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id="1"
            title="Cracking the Coding Interview"
            price={48.53}
            image="https://m.media-amazon.com/images/I/61mIq2iJUXL._SL1360_.jpg"
            rating={4}
          />
          <Product
            id="2"
            title="React Key Concepts"
            price={56.53}
            image="https://m.media-amazon.com/images/I/613V82qOt1L._SL1360_.jpg"
            rating={4}
          />
          <Product
            id="3"
            title="Apple iMac 27-inch Retina 5K Desktop"
            price={648.53}
            image="https://m.media-amazon.com/images/I/717q8QReNaL._AC_SL1254_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="4"
            title="Meta Quest 2 — VR 128 GB"
            price={349.96}
            image="https://m.media-amazon.com/images/I/61GhF+JUXGL._AC_SL1500_.jpg"
            rating={4}
          />
          <Product
            id="5"
            title="Apple 2022 MacBook Air Laptop with M2 chip"
            price={1449}
            image="https://m.media-amazon.com/images/I/717Zy0QNOsL._AC_SL1500_.jpg"
            rating={4}
          />
          <Product
            id="6"
            title="DJI Mini 3 Pro (DJI RC) Camera Drone"
            price={1009}
            image="https://m.media-amazon.com/images/I/61lpgd7xtLL._AC_SL1500_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="7"
            title="Dolce & Gabbana by Dolce & Gabbana for Men - 4.2 oz EDT Spray"
            price={77}
            image="https://m.media-amazon.com/images/I/51aFAedDRHL._AC_SL1000_.jpg"
            rating={5}
          />
          <Product
            id="8"
            title="CGoPro HERO9 Black - Waterproof Action Camera "
            price={319}
            image="https://m.media-amazon.com/images/I/61JIUtttZ+L._AC_SL1500_.jpg"
            rating={4}
          />
          <Product
            id="9"
            title="CAIYUN 46.5 Computer Desk with Shelves L Shaped Desk Home "
            price={48.53}
            image="https://m.media-amazon.com/images/I/71QnP0PAz+L._AC_SL1500_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="10"
            title="Nike Mens Air Max 90 Running Shoe"
            price={107.41}
            image="https://m.media-amazon.com/images/I/61L5P4o4v+L._AC_SY695_.jpg"
            rating={4}
          />
    
          <Product
            id="11"
            title="WenVen Women's Winter Coat Military Style Sherpa Jacket with Removable Hood"
            price={117.51}
            image="https://m.media-amazon.com/images/I/718GZ1kZEVL._AC_SY879_.jpg"
            rating={4}
          />
          <Product
            id="12"
            title="Nike Mens Running Running Shoe"
            price={109.11}
            image="https://m.media-amazon.com/images/I/518lBYLG1-L._AC_SY695_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
