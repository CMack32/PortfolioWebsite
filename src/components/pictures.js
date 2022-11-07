import { Typography } from '@material-ui/core';
import React from 'react';
import PictureList from '/imageList';

function Pictures() {
  return (
    <>
    <PictureList />
    <Typography >
      Test Page 3
      
    </Typography>
    console.info("Made it to test page.");
    </>
  )
}

export default Pictures
