import {Button, Modal} from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import React, { useState } from 'react'

import { deleteKaryawan } from '../store/actions/karyawanAction'

export default function DeleteModal ({ id }) {
    
    const [show, setShow] = useState(false)
    const handleShow = () => setShow(true)
    const handleClose = () => setShow(false)
    const dispatch = useDispatch()

  function deleteHandler(id){
    dispatch(deleteKaryawan(id))
    setShow(false)
  }

  return (
    <>
    <Button variant="danger" onClick={ handleShow } className="mb-3 mt-3">
      <i className="bi-trash"></i>
    </Button>
      <Modal show={ show } onHide={ handleClose }>
        <Modal.Header closeButton>
          <Modal.Title>Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Apakah anda akan menghapus data ini?
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={ handleClose }>
              No
            </Button>
            <Button variant="danger" onClick={() => deleteHandler(id) }>
              Yes
            </Button>
            </Modal.Footer>
      </Modal>
    </>
  )
}