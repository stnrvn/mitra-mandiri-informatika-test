const initialState = {
  dataKaryawan: [],
  dataKaryawanById: []
}

const karyawanReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'FETCH_KARYAWAN':
      return{
        ...state,
        dataKaryawan: action.payload
      }
    case 'FETCH_KARYAWAN_BY_ID':
      return{
        ...state,
        dataKaryawanById: action.payload
      }
    default:
      return state
  }
}

export default karyawanReducer