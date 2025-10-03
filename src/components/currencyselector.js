import React from "react";

function CurrencySelector({ currencies, value, onChange }) {
  return (
    <label>
      convert to:{' '}
      <select value={value} onChange={onChange}>
        {currencies.map(currency => (
          <option key={currency.code} value={currency.code}>
            {currency.name} ({currency.code})
          </option>
        ))}
      </select>
    </label>
  );
}

export default CurrencySelector;
