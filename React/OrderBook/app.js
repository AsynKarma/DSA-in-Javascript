import { useState } from "react";
import "./styles.css";

let orderId = 0;

export default function App() {
    const [buyData, setBuyData] = useState([]);
    const [sellData, setSellData] = useState([]);

    const handleOnClick = (type) => () => {
        const date = new Date().toLocaleString();
        const price = Math.floor(Math.random(1) * 1000 * 100) / 100;
        const amount = Math.floor(Math.random(1) * 100 * 100) / 100;
        if (type === "buy") {
            // Buy
            setBuyData([
                ...buyData,
                {
                    orderId: orderId + 1,
                    date,
                    price,
                    amount
                }
            ]);
        } else {
            // Sell
            setSellData([
                ...sellData,
                {
                    orderId: orderId + 1,
                    date,
                    price,
                    amount
                }
            ]);
        }
        orderId = orderId + 1;
    };

    return (
        <div className="App">
            <h1>Order Book</h1>
            <div className="header">
                <div className="headerTitle">BTC</div>
                <div className="buttonGroup">
                    <button onClick={handleOnClick("buy")} className="button">
                        Buy
                    </button>
                    <button onClick={handleOnClick("sell")} className="button">
                        Sell
                    </button>
                </div>
            </div>
            <div className="tableContainer">
                <OrderBookList data={buyData} />
                <OrderBookList data={sellData} />
            </div>
        </div>
    );
}

const OrderRow = function ({ rowInfo }) {
    if (!rowInfo) return null;
    const values = Object.values(rowInfo);
    return (
        <tr>
            {values.map((value) => (
                <td key={value}>{value}</td>
            ))}
        </tr>
    );
};
const OrderRows = function ({ data }) {
    if (!data) return null;
    return (
        <>
            {data.map((order) => {
                return <OrderRow rowInfo={order} key={`Child-${order.orderId}`} />;
            })}
        </>
    );
};

const OrderBookList = function ({ data = [] }) {
    if (!data || data.length === 0) {
        return null;
    }
    return (
        <table>
            <thead>
                <tr>
                    {Object.keys(data[0]).map((item) => (
                        <td key={item}>{item}</td>
                    ))}
                </tr>
            </thead>
            <tbody>
                <OrderRows data={data} />
            </tbody>
        </table>
    );
};
