import Cart from "./components/Cart/Cart";
import FoodItems from "./components/FoodItems/FoodItems";
import AdminPanel from './components/AdminPanel/AdminPanel';
import Order from "./components/OrderPage/Order";
import Invoice from "./components/Invoice/Invoice";
import Header from "./components/Shared/Header/Header";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { Button } from "react-bootstrap";


function App() {
  return (
    <div>
      {/* <Header />
      <FoodItems />
      <Cart />
      <AdminPanel />
      <Order /> */}
      <PDFDownloadLink document={<Invoice />} fileName="Invoice">
        {(loading => (loading ? <Button>invoice downloading</Button> : <Button>download</Button>))}
      </PDFDownloadLink>

      <Invoice />
    </div>
  );
}

export default App;
