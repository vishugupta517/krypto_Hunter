import { Box, Image } from "@chakra-ui/react";
import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <Box
      bgColor={"blackAlpha.900"}
      w={"full"}
      h={"85vh"}
      bgImage={
        "url(https://static.vecteezy.com/system/resources/previews/003/462/117/non_2x/hand-holding-golden-bitcoin-coin-free-photo.jpg)"
      }
      bgSize="cover"
    >
      <motion.div
        style={{
          height: "80vh",
        }}
        animate={{
          translateY: "20px",
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <Image
          w={"full"}
          h={"full"}
          objectFit={"cover"}
          src={
            "https://static.vecteezy.com/system/resources/previews/002/991/022/large_2x/business-bitcoin-with-graph-chart-free-photo.JPG"
          }
          opacity={"0.2"}
        />
      </motion.div>
    </Box>
  );
};

export default Home;
