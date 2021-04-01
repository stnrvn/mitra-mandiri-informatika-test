const initialState = {
  dataPosition: []
}

const positionReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'FETCH_POSITION':
      return{
        ...state,
        dataPosition: action.payload
      }
    default:
      return state
  }
}

export default positionReducer