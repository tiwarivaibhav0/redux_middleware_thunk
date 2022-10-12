export const FETCH_DATA = "FETCH_DATA";
export const ADD_DATA = "ADD_DATA";
export const LOADER = "LOADER";

export const fetchData = () => {
  return (dispatch) => {
    // alert();
    dispatch(fetchLoader(true));
    fetch("http://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        dispatch(fetchLoader(false));
        dispatch(addData(data));
      });
  };
};

export const fetchLoader = (bool) => {
  return {
    type: LOADER,
    payload: bool,
  };
};
export const addData = (data) => {
  return {
    type: ADD_DATA,
    payload: data,
  };
};
