import React from "react";
import { connect } from "react-redux";
import { ListGroup } from "react-bootstrap";

const MySizes = (props) => {
  const { sizes } = props;
  let cnt = 0;
  const mySizesItems = sizes.map((size) => (
    <ListGroup.Item key={cnt++}>{size}</ListGroup.Item>
  ));
  return <ListGroup className='m-3'>{mySizesItems} </ListGroup>;
};

function mapStateToProps(state) {
  return {
    sizes: state.userSizes,
  };
}

export default connect(mapStateToProps)(MySizes);
