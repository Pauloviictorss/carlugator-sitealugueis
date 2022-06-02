import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const PaginaInicial = () => {
  return (
    <div style={{ marginTop: '50px', alignItems: 'center', justifyContent: 'center'}} className='justify-content-center align-items-center d-flex'>
            <Card style={{  }} className='align-items-center p-5'>
            <Card className='align-items-center bg-danger text-light' style={{ width: '550px' }}>
                <h4>Informe qual é a categoria do anúncio</h4>
            </Card>
            <Card className='align-items-center bg-dark text-light mb-5' style={{ width: '550px', height: '20px' }}>
                <p style={{ fontSize: '8pt'}}>Carlugator - Sua Vitrine de Aluguéis!</p>
            </Card>
            <Row className='mb-2' style={{ width: '500px'}}>
                <Col>
                    <Card>
                        <Link className='btn btn-dark' to={'/anunciarcarro'}>Carros</Link>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Link className='btn btn-dark' to={'/anunciarmoto'}>Motos</Link>
                    </Card>
                </Col>
            </Row>
            <Row className='mb-2' style={{ width: '500px'}}>
                <Col>
                    <Card>
                        <Link className='btn btn-dark' to={'/anunciarbarco'}>Barcos</Link>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Link className='btn btn-dark' to={'/anunciarcasa'}>Imóveis</Link>
                    </Card>
                </Col>
            </Row>
            <Row style={{ width: '500px'}}>
                <Col>
                    <Card>
                        <Link className='btn btn-dark' to={'/anunciarbike'}>Bicicletas</Link>
                    </Card>
                </Col>
            </Row>
            <Link className='mt-4 btn btn-danger' to={-1}>Voltar</Link>

        </Card>
    </div>
  )
}

export default PaginaInicial