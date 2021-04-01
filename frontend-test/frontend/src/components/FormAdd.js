import { Link } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addKaryawan } from '../store/actions/karyawanAction'
import { fetchPosition } from '../store/actions/positionAction'
import { useHistory } from 'react-router-dom'
import { Form, Row, Col, Button } from 'react-bootstrap'

export default function FormAdd () {
  const history = useHistory();
  const dispatch = useDispatch()
  const { dataPosition } = useSelector(state => state.position)
  const [name, setName] = useState('')
  const [birthDate, setBirthDate] = useState('')
  const [jabatan, setJabatan] = useState(1)
  const [nip, setNip] = useState('')
  const [jenisKelamin, setJenisKelamin] = useState(1)
  
  useEffect(() => {
    dispatch(fetchPosition())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleName = (e) => {
    setName(e.target.value)
  }

  const handleBirthDate = (e) => {
    console.log(e.target.value)
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

    dispatch(addKaryawan(payload))
    history.push("/promise/karyawanindex");
  }

  return(
    <Form onSubmit={ handleAdd }>
            <Form.Group as={Row} controlId="formPlaintextEmail">
                <Form.Label column sm="2">
                Nama
                </Form.Label>
                <Col sm="10">
                <Form.Control type="text" onChange={ handleName }/>
                </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formPlaintextEmail">
                <Form.Label column sm="2">
                Tanggal Lahir
                </Form.Label>
                <Col sm="10">
                <Form.Control type="date" onChange={ handleBirthDate }/>
                </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formGridState">
                <Form.Label column sm="2">Jabatan</Form.Label>
                <Col sm="10">
                <Form.Control as="select" defaultValue="1" onChange={ handleJabatan }>
                  {
                    dataPosition.map(data => {
                      return <option key={ data.id } value={ data.id }>{ data.NAME}</option>
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
                <Form.Control type="number" onChange={ handleNip }/>
                </Col>
            </Form.Group>

            <Form.Group as={Row}>
                <Form.Label as="legend" column sm={2}>
                    Radios
                </Form.Label>
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
                    />
                </Col>
                </Form.Group>

                <Button variant="primary" type="submit" className="float-right">
                    Tambah
                </Button>
                <Link to={`/promise/karyawanindex`} variant="primary" className="btn btn-danger float-right mr-3" size="sm">Kembali</Link>
            </Form>
  )
}