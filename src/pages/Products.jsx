import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Description from "./Description";

const cardstyle = {
  margin: "5px 3px",
  border: "1px solid black",
  height: "290px",
  width: "430px",
  textAlign: "center",
  cursor: "pointer",
  background: "#eeee",
  boxShadow:
    "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
};

const Products = ({ index, val }) => {
  return (
    <>
      <Card style={cardstyle} key={index}>
        <CardHeader
          title={val.title.slice(0, 18) + "..."}
          subheader={`Rs.${val.price}`}
        />
        <CardMedia
          component="img"
          image={val.image}
          alt="Paella dish"
          style={{ height: "115px", width: "430px", borderRadius: "10px" }}
        />
        <CardContent style={{ overflow: "scroll-y" }}>
          <Typography variant="body1" color="text.secondary">
            {val.description.slice(0, 40) + " ..."}
          </Typography>
        </CardContent>
        <Description val={val}>
          <Button
            variant="contained"
            style={{ position: "relative", bottom: "10px", borderRadius: "6px" }}
          >
            Show Full Desc..
          </Button>
        </Description>
      </Card>
    </>
  );
};

export default Products;
