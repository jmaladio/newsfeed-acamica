const loadingError = (state = false, action) => {
  switch (action.type) {
    case "LOADING_ERROR":
      return action.error;
    default:
      return state;
  }
};

const loadingInProgress = (state = true, action) => {
  switch (action.type) {
    case "LOADING_IN_PROGRESS":
      return !action.loading;
    default:
      return state;
  }
};

const newsData = (state = [], action) => {
  switch (action.type) {
    case "LOADING_SUCCESS":
      return action.payload;
    case "CLEAR_REPOS":
      return [];
    default:
      return state;
  }
};

const rootReducer = {
  newsData,
  loadingError,
  loadingInProgress
};

export default rootReducer;
