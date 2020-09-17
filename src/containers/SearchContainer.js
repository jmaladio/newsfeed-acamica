import { connect } from "react-redux";
import { searchNewsData } from "../actions/index";
import SearchInput from "../components/SearchInput/SearchInput";

const mapDispatchToProps = (dispatch) => ({
  onSearchData: (str) => dispatch(searchNewsData(str))
});

const SearchContainer = connect(null, mapDispatchToProps)(SearchInput);

export default SearchContainer;
