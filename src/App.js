import Cart from "./components/Cart/Cart";
import FoodItems from "./components/FoodItems/FoodItems";
import AdminPanel from './components/AdminPanel/AdminPanel';
import Order from "./components/OrderPage/Order";
import Invoice from "./components/Invoice/Invoice";
import Header from "./components/Shared/Header/Header";


function App() {
  return (
    <div>
      {/* <Header />
      <FoodItems />
      <Cart />
      <AdminPanel />
      <Order /> */}
      <Invoice />
    </div>
  );
}

export default App;
