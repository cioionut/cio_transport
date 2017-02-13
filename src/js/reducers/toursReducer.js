export default function reducer(state={
    tours: [],
    fetching: false,
    fetched: false,
    error: null,
  }, action) {

    switch (action.type) {
      case "FETCH_TOURS": {
        return {...state, fetching: true}
      }
      case "FETCH_TOURS_REJECTED": {
        return {...state, fetching: false, error: action.payload}
      }
      case "FETCH_TOURS_FULFILLED": {
        return {
          ...state,
          fetching: false,
          fetched: true,
          tours: action.payload,
        }
      }
      case "ADD_TOUR": {
        return {
          ...state,
          tours: [...state.tours, action.payload],
        }
      }
      case "UPDATE_TOUR": {
        const { id, title, description } = action.payload
        const newTours = [...state.tours]
        const tourToUpdate = newTours.findIndex(tour => tour.id === id)
        newTours[tourToUpdate] = action.payload;

        return {
          ...state,
          tours: newTours,
        }
      }
      case "DELETE_TOUR": {
        return {
          ...state,
          tours: state.tours.filter(tour => tour._id !== action.payload),
        }
      }
    }

    return state
}
