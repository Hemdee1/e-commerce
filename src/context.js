import React, { useContext, useEffect, useState } from "react";
import { datas } from "./data";

const AppContext = React.createContext();

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [search, setSearch] = useState([]);

  const handleSearch = (search) => {
    setSearch(
      datas.filter((item) => item.title.toLowerCase().indexOf(search) !== -1)
    );
  };

  const handleCart = (id) => {
    setData(
      data.map((item) => {
        if (item.id === id) {
          return { ...item, cart: true };
        }
        return item;
      })
    );
  };

  const handleFav = (id) => {
    setData(
      data.map((item) => {
        if (item.id === id) {
          return { ...item, favorite: !item.favorite };
        }
        return item;
      })
    );
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      setData(shuffle(datas));
    }, 2000);
  }, []);

  return (
    <AppContext.Provider
      value={{
        loading,
        data,
        setData,
        numberWithCommas,
        handleCart,
        handleFav,
        search,
        handleSearch,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export default AppProvider;
