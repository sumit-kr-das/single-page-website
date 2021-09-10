import React, { useState } from "react";
import axios from "axios";
import Cards from "./components/Card";
import {
  LinearProgress,
  Box,
  makeStyles,
  AppBar,
  Toolbar,
  Typography,
  Button,
} from "@material-ui/core";
const url = "https://reqres.in/api/users?page=1";

const useStyles = makeStyles({
  container: {
    margin: "2rem 20rem",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  align: {
    display: "flex",
    justifyContent: "space-around",
    backgroundColor: "#2874F0",
  },
  noData: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
  },
});

const App = () => {
  const classes = useStyles();
  const [usrData, setusrData] = useState([]);
  const [load, setLoad] = useState(true);
  const getData = async () => {
    try {
      await axios.get(url).then((res) => {
        // console.log(res.data.data);
        setusrData(res.data.data);
        setLoad(false);
      });
    } catch (err) {
      console.log(`Error from ${err.message}`);
    }
  };

  const getUserData = () => {
    getData();
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar className={classes.align}>
          <Typography variant="h6" className={classes.title}>
            LGM Employee Details
          </Typography>
          <Button
            onClick={() => getUserData()}
            variant="contained"
            style={{ backgroundColor: "#4CAF50", color: "#ffffff" }}
          >
            Get Users
          </Button>
        </Toolbar>
      </AppBar>

      {load ? (
        <Box>
          <LinearProgress />
          <div className={classes.noData}>
            <img style={{ width: "100%" }} src="/imgs/no Data.jpg" alt="" />
          </div>
        </Box>
      ) : (
        <Box className={classes.container}>
          {usrData.map((indx) => (
            <Cards
              key={indx.id}
              firstName={indx.first_name}
              lastName={indx.last_name}
              email={indx.email}
              photo={indx.avatar}
            />
          ))}
        </Box>
      )}
    </>
  );
};

export default App;
