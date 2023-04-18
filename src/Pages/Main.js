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
            <Catalog />
        {/* filter component*/}
        {/* catalog component*/}
        </div>
      </div>
    </div>
  );
};

export default Main;
