import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import EditarAluno from '../../pages/editaraluno/EditarAluno';
import './Modaledit.css'

function Modaledit() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className='btn-custom' onClick={handleShow}>
        Cadastrar Clientes
      </Button>

      <Modal show={show} onHide={handleClose} className="custom-modal">
        <Modal.Header closeButton className="modal-header">
          <Modal.Title className="modal-title">Cadastro</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-body">
          <EditarAluno></EditarAluno>
        </Modal.Body>
        <Modal.Footer className="modal-footer">
          <Button variant="secondary" onClick={handleClose} className="btn-secondary">
            Cancelar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Modaledit;
