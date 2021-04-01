import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchKaryawan } from '../store/actions/karyawanAction'
import TbodyData from '../components/TbodyData'
import HeaderWeb from '../components/HeaderWeb'
import { Container, Col, Card, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom'

export default function KaryawanIndex () {
  const { dataKaryawan } = useSelector(state => state.karyawan)
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(fetchKaryawan())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataKaryawan])

  return (
    <>
    <HeaderWeb/>
    <Container fluid className="mt-5 mb-5">
    <Col>
      <Card>
        <Card.Header>List Karyawan</Card.Header>
        <Link to={`/promise/addkaryawan`} variant="primary" className="btn btn-primary ml-3 mt-3 col-md-1" size="sm"><i className="bi-file-earmark-plus mr-2"></i>Tambah</Link>
        <Card.Body>
          <Table striped bordered hover>
            <thead>
                <tr>
                <th>No</th>
                <th>Name</th>
                <th>Tanggal Lahir</th>
                <th>Jabatan</th>
                <th>NIP</th>
                <th>Jenis Kelamin</th>
                <th>Aksi</th>
                </tr>
            </thead>
            <tbody>
                {
                  dataKaryawan?.map(data => {
                    return <TbodyData key={data.id} data={data}/>
                  }) 
                }
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </Col>
    </Container>
    </>
  )
}