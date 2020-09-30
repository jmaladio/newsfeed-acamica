import { API_URL } from "data";

// actions
const LOADING_SUCCESS = "LOADING_SUCCESS";
const LOADING_IN_PROGRESS = "LOADING_IN_PROGRESS";
const LOADING_ERROR = "LOADING_ERROR";
const CLEAR_NEWS = "CLEAR_NEWS";

// action creators
export const loadingSuccess = (news) => {
  return {
    type: LOADING_SUCCESS,
    payload: news,
  };
};

export const loadingInProgress = (bool) => ({
  type: LOADING_IN_PROGRESS,
  loading: bool,
});

export const loadingError = (bool) => ({
  type: LOADING_ERROR,
  error: bool,
});

export const clearNews = () => ({
  type: CLEAR_NEWS,
});

// aux function
const grabNewsWithPicture = (arr) => {
  return arr.filter((el) => el.img_url !== null).slice(0, 10);
};

export const getNewsData = (categoryID) => {
  return (dispatch) => {
    dispatch(clearNews());
    dispatch(loadingError(false));
    dispatch(loadingInProgress(true));
    // if section === home, use today-news endpoint
    // else, use per-category endpoints
    if (!categoryID) {
      const today = new Date(new Date().valueOf() - 10800000)
        .toISOString()
        .slice(0, 10);

      fetch(API_URL + "/latest/" + today)
        .then((res) => {
          if (!res.ok) {
            throw Error(res.statusText);
          }
          dispatch(loadingInProgress(false));
          return res;
        })
        .then((res) => res.json())
        .then((array) => grabNewsWithPicture(array))
        .then((news) => {
          return dispatch(loadingSuccess(news));
        })
        .catch(() => dispatch(loadingError(true)));
    } else {
      fetch(API_URL + "/news/category/" + categoryID)
        .then((res) => {
          if (!res.ok) {
            throw Error(res.statusText);
          }
          dispatch(loadingInProgress(false));
          return res;
        })
        .then((res) => res.json())
        .then((array) => grabNewsWithPicture(array))
        .then((news) => dispatch(loadingSuccess(news)))
        .catch(() => dispatch(loadingError(true)));
    }
  };
};

export const searchNewsData = (string) => {
  return (dispatch) => {
    dispatch(clearNews());
    dispatch(loadingError(false));
    dispatch(loadingInProgress(true));

    // if string != "". use search endpoint
    if (string) {
      fetch(API_URL + "/search/" + string)
        .then((res) => {
          if (!res.ok) {
            throw Error(res.statusText);
          }
          dispatch(loadingInProgress(false));
          return res;
        })
        .then((response) => response.json())
        .then((array) => grabNewsWithPicture(array))
        .then((news) => dispatch(loadingSuccess(news)))
        .catch(() => dispatch(loadingError(true)));
    }
  };
};
