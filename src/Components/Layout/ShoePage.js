import React from "react";
import ItemCard from "../../UI/Card";
import classes from "./ShoePage.module.css";
import { CartState } from "../../Store/Context";

const ShoePage = () => {
  const {
    state: { products },
  } = CartState();
  return (
    <div className={classes.div}>
      <h1 className={classes.title}>SHOES</h1>
      <div className={classes.card}>
        {products.map((item, index) => {
          return (
            <ItemCard
              title={item.title}
              url={item.url}
              price={item.price}
              des={item.description}
              id={item.id}
              key={index}
              item={item}
              small={item.small}
              medium={item.medium}
              large={item.large}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ShoePage;
