import React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import { deepOrange, deepPurple } from '@mui/material/colors';

function DataDisplay() {
  return (
    <>
      <Stack spacing={2} direction='row'>
        <Button variant='text'>Text</Button>
        <Button variant='contained'>Contained</Button>
        <Button variant='outlined'>Outlined</Button>
      </Stack>
      <Stack spacing={2} m={2} p={2} direction='row'>
        <Avatar
          alt='Hayko Cepkin'
          src='https://i2.hbrcdn.com/haber/2022/11/15/hayko-cepkin-nostalji-yolculuguna-cikti-genclik-15430614_2497_m.jpg'
        />
        <Avatar sx={{ bgcolor: deepOrange[500] }}>HE</Avatar>
        <Avatar sx={{ bgcolor: deepPurple[500] }}>TR</Avatar>
      </Stack>
    </>
  );
}

export default DataDisplay;
