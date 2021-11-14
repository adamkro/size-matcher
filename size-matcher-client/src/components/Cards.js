import { React, useState, useEffect } from "react";
import { itemsList } from "../data/items";
import BuyModal from "./BuyModal";
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { connect } from 'react-redux';
import axios from "axios";

const Cards = (props) => {
  const {activeBrand, activeProduct} = props;
  const dispatch = useDispatch();
  const buyHandler = () => dispatch({type: "SHOW"});
  const [items, setItems] = useState([]);

  useEffect(() => {
    (async () => {
      // const fetchedItems = await axios.get(`http://localhost:5000/lists`);
      const fetchedItems = itemsList;
      setItems(fetchedItems);
    })();
  }, [activeBrand, activeProduct]);


  return (
    <div className="row row-cols-1 row-cols-md-3 g-4">
      {items.map((item) => (
        <div key={item.name} className="col">
          <div className="card">
            <img src={item.imgUrl} className="card-img-top" alt={item.name} />
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
              <p className="card-text">bla bla bla</p>
              <Button onClick={buyHandler} >Buy</Button>
            </div>
          </div>
        </div>
      ))}
      <BuyModal />
    </div>
  );
};

function mapStateToProps(state) {
  return {
    activeProduct: state.product,
    activeBrand: state.brand
  };
}

export default connect(mapStateToProps)(Cards);
