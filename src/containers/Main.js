import React from "react";
import LiveExchangeComponent from "./LiveExchangeComponent";
import RateComponent from "./RateComponent";
import Head from "./partials/Head";

const Main = () => {
  return (
    <div className="flex-grow container mx-auto sm:px-4 pt-6 pb-8">
      <Head />
      <div className="flex flex-wrap -mx-4">
        <div className="w-full mb-6 lg:mb-0 lg:w-1/2 px-4 flex flex-col">
          <div className="flex-grow flex flex-col bg-white border-t border-b sm:rounded sm:border shadow overflow-hidden">
            <div className="border-b">
              <div className="flex justify-between px-6 -mb-px">
                <h3 className="text-blue-dark py-4 font-normal text-lg">
                  Exchange Rates
                </h3>
                <div className="flex">
                  <button
                    type="button"
                    className="appearance-none py-4 text-blue-dark border-b border-blue-dark mr-3"
                  >
                    List
                  </button>
                  <button
                    type="button"
                    className="appearance-none py-4 text-grey-dark border-b border-transparent hover:border-grey-dark"
                  >
                    Chart
                  </button>
                </div>
              </div>
            </div>
            <RateComponent />
          </div>
        </div>
        <div className="w-full lg:w-1/2 px-4">
          <div className="bg-white border-t border-b sm:rounded sm:border shadow">
            <div className="border-b">
              <div className="flex justify-between px-6 -mb-px">
                <h3 className="text-blue-dark py-4 font-normal text-lg">
                  Live Exchange
                </h3>
              </div>
            </div>
            <div>
              <div className="px-6 py-4">
                <div className="py-8">
                  <div className="mb-4">
                    <LiveExchangeComponent/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
