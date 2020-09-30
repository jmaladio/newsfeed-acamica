import { connect } from "react-redux";
import { getNewsData } from "actions";
import Home from "components/pages/Home";

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

export const HomeReduxContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
