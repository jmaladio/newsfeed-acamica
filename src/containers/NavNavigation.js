import { connect } from "react-redux";
import { getNewsData } from "../actions/index";
import NavBar from "../components/NavBar/NavBar";

const mapDispatchToProps = (dispatch) => ({
  onGetData: (id) => dispatch(getNewsData(id))
});

const NavNavigation = connect(null, mapDispatchToProps)(NavBar);
export default NavNavigation;
