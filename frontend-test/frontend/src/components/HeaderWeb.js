import { Container, Navbar } from 'react-bootstrap'

export default function HeaderWeb () {
  return(
    <Container className="p-0" fluid>
      <Navbar bg="light">
      <Navbar.Collapse className="justify-content-center">
        <Navbar.Text>
          <h3>Master Karyawan</h3>
        </Navbar.Text>
      </Navbar.Collapse>
      </Navbar>
    </Container>
  )
}