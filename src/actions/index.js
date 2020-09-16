import { API_URL } from "../data";

export const loadingSuccess = (data) => {
  console.log(data);
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

const grabNewsWithPicture = (arr) => {
  return arr.filter((el) => el.img_url !== null).slice(0, 10);
};

export const getNewsData = (categoryID) => {
  return (dispatch) => {
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
          console.log(news);
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
