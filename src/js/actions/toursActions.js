import axios from "axios";

export function fetchTours() {
  return function(dispatch) {
    axios.get("http://localhost:3000/tours")
      .then((response) => {
        dispatch({type: "FETCH_TOURS_FULFILLED", payload: response.data})
      })
      .catch((err) => {
        dispatch({type: "FETCH_TOURS_REJECTED", payload: err})
      })
  }
}

export function addTour(title, description, files) {
  const data = new FormData();

  data.append('title', title);
  data.append('description', description);
  data.append('file', files[0]);

  return function(dispatch) {
    axios.post("http://localhost:3000/tours", data)
      .then((response) => {
        dispatch({type: "ADD_TOUR", payload: response.data})
      })
      .catch((err) => {
        // dispatch({type: "FETCH_TOURS_REJECTED", payload: err})
      })
  }
}

export function updateTour(id, text) {
  return {
    type: 'UPDATE_TOUR',
    payload: {
      id,
      title,
      description
    },
  }
}

export function deleteTour(id) {
  return function(dispatch) {
    axios.delete("http://localhost:3000/tours/"+id)
      .then((response) => {
        dispatch({ type: 'DELETE_TOUR', payload: id })
      })
      .catch((err) => {
        // dispatch({type: "FETCH_TOURS_REJECTED", payload: err})
      })
  }
}
