import React from "react";
import Box from "@mui/material/Box";
import { Stack, Button } from "@mui/material";
import Rating from "react-rating";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const labels = {
  1: "Useless",
  2: "Poor",
  3: "Ok",
  4: "Good",
  5: "Excellent",
};

export default function EditReview() {
  const { state } = useLocation();
  console.log(state.review1);
  const [value, setValue] = React.useState(
    getKeyByValue(labels, state.review1.rating)
  );
  const [field1, setField1] = React.useState(state.review1.quality);
  const [field2, setField2] = React.useState(state.review1.userReview);
  const [f1error, setf1error] = React.useState(false);
  const [f2error, setf2error] = React.useState(false);
  const navigate = useNavigate();
  let userName = "Ashish";
  let reviewId = 11;
  let rating = String(labels[value]);
  let quality = field1;
  let userReview = field2;
  const HandleChange = (newValue) => {
    setValue(newValue);
  };
  function getKeyByValue(labels, value) {
    return Object.keys(labels).find((key) => labels[key] === value);
  }
  const HandleChangeF1 = (event) => {
    setField1(event.target.value);
  };
  const HandleChangeF2 = (event) => {
    setField2(event.target.value);
  };
  const HandleSubmit = (e) => {
    if (field1 !== "") {
      setf1error(false);
    } else setf1error(true);

    if (field2 !== "") {
      setf2error(false);
    } else setf2error(true);

    if (field1 !== "" && field2 !== "") {
      const review = { reviewId, userName, rating, quality, userReview };
      axios
        .post("http://localhost:8080/review/addReview", review)
        .then(function (response) {
          toast.success("Updated Successfully", {
            position: "top-right",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          setTimeout(() => {
            navigate("/view");
          }, 5000);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  return (
    <Box
      style={{
        backgroundColor: "whitesmoke",
        width: 900,
        height: 600,
        padding: 5,
        boxShadow:
          "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
      }}
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: 850 },
        "& > legend": { mt: 2 },
      }}
      noValidate
      autoComplete="off"
    >
      <Stack spacing={3}>
        <Typography
          component="legend"
          sx={{ padding: 1, fontSize: 16, color: "black" }}
        >
          How do you rate our product?
        </Typography>

        <Rating
          style={{ marginTop: -2 }}
          initialRating={value}
          onChange={HandleChange}
          emptySymbol={<StarBorderIcon sx={{ fontSize: "30px" }} />}
          fullSymbol={<StarIcon sx={{ color: "#FDCC0D", fontSize: "30px" }} />}
        />
        <span style={{ marginTop: -29, marginLeft: 180, fontWeight: 500 }}>
          {labels[value]}
        </span>

        <Typography sx={{ padding: 1, fontSize: 16, color: "black" }}>
          Do you like the quality of icecream?
        </Typography>
        <TextField
          id="outlined-multiline-flexible"
          value={field1}
          multiline
          maxRows={4}
          onChange={HandleChangeF1}
          error={f1error}
        />
        <Typography sx={{ padding: 1, fontSize: 16, color: "black" }}>
          What is your Feedback?
        </Typography>
        <TextField
          id="outlined-multiline-static"
          value={field2}
          multiline
          rows={4}
          onChange={HandleChangeF2}
          error={f2error}
        />
      </Stack>
      <Button
        variant="contained"
        style={{
         
          marginLeft: 8,
          marginTop: 8,
        }}
        onClick={HandleSubmit}
      >
        Update Review
      </Button>
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Box>
  );
}
