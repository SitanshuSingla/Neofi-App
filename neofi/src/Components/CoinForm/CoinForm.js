import "./CoinForm.css";
import { Dropdown } from "primereact";
import { useEffect, useLayoutEffect, useState } from "react";

import "primereact/resources/themes/lara-light-indigo/theme.css"; // theme
import "primereact/resources/primereact.css"; // core css
import "primeicons/primeicons.css"; // icons
import "primeflex/primeflex.css";

export default function CoinForm(props) {
  const [selectedCountry, setSelectedCountry] = useState({ name: "eth" });
  let [currentCoin, setcurrentCoin] = useState();
  let [symbol, setSymbol] = useState(
    `https://assets.coincap.io/assets/icons/${selectedCountry.name}@2x.png`
  );
  let [investAmount, setInvestAmount] = useState();

  let optionsList = [];

  useLayoutEffect(() => {
    let ws = new WebSocket(
      `wss://stream.binance.com:9443/ws/${selectedCountry.name}usdt@trade`
    );
    ws.onmessage = (event) => {
      let obj = JSON.parse(event.data);
      setcurrentCoin(obj.p);
      setSymbol(
        `https://assets.coincap.io/assets/icons/${selectedCountry.name}@2x.png`
      );
    };
    return () => {
      ws.close();
    };
  }, [selectedCountry]);

  console.log(symbol);
  return (
    <div>
      <div className="symbol-container">
        <img src={symbol} />
      </div>
      <div className="form-wrapper">
        {props.coins.map((i, index) => {
          optionsList[index] = { name: i, code: i };
        })}
        <form>
          <div>
            {" "}
            <span className="currentCoin-price">
              <label>currentCoin Value</label>
              <label>
                Rs - {isNaN(currentCoin) ? "0" : (currentCoin * 80).toFixed(2)}
              </label>
            </span>
          </div>
          <Dropdown
            value={selectedCountry}
            onChange={(e) => setSelectedCountry(e.value)}
            options={optionsList}
            optionLabel="name"
            placeholder="Eth"
            filter
            className="custom-scrollbar"
          />

          <label style={{ marginLeft: "30px" }} className="form-label">
            Amount you want to invest
          </label>
          <input
            type="number"
            className="form-control "
            style={{
              backgroundColor: "transparent",
              borderColor: "gray !important"
            }}
            onInput={(e) => {
              setInvestAmount(e.target.value);
            }}
            placeholder="0.0"
          ></input>
          <label style={{ marginLeft: "30px" }} className="form-label">
            Estimate Number of coin you will invest
          </label>
          <input
            type="text"
            className="form-control amount"
            style={{ backgroundColor: " #13274f", borderColor: "transparent" }}
            placeholder="0.0"
            value={
              isNaN(investAmount / (currentCoin * 80))
                ? ""
                : (investAmount / (currentCoin * 80)).toFixed(4)
            }
            disabled
          ></input>
          <button className="btn btn-primary form-control buy-button">
            Buy
          </button>
        </form>
      </div>
    </div>
  );
}
