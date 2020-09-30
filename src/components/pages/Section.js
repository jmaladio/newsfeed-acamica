import React from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import { PageLayout, NewsCard, Loading } from "components/common";
import { sections } from "data";

const SectionWrapper = styled.section`
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

class Section extends React.Component {
  componentDidMount() {
    this.setDocumentTitle();
    if (this.props.match.path === "/categoria/:id([1-5])") {
      this.props.onGetData(this.props.match.params.id);
    }
  }

  componentDidUpdate(prevProps) {
    this.setDocumentTitle();
    if (prevProps.match.url !== this.props.match.url) {
      this.props.onGetData(this.props.match.params.id);
    }
  }

  setDocumentTitle = () => {
    const sectionID = +this.props.match.params.id;
    const sectionName = sections.filter(
      (section) => section.id === sectionID && section
    )[0].name;
    document.title = `Styled News > ${sectionName}`;
  };

  render() {
    const listNews = this.props.news.map((obj) => {
      return <NewsCard {...obj} key={uuidv4()} />;
    });

    const isLoading = this.props.loading ? <Loading /> : <div>{listNews}</div>;
    const sectionID = +this.props.match.params.id;
    const sectionTitle = sections.map(
      (section) => section.id === sectionID && section.title
    );
    return (
      <PageLayout>
        <SectionWrapper>
          <Title>{sectionTitle}</Title>
          {isLoading}
        </SectionWrapper>
      </PageLayout>
    );
  }
}

export default Section;
