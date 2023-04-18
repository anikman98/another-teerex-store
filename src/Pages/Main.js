/*
  This component is the main page that will be showed on initial load.
*/

import Header from "../components/Header";
import Search from "../components/Search";
import Filter from "../components/Filter";
import Catalog from "../components/Catalog";
import '../css/Main.css';

const Main = () => {
  return (
    <div className="app">
      <Header />
      <div className="body">
        <div className="upper">
          {/* search component*/}
          <Search />
        </div>
        <div className="lower">
            <Filter />
          {/* filter component*/}
            <Catalog />
          {/* catalog component*/}
        </div>
      </div>
    </div>
  );
};

export default Main;
