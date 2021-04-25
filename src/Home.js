import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://samtutorials.com/wp-content/uploads/2018/09/Amazon_Banner.png"
          alt=""
        />

        <div className="home__row">
          <Product
            id="123461"
            title="Getting Things Done: The Art of Stress-Free Productivity"
            price={19.99}
            image="https://m.media-amazon.com/images/I/81trXFlSkCL._AC_UL320_.jpg"
            rating={4}
          />
          <Product
            id="438278"
            title="Davines All In One Milk Lotion"
            price={34.99}
            image="https://m.media-amazon.com/images/I/71t-WfqFZVL._AC_UL320_.jpg"
            rating={3}
          />
          <Product
            id="542792"
            title="BRAZILIAN BLOWOUT Shampoo and Conditioner Duo Set"
            price={49.99}
            image="https://m.media-amazon.com/images/I/711v+XG2O4L._AC_UL320_.jpg"
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id="753920"
            title="200-571 CH Products Fighterstick USB"
            price={122.95}
            image="https://m.media-amazon.com/images/I/71dA-9LWX2L._AC_UL320_.jpg"
            rating={4}
          />
          <Product
            id="463422"
            title="Game Plus Products: Skirmisher Gaming Bag Black"
            price={39.99}
            image="https://m.media-amazon.com/images/I/51RWz7zrW2L._AC_UL320_.jpg"
            rating={3}
          />
          <Product
            id="566333"
            title="Samsung Galaxy S21 Ultra 5G"
            price={999.99}
            image="https://m.media-amazon.com/images/I/81kfA-GtWwL._AC_UL320_.jpg"
            rating={5}
          />
          <Product
            id="112534"
            title="New Apple iPhone 12 Pro Max"
            price={1199.99}
            image="https://m.media-amazon.com/images/I/5147yoYW3XL._AC_UL320_.jpg"
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product
            id="774457"
            title="Samsung UN65KS9000 65-Inch 4K Ultra HD Smart LED TV (2016 Model)"
            price={2999.99}
            image="https://images-na.ssl-images-amazon.com/images/I/91FOClQ63EL._AC_SL1500_.jpg"
            rating={5}
          />
          <Product
            id="675453"
            title="Dell Alienware Area 51M Laptop, FHD (1920 x 1080)"
            price={5699.99}
            image="https://images-na.ssl-images-amazon.com/images/I/312%2BBg7tGRL._AC_SX466_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
