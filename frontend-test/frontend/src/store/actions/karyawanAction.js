import axios from 'axios'

export function fetchKaryawan () {
  return async (dispatch) => {
    try {
      const response = await axios({
        url: 'http://localhost:8000/karyawan',
        method: 'GET'
      })

      dispatch({
        type: 'FETCH_KARYAWAN',
        payload: response.data
      })
    } catch (error) {
      console.log(error, 'error dari action')
    }
  }
}

export function fetchKaryawanById (id) {
  return async (dispatch) => {
    try {
      const response = await axios({
        url: `http://localhost:8000/karyawan/${id}`,
        method: 'GET'
      })

      dispatch({
        type: 'FETCH_KARYAWAN_BY_ID',
        payload: response.data
      })
    } catch (error) {
      console.log(error, 'error dari action')
    }
  }
}

export function addKaryawan (data) {
  return async (dispatch) => {
    try {
      await axios({
        url: 'http://localhost:8000/karyawan',
        method: 'POST',
        data: {
          name: data.name,
          birth_date: data.birthDate,
          position_id: data.jabatan,
          id_number: data.nip,
          gender: data.jenisKelamin
        }
      })
    } catch (error) {
      console.log('error add from action')
    }
  }
}

export function updateKaryawan (id, data) {
  return async (dispatch) => {
    try {
      await axios({
        url: `http://localhost:8000/karyawan/${id}`,
        method: 'PUT',
        data: {
          name: data.name,
          birth_date: data.birthDate,
          position_id: data.jabatan,
          id_number: data.nip,
          gender: data.jenisKelamin
        }
      })
    } catch (error) {
      console.log('error edit from action')
    }
  }
}

export function deleteKaryawan (id) {
  return async (dispatch) => {
    try {
      await axios({
        url: `http://localhost:8000/karyawan/${id}`,
        method: 'PATCH'
      })
    } catch (error) {
      console.log('error from action')
    }
  }
}