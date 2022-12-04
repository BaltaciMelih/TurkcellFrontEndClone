import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';

function ProductTable() {
  const columns = [
    { field: 'id', headerName: 'Product Id', width: 150, editable: true },
    { field: 'name', headerName: 'Product Name', width: 150, editable: true },
    { field: 'unitPrice', headerName: 'Price', width: 150, editable: true },
    { field: 'unitsInStock', headerName: 'Stock', width: 150, editable: true },
  ];

  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://northwind.vercel.app/api/products').then((res) => {
      console.log(res);
      setProducts(res.data);
    });
  }, []);

  return (
    <>
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid rows={products} columns={columns} rowsPerPageOptions={[5]} pageSize={5} checkboxSelection />
      </div>
    </>
  );
}

export default ProductTable;
