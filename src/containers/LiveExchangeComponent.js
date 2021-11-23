import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { fetchRate } from "../api/fetchRate";

const LiveExchangeComponent = () => {
    const [rate, setRate] = useState({
      amount: 1,
      currencyCode: "usd",
      recipientCurrency: "usd",
    });

    const [exchange, setExchange] = useState({
      exRate: 0,
      recipientMoney: 0,
      currencySign: "&#36;",
      recipientCurrencySign: "&#36;",
    });

    const rates = useSelector((state) => state.allRates.rates);

    const currencyChange = (event) => {
      setRate((prevState) => {
        return { ...prevState, [event.target.name]: event.target.value };
      });
    };

    useEffect(() => {
      const getRate = async () => {
        const data = {
          from: rate.currencyCode,
          amount: rate.amount,
          to: rate.recipientCurrency,
        };
        const response = await fetchRate(data);
        const responseRate = response.data;
        setExchange((prevState) => {
          return {
            ...prevState,
            exRate: responseRate.exchangeRateReturned,
            recipientMoney: responseRate.amount,
            currencySign: responseRate.exchangeRateFrom[0].symbol,
            recipientCurrencySign: responseRate.exchangeRateTo[0].symbol,
          };
        });
      };

      getRate();
    }, [rate, rates]);

    return (
      <form className="block bg-white shadow-lg p-8 rounded-xl">
        <h3 className="text-base mb-4 text-center">Send Money</h3>

        <div>
          <label
            htmlFor="price"
            className="block text-sm font-medium text-gray-700"
          >
            How much do you want to send?
          </label>
          <div className="mt-1 relative rounded-md shadow-sm mb-4">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span className="text-gray-500 sm:text-sm">
                <div
                  dangerouslySetInnerHTML={{ __html: exchange.currencySign }}
                />
              </span>
            </div>
            <input
              type="text"
              name="amount"
              value={rate.amount}
              id="amount"
              className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-2 border-b-2 appearance-none focus:outline-none focus:border-indigo-600 border-gray-200 font-sans focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
              placeholder="0.00"
              onChange={currencyChange}
            />
            <div className="absolute inset-y-0 right-0 flex items-center">
              <select
                id="currencyCode"
                name="currencyCode"
                className="uppercase focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 pl-2 pr-7 bg-transparent text-gray-500 sm:text-sm rounded-md border-2"
                onChange={currencyChange}
              >
                {rates.map((rate) => (
                  <option key={rate.id} value={rate.currencyCode}>
                    {rate.currencyCode}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div>
          <div className="mt-1 relative rounded-md shadow-sm mb-0">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span className="text-gray-500 sm:text-sm">$</span>
            </div>
            <input
              type="text"
              name="serviceFees"
              id="serviceFees"
              className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-2 border-b-0 appearance-none focus:outline-none focus:border-indigo-600 border-gray-200 font-sans focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-t-md"
              placeholder="0.00"
              disabled
            />
            <div className="absolute inset-y-0 right-0 flex items-center">
              <input
                name="currencyCodeName"
                className="focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 pl-2 pr-7 bg-transparent text-gray-500 sm:text-sm rounded-t-md text-right"
                placeholder="Service Fees"
                disabled
              />
            </div>
          </div>
          <div className="mt-0 relative rounded-md shadow-sm mb-4">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span className="text-gray-500 sm:text-sm">
                <div
                  dangerouslySetInnerHTML={{
                    __html: exchange.recipientCurrencySign,
                  }}
                />
              </span>
            </div>
            <input
              type="text"
              value={exchange.exRate.toFixed(2)}
              id="exRate"
              className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-2 border-b-2 appearance-none focus:outline-none focus:border-indigo-600 border-gray-200 font-sans focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-b-md"
              placeholder="0.00"
              disabled
              readOnly
            />
            <div className="absolute inset-y-0 right-0 flex items-center">
              <input
                className="focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 pl-2 pr-7 bg-transparent text-gray-500 sm:text-sm rounded-b-md text-right"
                placeholder="Exchange Rate"
                disabled
                readOnly
              />
            </div>
          </div>
        </div>

        <div>
          <label
            htmlFor="price"
            className="block text-sm font-medium text-gray-700"
          >
            Recipient gets
          </label>
          <div className="mt-1 relative rounded-md shadow-sm mb-4">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span className="text-gray-500 sm:text-sm">
                <div
                  dangerouslySetInnerHTML={{
                    __html: exchange.recipientCurrencySign,
                  }}
                />
              </span>
            </div>
            <input
              type="text"
              value={exchange.recipientMoney}
              name="recipientMoney"
              id="recipientMoney"
              className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-2 border-b-2 appearance-none focus:outline-none focus:border-indigo-600 border-gray-200 font-sans focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
              placeholder="0.00"
              readOnly
            />
            <div className="absolute inset-y-0 right-0 flex items-center">
              <select
                name="recipientCurrency"
                className="uppercase focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 pl-2 pr-7 bg-transparent text-gray-500 sm:text-sm rounded-md border-2"
                onChange={currencyChange}
              >
                {rates.map((rate) => (
                  <option key={rate.id} value={rate.currencyCode}>
                    {rate.currencyCode}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <button className="rounded-xl bg-blue-600 mt-8 block text-center text-white px-4 py-2 text-sm">
          <div
            dangerouslySetInnerHTML={{
              __html: `Pay now (${exchange.recipientCurrencySign} ${exchange.recipientMoney})`,
            }}
          />
        </button>
      </form>
    );
};

export default LiveExchangeComponent;
