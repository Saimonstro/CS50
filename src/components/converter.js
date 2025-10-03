import React, { useState, useEffect } from "react";
import CurrencySelector from "./currencyselector";

// supported currencies
const CURRENCIES = [
  { code: "BRL", name: "brazilian real" },
  { code: "EUR", name: "euro" },
  { code: "GBP", name: "british pound" },
  { code: "JPY", name: "japanese yen" },
  { code: "ARS", name: "argentine peso" }
];

// currency converter component
function Converter() {
  const [amount, setAmount] = useState("");
  const [targetCurrency, setTargetCurrency] = useState("BRL");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setResult(null);
    setError("");
  }, [amount, targetCurrency]);

  // function to fetch and convert
  const convertCurrency = async () => {
    if (!amount || isNaN(amount)) {
      setError("enter a valid amount");
      return;
    }
    setLoading(true);
    setError("");
    setResult(null);
    try {
      const url = `https://api.frankfurter.app/latest?amount=${amount}&from=USD&to=${targetCurrency}`;
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error("api request failed");
      }
      const data = await res.json();
      if (data.rates && data.rates[targetCurrency]) {
        setResult(data.rates[targetCurrency]);
      } else {
        setError("failed to fetch exchange rate");
      }
    } catch (err) {
      setError("failed to fetch exchange rate");
    }
    setLoading(false);
  };

  return (
    <div className="converter-container">
      <label>
        USD amount:{' '}
        <input
          type="number"
          placeholder="amount in USD"
          value={amount}
          onChange={e => setAmount(e.target.value)}
          min="0"
        />
      </label>
      <CurrencySelector
        currencies={CURRENCIES}
        value={targetCurrency}
        onChange={e => setTargetCurrency(e.target.value)}
      />
      <button onClick={convertCurrency} disabled={loading || !amount}>
        convert
      </button>
      {loading && <p>converting...</p>}
      {error && <p className="error">{error}</p>}
      {result && (
        <div className="result">
          <p>
            {amount} USD = {result.toLocaleString(undefined, { maximumFractionDigits: 4 })} {targetCurrency}
          </p>
        </div>
      )}
    </div>
  );
}

export default Converter;
