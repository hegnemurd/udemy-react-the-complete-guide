import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        <ProductItem
          // id="MealOne"
          title="Test"
          price={6}
          description="This is a first product - amazing!"
        />
        {/* <ProductItem
          title="Test Meal"
          price={8}
          description="This is a test meal!"
        /> */}
      </ul>
    </section>
  );
};

export default Products;
