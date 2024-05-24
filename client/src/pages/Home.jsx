import React from "react";
import { Box, Stack } from "@chakra-ui/react";
import Card from "../components/Card";
import axios from "axios";
const Home = () => {
  const checkoutHandler = async (amount) => {
    const res = await axios.post(`/api/v1/checkout`, { amount });
    if (res && res.data?.success) {
      console.log(res.data);
      const { data } = await axios.get("/api/v1/get-key-id");
      const key = data.key_id;
      var options = {
        key: key, // Enter the Key ID generated from the Dashboard
        amount: res.data.order.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        currency: res.data.order.currency,
        name: "Neel Parekh",
        description: "Test Transaction",
        image: "https://example.com/your_logo",
        order_id: res.data.order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        callback_url: `/api/v1/payment-verification`,
        prefill: {
          name: "Virat KOhli",
          email: "virat.kohli@example.com",
          contact: "9000090000",
        },
        notes: {
          address: "Razorpay Corporate Office",
        },
        theme: {
          color: "#3399cc",
        },
      };
      var rzp1 = new Razorpay(options);
      rzp1.open();
      // document.getElementById('rzp-button1').onclick = function(e){
      //     e.preventDefault();
      // }
    }
  };
  return (
    <>
      <Box>
        <Stack
          height={"100vh"}
          alignItems={"center"}
          justifyContent={"center"}
          direction={["column", "row"]}
        >
          <Card
            amount={5000}
            img={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRterG707j3s5TCme2DaKEWzuAU1sr678oZGg&s"
            }
            checkoutHandler={checkoutHandler}
          />
          <Card
            amount={3000}
            img={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRterG707j3s5TCme2DaKEWzuAU1sr678oZGg&s"
            }
            checkoutHandler={checkoutHandler}
          />
        </Stack>
      </Box>
    </>
  );
};

export default Home;
