import { useState, memo, useCallback } from "react";
import "./styles.css";

export default function App() {
    const [buyData, setBuyData] = useState([]);
    const [sellData, setSellData] = useState([]);

    const handleClick = useCallback(
        (type) => () => {
            const saleInfo = {
                id: Math.random(),
                size: Math.random(),
                price: 37000 + Math.random() * 2000
            };
            if (type === "buy") {
                setBuyData((b) => [saleInfo, ...b]);
            } else {
                setSellData((s) => [saleInfo, ...s]);
            }
        },
        []
    );

    return (
        <div className="App">
            <div className="container">
                <div className="buttonGroup">
                    <div className="button" onClick={handleClick("buy")}>
                        Buy
                    </div>
                    <div className="button sellButton" onClick={handleClick("sell")}>
                        Sell
                    </div>
                </div>
                <div>
                    <OrderList data={buyData} type={"buy"} />
                    <OrderList data={sellData} type={"sell"} />
                </div>
                <OrderList />
            </div>
        </div>
    );
}

const OrderRow = memo(({ rowInfo, type }) => {
    const { id, price, size } = rowInfo;
    const conditionalStyle =
        type === "sell"
            ? { color: "rgb(250,103,45)" }
            : { color: "rgb(45,175,52)" };
    return (
        <tr key={id}>
            <td>{size.toFixed(4)}</td>
            <td style={conditionalStyle}>{price.toFixed(2)}</td>
        </tr>
    );
});

const OrderList = memo(({ data = [], type }) => {
    if (!data || data.length === 0) return null;
    const items = data.map((sale) => {
        return <OrderRow rowInfo={sale} type={type} />;
    });
    return (
        <table>
            <tbody>{items}</tbody>
        </table>
    );
});

// https://i.ibb.co/W6GbZFR/interview-example.gif

/**

P1 Requirements:
- Clicking Buy should create a new row for Bids (buys).
- Clicking Sell should create a new row for Asks (sells).
- For the size, generate a random number between 0 to 1.
- For Price, generate a random number around 37000.
---
Example order generator object:
{
  id: Math.random(),
  size: Math.random(),
  price: 37000 + Math.random() * 2000
}

P2 Requirements:
UI should look close to the example. You will not need to use theme library like Material UI or Bootstrap.
- Green = rgb(45,175,52)
- Orange = rgb(250,103,45)
- You can use pure black and white for the other colors.

P3 Requirements:
- When a new row is created, fade it in from an opacity of zero to a fully visible opacity of one. Over 1 second.
- Sort by Price.
*/

/*
  components
    OrderTable
      screen.js
      index.js
      screen.css

  feature
    featureName
      screenName
        screen.js
        index.js
        screen.css

  Networking
    module.network.js
    API.js //get, post,... Error Handling


    Jest, Mocha(unitTesting businessLogic)
    Enzyme, Cypress (UI Testing, Integration Testing)
*/
