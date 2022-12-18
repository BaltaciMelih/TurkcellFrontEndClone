import React from "react";
import Features from "./Features";

const Devices = () => {
  return (
    <div className="banner-c device-banner position-relative">
      <Features />
      <div>
        <h2 className="text-center">
          On all your screens at home and on the go
        </h2>
      </div>
      <div className="d-flex flex-wrap m-auto justify-content-center gap-3">
        <div className="devices d-flex">
          <img src="../assets/icons-mac.png" alt="" />
          <p>Available on Mac</p>
        </div>
        <div className="devices d-flex justify-content-center">
          <img src="../assets/icons-pc.png" alt="" />
          <p>Available on Windows</p>
        </div>
        <div className="devices d-flex">
          <img src="../assets/icons-android.png" alt="" />
          <p>Available on Android</p>
        </div>
      </div>
    </div>
  );
};

export default Devices;
