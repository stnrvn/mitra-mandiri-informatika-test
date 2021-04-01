import { Container, Col, Card } from 'react-bootstrap';
import React from 'react'
import FormAdd from '../components/FormAdd'
import HeaderWeb from '../components/HeaderWeb'

export default function AddKaryawan () {
  return (
    <>
    <HeaderWeb/>
    <Container fluid className="mt-5">
    <Col>
      <Card>
        <Card.Header>Add Data Karyawan</Card.Header>
        <Card.Body>
          <FormAdd />
        </Card.Body>
      </Card>
    </Col>
    </Container>
    </>
  )
}