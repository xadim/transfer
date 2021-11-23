import React from "react";
import { useSelector } from "react-redux";

const RateComponent = () => {
    const rates = useSelector((state) => state.allRates.rates);
    const ratesRenderList = rates.map((product) => {
    const { currencyCode, id, symbol, eqInDollar } = product;
        return (
          <div
            className="flex-grow flex px-6 py-6 text-grey-darker items-center border-b -mx-4"
            key={id}
          >
            <div className="w-2/5 xl:w-1/4 px-4 flex items-center">
              <div className="rounded-full bg-orange inline-flex mr-3">
                <div className="currency-flag currency-flag-{currencyCode}"></div>
              </div>
              <span className="text-lg uppercase">
                <div
                  dangerouslySetInnerHTML={{
                    __html: `${symbol} &#8594; $`,
                  }}
                />
              </span>
            </div>
            <div className="hidden md:flex lg:hidden xl:flex w-1/4 px-4 items-center">
              <div className="bg-blue h-2 rounded-full flex-grow mr-2"></div>
              {id}
            </div>
            <div className="flex w-3/5 md:w/12">
              <div className="w-1/2 px-4">
                <div className="text-right uppercase">{currencyCode}</div>
              </div>
              <div className="w-1/2 px-4">
                <div
                  className="text-right text-grey uppercase"
                  dangerouslySetInnerHTML={{
                    __html: `${symbol} ${eqInDollar.toFixed(3)}`,
                  }}
                ></div>
              </div>
            </div>
          </div>
        );
    })
    return(
        <>{ratesRenderList}</>
    )
};

export default RateComponent;
