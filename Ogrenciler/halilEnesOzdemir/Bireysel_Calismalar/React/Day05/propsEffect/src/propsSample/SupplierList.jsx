import React from 'react';
import { suppliers } from '../../../data/supplier';

function SupplierList() {
  return (
    <>
      {suppliers &&
        suppliers.map((item, key) => {
          return (
            <div>
              <p>${item.companyName}</p>
              <p>${item.contactName}</p>
              <p>${item.contactTitle}</p>
              <button>Remove</button>
            </div>
          );
        })}
    </>
  );
}

export default SupplierList;
