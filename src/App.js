import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Header from "./containers/partials/Header";
import Footer from "./containers/partials/Footer";
import RatesList from "./containers/RatesList";
import RateDetails from "./containers/RateDetails";
import LiveExchangeComponent from "./containers/LiveExchangeComponent";
// import Menu from "./containers/partials/Menu";
// import Recipients from "./containers/Recipients";
// import Main from "./containers/Main";

function App() {
  return (
    <div className="App font-sans bg-grey-lighter flex flex-col min-h-screen">
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact element={<RatesList />} />
          <Route path="/rate/:rateId" exact element={<RateDetails />} />
          <Route
            path="/live-exchange"
            exact
            element={<LiveExchangeComponent />}
          />
          <Route>404 Not Found!</Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
