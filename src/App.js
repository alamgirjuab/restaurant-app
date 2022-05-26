import Cart from "./components/Cart/Cart";
import FoodItems from "./components/FoodItems/FoodItems";
import SingleFoodItem from "./components/SingleFoodItem/SingleFoodItem";
import Sliders from "./components/Sliders/Sliders";
import AdminPanel from './components/AdminPanel/AdminPanel';
import Order from "./components/OrderPage/Order";
import Invoice from "./components/Invoice/Invoice";


function App() {
  return (
    <div>
      <Sliders />
      <FoodItems />
      <SingleFoodItem />
      <Cart />
      <AdminPanel />
      <Order />
      <Invoice />
    </div>
  );
}

export default App;
