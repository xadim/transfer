import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
      <div className="bg-white border-t">
        <div className="container mx-auto px-4">
          <div className="md:flex justify-between items-center text-sm">
            <div className="text-center md:text-left py-3 md:py-4 border-b md:border-b-0">
              <Link to="#" className="no-underline text-grey-dark mr-4">
                Home
              </Link>
              <Link to="#" className="no-underline text-grey-dark mr-4">
                Careers
              </Link>
              <Link to="#" className="no-underline text-grey-dark">
                Legal &amp; Privacy
              </Link>
            </div>
            <div className="md:flex md:flex-row-reverse items-center py-4">
              <div className="text-center mb-4 md:mb-0 md:flex">
                <div className="w-48 inline-block relative mb-4 md:mb-0 md:mr-4">
                  <select className="leading-tight block appearance-none w-full bg-white border border-grey-light px-3 py-2 pr-8 rounded">
                    <option>English</option>
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
                <div>
                  <Link to="#"
                    className="inline-block leading-tight bg-blue border border-blue-dark hover:bg-blue-dark px-3 py-2 text-white no-underline rounded"
                  >
                    Need help?
                  </Link>
                </div>
              </div>
              <div className="text-grey text-center md:mr-4">
                &copy; 2021 TubaExRate
              </div>
            </div>
          </div>
        </div>
      </div>
    );

}

export default Footer;