import React from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import { PageLayout, NewsCard, Loading } from "components/common";

const SearchWrapper = styled.section`
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

class Search extends React.Component {
  componentDidMount() {
    document.title = `Styled News > '${this.props.match.params.text}'`;
    if (this.props.match.path === "/search/:text") {
      this.props.onSearchData(this.props.match.params.text);
    }
  }

  componentDidUpdate(prevProps) {
    document.title = `Styled News > '${this.props.match.params.text}'`;
    if (prevProps.match.url !== this.props.match.url) {
      this.props.onSearchData(this.props.match.params.text);
    }
  }

  render() {
    const listNews = this.props.news.map((obj) => {
      return <NewsCard {...obj} key={uuidv4()} />;
    });

    const isLoading = this.props.loading ? <Loading /> : <div>{listNews}</div>;

    const search = this.props.match.params.text;
    return (
      <PageLayout>
        <SearchWrapper>
          <Title>Resultados de '{search}'</Title>
          {isLoading}
        </SearchWrapper>
      </PageLayout>
    );
  }
}

export default Search;
