import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { server } from "../main";
import { Box, Radio, RadioGroup } from "@chakra-ui/react";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import {
  Container,
  HStack,
  Button,
} from "@chakra-ui/react";
import CoinCard from "./CoinCard";
import Loader from "./Loader";
import ErrorComponent from "./ErrorComponent";

const Coins = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currency, setCurrency] = useState("inr");
  const [page, setPage] = useState(1);

  const currencySymbol =
    currency === "inr" ? "₹" : currency === "eur" ? "€" : "$";

  // console.log(coins);

  useEffect(() => {
    const fetchCoins = async () => {
      setLoading(true);
      setError(null);
      try {
        const { data } = await axios.get(
          `${server}/coins/markets?vs_currency=${currency}&page=${page} `
        );
        setLoading(false);
        setCoins(data);
      } catch (error) {
        setLoading(false);
        setError("Error occured while fetching data");
      }
    };
    fetchCoins();
  }, [currency, page]);

  // if (error) return <ErrorComponent message={"Sorry could not find"} />;
  // if (!coins.length || error)
  //   return <ErrorComponent message={"Sorry could not find"} />;

  function prev() {
    setPage((prevPage) => prevPage - 1);
    setLoading(true);
  }

  function next() {
    setPage((prevPage) => prevPage + 1);
    setLoading(true);
  }

  return (
    <Container maxW={"container.xl"}>
      {loading ? (
        <Loader />
      ) : error ? (
        <ErrorComponent message={error} />
      ) : coins.length > 0 ? (
        <>
          <RadioGroup value={currency} onChange={setCurrency} p={"8"}>
            <HStack spacing={"4"}>
              <Radio value={"inr"}>₹INR</Radio>
              <Radio value={"eur"}>€EUR</Radio>
              <Radio value={"usd"}>$USD</Radio>
            </HStack>
          </RadioGroup>
          <HStack wrap={"wrap"} justifyContent={"space-evenly"}>
            {coins.map((coin) => (
              <CoinCard
                key={coin.id}
                id={coin.id}
                name={coin.name}
                price={coin.current_price}
                img={coin.image}
                symbol={coin.symbol}
                currencySymbol={currencySymbol}
                rank={coin.market_cap_rank}
              />
            ))}
          </HStack>
          <HStack justifyContent={"space-between"} p={5}>
            {page > 1 ? (
              <Button
                isDisabled={page <= 1}
                bgColor={"blackAlpha.900"}
                color={"white"}
                leftIcon={<BsArrowLeft />}
                onClick={() => prev()}
              >
                Previous {page - 1}
              </Button>
            ) : (
              ""
            )}
            <Box marginLeft={"auto"}>
              <Button
                bgColor={"blackAlpha.900"}
                color={"white"}
                rightIcon={<BsArrowRight />}
                onClick={() => next()}
              >
                Next {page + 1}
              </Button>
            </Box>
          </HStack>
        </>
      ) : (
        <>
          <ErrorComponent error={"No more data available"} />
          <Box>
            <Button
              position={"fixed"}
              top={"90%"}
              left={"86%"}
              transform={"translateX(-50%)"}
              isDisabled={page <= 1}
              bgColor={"blackAlpha.900"}
              color={"white"}
              leftIcon={<BsArrowLeft />}
              onClick={() => prev()}
            >
              Go Back {page - 1}
            </Button>{" "}
          </Box>
        </>
      )}
    </Container>
  );
};

export default Coins;
