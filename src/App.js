import React, { useEffect, useState } from "react";
import Home from "./pages/Home";
import axios from "axios";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

const App = () => {
  const [data, setdata] = useState([]);
  const [loading, setloading] = useState(true);

  const fetchdata = async () => {
    try {
      const res = await axios.get("https://fakestoreapi.com/products");
      //console.log(res.data);
      setdata(res.data);
      setloading(false);
    } catch (err) {
      setloading(false);
      console.log(err);
    }
  };

  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <>
      {loading ? (
        <Box sx={{ display: "flex",alignItems:"center",justifyContent:"center",marginTop:"300px" }}>
          <CircularProgress />
        </Box>
      ) : (
        <Home data={data} />
      )}
    </>
  );
};

export default App;
