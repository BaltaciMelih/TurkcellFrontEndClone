import { Autocomplete, TextField } from '@mui/material';
import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

function AutoComplete() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get('https://northwind.vercel.app/api/products').then((res) => {
      let autoData = [];

      res.data.forEach((element) => {
        autoData.push({ label: element.name, name: element.id });
      });
      setCategories(autoData);
    });
  }, []);

  return (
    <>
      <Autocomplete
        renderInput={(params) => <TextField {...params} label='Category Names' />}
        disablePortal
        id='combo-box-demo'
        options={categories}
        sx={{ width: 380 }}
      />
    </>
  );
}

export default AutoComplete;
