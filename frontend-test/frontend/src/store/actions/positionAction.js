import axios from 'axios'

export function fetchPosition () {
  return async (dispatch) => {
    try {
      const response = await axios({
        url: 'http://localhost:8000/position',
        method: 'GET'
      })

      console.log('data position dari action')

      dispatch({
        type: 'FETCH_POSITION',
        payload: response.data
      })
    } catch (error) {
      console.log(error, 'error dari POSITION action')
    }
  }
}