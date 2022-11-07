import React from "react";
import { ImageList, ImageListItem } from "@material-ui/core";
import homepage1 from "../img/portfolio1.png";
import homepage2 from "../img/portfolio2.png";
import homepage3 from "../img/portfolio3.png";

function PictureList() {
  return (
    <ImageList sx={{ width: 600, height: 650 }} cols={3} rowHeight={400}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=100&h=100&fit=crop&auto=format`}
            srcSet={`${item.img}?w=200&h=200&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: homepage1,
    title: "Nature",
  },
  {
    img: homepage2,
    title: "Keyboard 1",
  },
  {
    img: homepage3,
    title: "Keyboard 2",
  },
];

export default PictureList;
