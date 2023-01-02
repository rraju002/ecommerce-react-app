import { useEffect, useState } from "react";
import "./App.css";
import Cart from "./pages/Cart/Cart";
import Header from "./components/Header/Header";
import Products from "./pages/Products/Products";
import { CartProvider } from "react-use-cart";
import { BrowserRouter as Switch, Route, Redirect } from "react-router-dom";
import axios from "axios";

function App() {
  const [itemsData, setItemsData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    const response = await axios.get("https://jsonblob.com/api/jsonBlob/1041573880095064064" );
    setItemsData(response.data);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <Switch>
        <CartProvider>
          <Header />
          <Route
            exact
            path="/"
            component={() => (
              <Products itemsData={itemsData} loading={loading} />
            )}
          />
          <Route exact path="/cart" component={Cart} />
        </CartProvider>
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;



// "id": 7,
// "title": "Kobe 8",
// "price": 800,
// "description": "Kobe 8",
// "image": "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2019%2F08%2Fkobe-bryant-best-signature-shoe-goat-5.jpg?w=1600&cbr=1&q=90&fit=max"
// },

// "id": 8,
// "title": "Kobe 5 Proto",
// "price": 900,
// "description": "Kobe 5 Proto",
// "image": "https://uproxx.com/wp-content/uploads/2021/10/Nike-Kobe-5-Protro-Alternate-Bruce-Lee-CD4991-101-Release-Date-Price.jpg"
// },

// {
//   "id": 6,
//   "title": "Kobe 6 Grinch ",
//   "price": 800,
//   "description": "Kobe 6",
//   "image": "https://ca-times.brightspotcdn.com/dims4/default/d2d0985/2147483647/strip/true/crop/3071x1732+0+0/resize/1200x677!/quality/80/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fe9%2F49%2F32e591da474a862452d0b5a4acdc%2Fla-ig-nike-kobe-6-protro-grinch.jpg"
// },
// {
//   "id": 5,
//   "title": "Jordan 3",
//   "price": 497,
//   "description": "Jordan 3",
//   "image": "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/075/209/346/original/942086_01.jpg.jpeg?action=crop&width=750"
// },

// {
//   "id": 1,
//   "title": "Jordan 1 High",
//   "price": 2000,
//   "description": "Jordan 1 High",
//   "image": "https://images.solecollector.com/complex/image/upload/c_fill,f_auto,fl_lossy,q_auto,w_1100/isnvdgblep1znnqo7in9.jpg"
// },
// {
//   "id": 2,
//   "title": "Jordan 4",
//   "price": 697,
//   "description": "Jordan 4",
//   "image": "https://footwearnews.com/wp-content/uploads/2020/10/JORDAN-MELO-M12-DC7770_160_E_PREM-e1603891838542.jpg?w=1024"
// },
// {
//   "id": 3,
//   "title": "Jordan 11 Concord",
//   "price": 700,
//   "description": "Jordan 11 Concord",
//   "image": "https://cdn.flightclub.com/750/TEMPLATE/805902/1.jpg"
// },
