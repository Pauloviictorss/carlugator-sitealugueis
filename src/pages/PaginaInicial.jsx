import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const PaginaInicial = () => {
  return (
    <div style={{ marginTop: '50px', alignItems: 'center', justifyContent: 'center'}} className='justify-content-center align-items-center d-flex'>
            <Card style={{  }} className='align-items-center p-5'>
            <Card className='align-items-center bg-danger text-light' style={{ width: '550px' }}>
                <h2>Carlugator</h2>
            </Card>
            <Card className='align-items-center bg-dark text-light mb-5' style={{ width: '550px', height: '20px' }}>
                <p style={{ fontSize: '8pt'}} >Sua Vitrine de Aluguéis!</p>
            </Card>
            <Row style={{ width: '500px'}}>
                <Col>
                    <Card>
                        <Link className='btn btn-dark' to={'/cliente'}>Quero alugar</Link>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Link className='btn btn-dark' to={'/servico'}>Quero anunciar</Link>
                    </Card>
                </Col>
            </Row>

        </Card>
    </div>
  )
}

export default PaginaInicial