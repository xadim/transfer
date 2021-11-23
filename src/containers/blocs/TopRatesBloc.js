import React from "react";
import { useSelector } from "react-redux";

const TopRatesBloc = (rates) => {
    const topRates = useSelector((state) =>
        state.allRates.rates.slice(1, 4)
    );

  const returnedRates = topRates.map((rate) => {
    const { exchangeRate, currencyCode, id, symbol } = rate;
    return (
      <div className="w-1/3 text-center py-8" key={id}>
        <div className="border-r">
          <div className="text-grey-darker mb-2">
            <span className="text-3xl align-top uppercase">{currencyCode}</span>
            <span
              className="text-5xl"
              dangerouslySetInnerHTML={{
                __html: `${symbol} ${exchangeRate.toFixed(3)}`,
              }}
            />
          </div>
          <div className="text-sm uppercase text-grey tracking-wide">
            {currencyCode} Price
          </div>
        </div>
      </div>
    );
  });

  return <>{returnedRates}</>
};

export default TopRatesBloc;
