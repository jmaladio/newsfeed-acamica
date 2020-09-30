import React from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import { PageLayout, NewsCard, Loading, Error } from "components/common";

const HomeWrapper = styled.section`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  position: relative;

  > div {
    width: 100%;
    display: flex;
    flex: 1 1 100%;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: baseline;
  }
`;

const Title = styled.h1`
  font-family: "Roboto Slab";
  font-size: 2.5rem;
  color: #595959;
  display: block;
  flex: 1 0 100%;
  text-align: center;
`;

class Home extends React.Component {
  componentDidMount() {
    // console.log(this.props.loading);
    document.title = "Styled News > Inicio";
    if (this.props.match.path === "/") {
      this.props.onGetData(0);
    }
  }

  // componentDidUpdate(prevProps, props) {
  //   if (prevProps.news !== this.props.news) {
  //     console.log(this.props.loading);
  //   }
  // }

  render() {
    const listNews = this.props.news.map((obj) => {
      return <NewsCard {...obj} key={uuidv4()} />;
    });

    const hasErrored = this.props.error;
    const isLoading = this.props.loading ? <Loading /> : <div>{listNews}</div>;

    return (
      <PageLayout>
        <HomeWrapper>
          <Title>Últimas noticias</Title>
          {hasErrored ? <Error /> : isLoading}
        </HomeWrapper>
      </PageLayout>
    );
  }
}

export default Home;
