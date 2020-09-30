import { connect } from "react-redux";
import { getNewsData } from "actions";
import Section from "components/pages/Section";

const mapStateToProps = (state) => {
  return {
    loading: state.loadingInProgress,
    error: state.loadingError,
    news: state.newsData,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onGetData: (id) => dispatch(getNewsData(id)),
});

export const SectionReduxContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Section);
