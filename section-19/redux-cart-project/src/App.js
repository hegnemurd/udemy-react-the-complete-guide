import { useSelector } from "react-redux";

import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";

function App() {
  const isShowing = useSelector((state) => state.cartButton.showCart);

  return (
    <Layout>
      {isShowing && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
