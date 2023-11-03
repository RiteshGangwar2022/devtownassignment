import { React, useState } from "react";
import Products from "./Products";
import Pagination from "@mui/material/Pagination";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";


const maincompo = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "3px",
  padding: "3px",

  '@media screen and (min-width: 700px)': {
    gridTemplateColumns: "repeat(2, 1fr)", // 2 columns
  },

  '@media (max-width: 480px)': {
    gridTemplateColumns: "repeat(1, 1fr)", // 1 column (single column layout)
  },
};

const bottom = {
  position: "absolute",
  bottom: "0",
  left: "600px",
  margin: "5px",
};

const header = {
  display: "flex",
  flexDirection: "row",
  height: "50px",
  background: "#eee",
};



const Home = ({ data }) => {

  const [page, setPage] = useState(1);
  const [sortedData, setSortedData] = useState(data);
  

  const productsPerPage = 6;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const startIdx = (page - 1) * productsPerPage;
  const endIdx = page * productsPerPage;

  const handlechangeprice = (value) => {
    if (value === "Increasing") {
      const sortedAscending = [...sortedData].sort((a, b) => a.price - b.price);
      setSortedData(sortedAscending);
    } else if (value === "Decreasing") {
      const sortedDescending = [...sortedData].sort(
        (a, b) => b.price - a.price
      );
      setSortedData(sortedDescending);
    }
  };

  const handlechangecategory = (value) => {
    if (value === "all") {
      setSortedData(data);
    } else if (value !== "all") {
      const filteredProducts = data.filter(
        (product) => product.category === value
      );
      setSortedData(filteredProducts);
    }
  };

  return (
    <div>
      <div style={header}>
        <Box style={{ margin: "0px 50px" }}>
          <FormControl style={{ height: "10px", width: "150px" }}>
            <InputLabel id="demo-simple-select-label">Sort by Price</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Sort By Price"
              style={{ height: "50px", width: "150px" }}
              onChange={(e) => handlechangeprice(e.target.value)}
            >
              <MenuItem value={"Increasing"}>Ascending</MenuItem>
              <MenuItem value={"Decreasing"}>Descending</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box>
          <FormControl>
            <InputLabel id="demo-simple-select-label">
              Filter by Category
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Sort By Category"
              style={{ height: "50px", width: "180px" }}
              onChange={(e) => handlechangecategory(e.target.value)}
            >
              <MenuItem value={"all"}>ALL</MenuItem>
              <MenuItem value={"men's clothing"}>Men's clothing</MenuItem>
              <MenuItem value={"women's clothing"}>Women's clothing</MenuItem>
              <MenuItem value={"electronics"}>Electronics</MenuItem>
              <MenuItem value={"jewelery"}>Jewelery</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </div>
      <div style={maincompo}>
        {sortedData?.slice(startIdx, endIdx).map((val, index) => (
          <Products key={index} val={val} />
        ))}
      </div>
      <div style={bottom}>
        <Pagination
          count={Math.ceil(sortedData.length / productsPerPage)}
          page={page}
          onChange={handleChangePage}
          color="primary"
        />
      </div>
    </div>
  );
};

export default Home;
