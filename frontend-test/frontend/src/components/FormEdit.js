import { Link } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchKaryawanById, updateKaryawan } from '../store/actions/karyawanAction'
import { fetchPosition } from '../store/actions/positionAction'
import { useHistory, useParams } from 'react-router-dom'
import { Form, Row, Col, Button } from 'react-bootstrap'

export default function FormEdit () {
  const history = useHistory()
  const { id } = useParams()
  const dispatch = useDispatch()
  const { dataKaryawanById } = useSelector(state => state.karyawan)
  const { dataPosition } = useSelector(state => state.position)
  const [name, setName] = useState(dataKaryawanById[0]?.NAME)
  const [birthDate, setBirthDate] = useState(dataKaryawanById[0]?.BIRTH_DATE)
  const [jabatan, setJabatan] = useState(dataKaryawanById[0]?.POSITION_ID)
  const [nip, setNip] = useState(dataKaryawanById[0]?.ID_NUMBER)
  const [jenisKelamin, setJenisKelamin] = useState(dataKaryawanById[0]?.GENDER)
  
  useEffect(() => {
    dispatch(fetchPosition())
    dispatch(fetchKaryawanById(id))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleName = (e) => {
    setName(e.target.value)
  }

  const handleBirthDate = (e) => {
    setBirthDate(e.target.value)
  }

  const handleJabatan = (e) => {
      setJabatan(+e.target.value)
  }

  const handleNip = (e) => {
    setNip(+e.target.value)
  }

  const handleJenisKelamin = (e) => {
    setJenisKelamin(+e.target.id)
  }

  const handleAdd = (e) => {
    e.preventDefault()
    let payload = {
      name,
      birthDate,
      jabatan,
      nip,
      jenisKelamin
    }
    console.log(payload, 'button submit')
    dispatch(updateKaryawan(id, payload))
    history.push("/promise/karyawanindex");
  }

  return(
    <Form onSubmit={ handleAdd }>
            <Form.Group as={Row} controlId="formPlaintextEmail">
                <Form.Label column sm="2">
                Nama
                </Form.Label>
                <Col sm="10">
                <Form.Control type="text" defaultValue={ dataKaryawanById[0]?.NAME } onChange={ handleName }/>
                </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formPlaintextEmail">
                <Form.Label column sm="2">
                Tanggal Lahir {new Date(dataKaryawanById[0]?.BIRTH_DATE).toLocaleDateString('en-ZA') }
                </Form.Label>
                <Col sm="10">
                <Form.Control type="date" value={ new Date(dataKaryawanById[0]?.BIRTH_DATE).toLocaleDateString('en-ZA') } placeholder="asd" onfocus={ new Date(dataKaryawanById[0]?.BIRTH_DATE).toLocaleDateString('en-ZA')} onChange={ handleBirthDate }/>
                </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formGridState">
                <Form.Label column sm="2">Jabatan</Form.Label>
                <Col sm="10">
                <Form.Control as="select" onChange={ handleJabatan }>
                  {
                    dataPosition.map(data => {
                      if( data.id === dataKaryawanById[0]?.POSITION_ID ){
                        return <option key={ data.id } value={ data.id } selected>{ data.NAME}</option>
                      } else {
                        return <option key={ data.id } value={ data.id }>{ data.NAME }</option>
                      }
                    })
                  }
                </Form.Control>
                </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formPlaintextEmail">
                <Form.Label column sm="2">
                NIP
                </Form.Label>
                <Col sm="10">
                <Form.Control type="number" defaultValue={ dataKaryawanById[0]?.ID_NUMBER } onChange={ handleNip }/>
                </Col>
            </Form.Group>

            <Form.Group as={Row}>
                <Form.Label as="legend" column sm={2}>
                    Radios
                </Form.Label>
                {
                  dataKaryawanById[0]?.GENDER === 1 ? (
                    <>
                    <Col sm={4}>
                    <Form.Check
                    type="radio"
                    label="Pria"
                    name="formHorizontalRadios"
                    id="1"
                    onChange={ handleJenisKelamin }
                    checked
                    />
                </Col>

                <Col sm={4}>
                    <Form.Check
                    type="radio"
                    label="Wanita"
                    name="formHorizontalRadios"
                    id="2"
                    onChange={ handleJenisKelamin }
                    />
                </Col>
                    </>
                  ) : (
                    <>
                    <Col sm={4}>
                    <Form.Check
                    type="radio"
                    label="Pria"
                    name="formHorizontalRadios"
                    id="1"
                    onChange={ handleJenisKelamin }
                    />
                </Col>

                <Col sm={4}>
                    <Form.Check
                    type="radio"
                    label="Wanita"
                    name="formHorizontalRadios"
                    id="2"
                    onChange={ handleJenisKelamin }
                    checked
                    />
                </Col>
                    </>
                  )
                }
                </Form.Group>

                <Button variant="primary" type="submit" className="float-right">
                  Update
                </Button>
                <Link to={`/promise/karyawanindex`} variant="primary" className="btn btn-danger float-right mr-3" size="sm">Kembali</Link>
            </Form>
  )
}