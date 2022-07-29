import React from 'react'
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartTotal } from '../../../redux/cart/cart.selector';
const Order = ({cartTotal}) => {
  return (
    <>
          <h3 className="place-total">Your Total: <span style={{marginLeft:"20px"}}>US ${cartTotal}</span></h3>
          <h4>Payment information</h4>
    </>
  )
}
const mapStateToProps = createStructuredSelector({
  cartTotal: selectCartTotal,
});

export default connect(mapStateToProps) (Order);