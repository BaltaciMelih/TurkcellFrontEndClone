import React from "react";
import Card from "./Card";

const Membership = () => {
  return (
    <div className="membership-banner" id="membership-banner">
      <div className="membership-banner-content m-auto">
        <h2 className="text-center fw-bold text-white">
          Lorem ipsum dolor sit amet consectetur
        </h2>
        <div className="payment-card-group d-flex flex-wrap gap-3 justify-content-center">
          <Card cardColor="dark" cardHeader="BASIC" cardPayment="Free" />
          <Card
            cardColor="primary"
            cardHeader="STANDARD"
            cardPayment="15$/month"
          />
          <Card cardColor="dark" cardHeader="PREMIUM" cardPayment="30$/month" />
        </div>
      </div>
    </div>
  );
};

export default Membership;
