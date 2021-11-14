import React from "react";
import { itemsList } from "../data/items";
import BuyModal from "./BuyModal";
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

export const Cards = () => {
  const dispatch = useDispatch();
  const buyHandler = () => dispatch({type: "SHOW"});
  return (
    <div className="row row-cols-1 row-cols-md-3 g-4">
      {itemsList.map((item) => (
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
