import React, { useEffect } from "react";
import Card from "../Card/Card";
import Loading from "../Loading/Loading";
import Error from "../Error/Error";

const MainView = (props) => {
  // checking for router props
  const { fetched, error, data, getNewsData } = props;
  const { id } = props.match.params;
  useEffect(() => getNewsData(id), [getNewsData, id]);

  const mapNews = () => {
    if (data === null) {
      if (fetched === false && error === false) return <Loading />;
      else if (fetched === false && error === true) return <Error />;
    } else {
      return data.map((newsData) => <Card data={newsData} />);
    }
  };

  return <main className="main-view">{mapNews()}</main>;
};

export default MainView;
