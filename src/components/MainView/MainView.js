import React from "react";
import Card from "../Card/Card";
import Loading from "../Loading/Loading";
import Error from "../Error/Error";

const MainView = ({ children }) => {
  // dummy variable, placeholder for the state
  const news = { fetched: false, error: false, data: [] };

  const mapNews = () => {
    if (!news.data.length) {
      if (news.fetched === false && news.error === false) return <Loading />;
      else if (news.fetched === false && news.error === true) return <Error />;
    } else {
      return news.map((newsData) => <Card data={newsData} />);
    }
  };

  return <main className="main-view">{mapNews()}</main>;
};

export default MainView;
