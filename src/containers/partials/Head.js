import React from "react";
import TopRatesBloc from "../blocs/TopRatesBloc";

const Head = () => {
  return (
    <div className="bg-white border-t border-b sm:border-l sm:border-r sm:rounded shadow mb-6">
      <div className="border-b px-6">
        <div className="flex justify-between -mb-px">
          <div className="lg:hidden text-blue-dark py-4 text-lg">
            Price Charts
          </div>
          <div className="hidden lg:flex">
            <button
              type="button"
              className="appearance-none py-4 text-blue-dark border-b border-blue-dark mr-6"
            >
              USA &middot; USD$1.00
            </button>
            <button
              type="button"
              className="appearance-none py-4 text-grey-dark border-b border-transparent hover:border-grey-dark mr-6"
            >
              XOF &middot; CFA$884.80
            </button>
          </div>
          <div className="flex text-sm">
            <button
              type="button"
              className="appearance-none py-4 text-grey-dark border-b border-transparent hover:border-grey-dark mr-3"
            >
              1M
            </button>
            <button
              type="button"
              className="appearance-none py-4 text-grey-dark border-b border-transparent hover:border-grey-dark mr-3"
            >
              1D
            </button>
            <button
              type="button"
              className="appearance-none py-4 text-grey-dark border-b border-transparent hover:border-grey-dark mr-3"
            >
              1W
            </button>
            <button
              type="button"
              className="appearance-none py-4 text-blue-dark border-b border-blue-dark mr-3"
            >
              1M
            </button>
            <button
              type="button"
              className="appearance-none py-4 text-grey-dark border-b border-transparent hover:border-grey-dark mr-3"
            >
              1Y
            </button>
            <button
              type="button"
              className="appearance-none py-4 text-grey-dark border-b border-transparent hover:border-grey-dark"
            >
              ALL
            </button>
          </div>
        </div>
      </div>
      <div className="flex items-center px-6 lg:hidden">
        <div className="flex-grow flex-no-shrink py-6">
          <div className="text-grey-darker mb-2">
            <span className="text-3xl align-top">CA$</span>
            <span className="text-5xl">21,404</span>
            <span className="text-3xl align-top">.74</span>
          </div>
          <div className="text-green-light text-sm">
            &uarr; CA$12,955.35 (154.16%)
          </div>
        </div>
        <div className="flex-shrink w-32 inline-block relative">
          <select className="block appearance-none w-full bg-white border border-grey-light px-4 py-2 pr-8 rounded">
            <option>BTC</option>
            <option>ETH</option>
            <option>LTC</option>
          </select>
          <div className="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey">
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>
      </div>
      <div className="hidden lg:flex">
        <TopRatesBloc />
      </div>
    </div>
  );
};

export default Head;
