import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const Airtable = () => {
  const [products, setProducts] = useState([]);
  const url = "/api/products";
  const fetchProducts = async () => {
    try {
      const { data } = await axios.get(url);
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
    setProducts(products);
  }, []);
  return (
    <section className="section section-center">
      <div className="title">
        <h3>Airtable</h3>
        <div className="title-underline"></div>
      </div>
      <div className="products">
        {products.map((product, index) => {
          const { id, url, price, name } = product;
          return (
            <Link to={`/${id}`} key={index} className="product">
              <img src={url} alt={name} />
              <div className="info">
                <h5>{name}</h5>
                <h5 className="price">${price}</h5>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Airtable;
