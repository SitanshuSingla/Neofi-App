import { useEffect, useState } from "react";
import "./Home.css";
import Header from "../../Components/Navbar/Header";
import CoinForm from "../../Components/CoinForm/CoinForm";

export default function Home() {
  let [coins, setCoins] = useState([]);
  useEffect(() => {
    fetch(`https://api.coingecko.com/api/v3/simple/supported_vs_currencies`)
      .then((res) => res.json())
      .then((res) => {
        setCoins(res);
      });
  }, []);
  return (
    <div className="container-wrapper">
      <Header />

      <div className="CoinForm-wrapper">
        {" "}
        <CoinForm coins={coins} />
      </div>
    </div>
  );
}
