import { API_URL } from "../data";

export const loadingSuccess = (data) => {
  return {
    type: "LOADING_SUCCESS",
    payload: data
  };
};

export const loadingInProgress = (bool) => ({
  type: "LOADING_IN_PROGRESS",
  loading: bool
});

export const loadingError = (bool) => ({
  type: "LOADING_ERROR",
  error: bool
});

export const clearData = () => ({
  type: "CLEAR_DATA"
});

export const userSearch = (str) => ({
  type: "USER_SEARCH",
  payload: str
});

const grabNewsWithPicture = (arr) => {
  return arr.filter((el) => el.img_url !== null).slice(0, 10);
};

export const getNewsData = (categoryID) => {
  return (dispatch) => {
    dispatch(clearData());
    dispatch(userSearch(""));
    dispatch(loadingError(false));
    dispatch(loadingInProgress(true));
    if (!categoryID) {
      const today = new Date(new Date().valueOf() - 10800000)
        .toISOString()
        .slice(0, 10);

      fetch(API_URL + "/latest/" + today)
        .then((res) => {
          loadingInProgress(false);
          return res;
        })
        .then((res) => res.json())
        .then((array) => grabNewsWithPicture(array))
        .then((news) => {
          return dispatch(loadingSuccess(news));
        });
    } else {
      fetch(API_URL + "/news/category/" + categoryID)
        .then((res) => {
          loadingInProgress(false);
          return res;
        })
        .then((res) => res.json())
        .then((array) => grabNewsWithPicture(array))
        .then((news) => dispatch(loadingSuccess(news)));
    }
  };
};

export const searchNewsData = (string) => {
  return (dispatch) => {
    // dispatch(clearData());
    dispatch(userSearch(string));
    dispatch(loadingError(false));
    dispatch(loadingInProgress(true));

    fetch(API_URL + "/search/" + string)
      .then((res) => {
        loadingInProgress(false);
        return res;
      })
      .then((res) => res.json())
      .then((array) => grabNewsWithPicture(array))
      .then((news) => dispatch(loadingSuccess(news)));
  };
};
