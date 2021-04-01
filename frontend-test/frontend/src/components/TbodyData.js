import { Link } from 'react-router-dom'
import DeleteModal from '../components/DeleteModal'

export default function TbodyData ({data}) {
  return (
    <>
      <tr>
        {
          data?.IS_DELETE !== 1 ? (
            <>
              <td>{data?.id}</td>
              <td>{data?.NAME}</td>
              <td>{new Date(data?.BIRTH_DATE).toLocaleDateString()}</td>
              <td>{data?.T1_POSITION.NAME}</td>
              <td>{data?.ID_NUMBER}</td>
              <td>{ 
                data.GENDER === 1 ? 'Pria' : 'Wanita'
              }</td>
              <td>
                <Link to={`/promise/editkaryawan/${ data?.id }`} className="btn btn-primary mr-3" size="sm"><i className="bi-pencil"></i></Link>
                <DeleteModal id={data?.id} />
              </td>
            </>
          ) : ''
        }
      </tr>
    </>
  )
}