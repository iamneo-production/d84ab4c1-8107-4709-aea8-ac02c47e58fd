import React from "react";
import Box from "@mui/material/Box";
import { Stack, Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import "react-toastify/dist/ReactToastify.css";

export default function View() {
  const [review, setReview] = React.useState([]);
  console.log(review);
  const navigate = useNavigate();
  const HandleDelete = (reviewId) => {
    axios.delete(`http://localhost:8080/review/deleteReview/${reviewId}`).then(() => {
      toast.success("Deleted Successfully", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      setTimeout(() => {
        navigate("/review");
      }, 5000);
    });
  };

  const HandleEdit = (reviewId, item) => {
    axios
      .put(`http://localhost:8080/review/editReview/${reviewId}`, item)
      .then(function (response) {
        console.log(item);

        navigate("/editreview", { state: { review1: item } });
      });
  };
  React.useEffect(() => {
    axios.get("http://localhost:8080/review/Review").then((response) => {
      setReview(response.data);

      // console.log(response.data);
    });
  }, []);

  return (
    <div>
      {review.map((item, i) => (
        <Box
          key={i}
          style={{
            alignItems: "start",
            backgroundColor: "whitesmoke",
            width: 600,
            height: 400,
            padding: 5,
            marginTop: 150,
            marginLeft: 650,
            boxShadow:
              "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
          }}
        >
          <Stack spacing={5} sx={{ mt: 4, ml: 4 }}>
            <Typography style={{ color: "black" }}>
              How do you rate our product : <b>{item.rating}</b>
            </Typography>

            <Typography style={{ color: "black" }}>
              Do you like the quality of icecream? :<b>{item.quality}</b>
            </Typography>

            <Typography style={{ color: "black" }}>
              What is your Feedback? : <b>{item.userReview} </b>
            </Typography>
          </Stack>
          <Button
            variant="contained"
            endIcon={<EditIcon />}
            style={{
              marginLeft: 35,
              marginTop: 50,
            }}
            onClick={() => {
              HandleEdit(item.reviewId, item);
            }}
          >
            Edit
          </Button>
          <Button
            color="secondary"
            variant="contained"
            endIcon={<DeleteIcon />}
            style={{
              marginTop: 50,
              marginLeft: 15,
            }}
            onClick={() => {
              HandleDelete(item.reviewId);
            }}
          >
            Delete
          </Button>
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </Box>
      ))}
    </div>
  );
}
