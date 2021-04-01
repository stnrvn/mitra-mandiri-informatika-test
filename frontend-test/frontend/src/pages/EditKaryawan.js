import { Container, Col, Card } from 'react-bootstrap';
import React from 'react'
import FormEdit from '../components/FormEdit'
import HeaderWeb from '../components/HeaderWeb'

export default function EditKaryawan () {
  return (
    <>
    <HeaderWeb/>
    <Container fluid className="mt-5">
    <Col>
      <Card>
        <Card.Header>Edit Data Karyawan</Card.Header>
        <Card.Body>
          <FormEdit />
        </Card.Body>
      </Card>
    </Col>
    </Container>
    </>
  )
}