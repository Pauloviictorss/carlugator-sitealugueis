import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Table, Row } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import CarroService from '../services/CarroService'
import ImovelService from '../services/ImovelService'
import BarcoService from '../services/BarcoService'
import MotoService from '../services/MotoService'
import BikeService from '../services/BikeService'
import MenuServico from '../components/MenuServico';
import Footer from '../components/Footer';
import Swal from 'sweetalert2'

const MeusAnuncios = () => {

  const [adscarro, setAdsCarro] = useState([])
  const [adsmoto, setAdsMoto] = useState([])
  const [adsbarco, setAdsBarco] = useState([])
  const [adsimovel, setAdsImovel] = useState([])
  const [adsbike, setAdsBike] = useState([])

    useEffect(() => {
        setAdsCarro(CarroService.getAll())
    }, []);

    useEffect(() => {
        setAdsMoto(MotoService.getAll())
    }, []);

    useEffect(() => {
        setAdsBarco(BarcoService.getAll())
    }, []);

    useEffect(() => {
        setAdsImovel(ImovelService.getAll())
    }, []);

    useEffect(() => {
        setAdsBike(BikeService.getAll())
    }, []);

    function apagarcarro(id) {
        Swal.fire({
            title: 'Anúncio excluído com sucesso!.',
            width: 600,
            icon: 'success',
            padding: '3em',
            color: 'black',
            background: '#fff url("/images/trees.png")',
            backdrop: `
              rgba(0,0,0,0.85)
              url("https://www.influx.com.br/storage/app/media/uploaded-files/00-2019/04-2019/090419-kudos/img1_kudos.gif")
              center top
              no-repeat
            `
          })
        if(window.confirm('Deseja realmente excluir o registro?')){
          CarroService.delete(id)
          setAdsCarro(CarroService.getAll())
        }

      }
      function apagarmoto(id) {
        Swal.fire({
            title: 'Anúncio excluído com sucesso!.',
            width: 600,
            icon: 'success',
            padding: '3em',
            color: 'black',
            background: '#fff url("/images/trees.png")',
            backdrop: `
              rgba(0,0,0,0.85)
              url("https://www.influx.com.br/storage/app/media/uploaded-files/00-2019/04-2019/090419-kudos/img1_kudos.gif")
              center top
              no-repeat
            `
          })
        if(window.confirm('Deseja realmente excluir o registro?')){
          MotoService.delete(id)
          setAdsMoto(MotoService.getAll())
        }
      }
      function apagarbarco(id) {
        Swal.fire({
            title: 'Anúncio excluído com sucesso!.',
            width: 600,
            icon: 'success',
            padding: '3em',
            color: 'black',
            background: '#fff url("/images/trees.png")',
            backdrop: `
              rgba(0,0,0,0.85)
              url("https://www.influx.com.br/storage/app/media/uploaded-files/00-2019/04-2019/090419-kudos/img1_kudos.gif")
              center top
              no-repeat
            `
          })
        if(window.confirm('Deseja realmente excluir o registro?')){
          BarcoService.delete(id)
          setAdsBarco(BarcoService.getAll())
        }
      }
      function apagarcasa(id) {
        Swal.fire({
            title: 'Anúncio excluído com sucesso!.',
            width: 600,
            icon: 'success',
            padding: '3em',
            color: 'black',
            background: '#fff url("/images/trees.png")',
            backdrop: `
              rgba(0,0,0,0.85)
              url("https://www.influx.com.br/storage/app/media/uploaded-files/00-2019/04-2019/090419-kudos/img1_kudos.gif")
              center top
              no-repeat
            `
          })
        if(window.confirm('Deseja realmente excluir o registro?')){
          ImovelService.delete(id)
          setAdsImovel(ImovelService.getAll())
        }
      }
      function apagarbike(id) {
        Swal.fire({
            title: 'Anúncio excluído com sucesso!.',
            width: 600,
            icon: 'success',
            padding: '3em',
            color: 'black',
            background: '#fff url("/images/trees.png")',
            backdrop: `
              rgba(0,0,0,0.85)
              url("https://www.influx.com.br/storage/app/media/uploaded-files/00-2019/04-2019/090419-kudos/img1_kudos.gif")
              center top
              no-repeat
            `
          })
        if(window.confirm('Deseja realmente excluir o registro?')){
          BikeService.delete(id)
          setAdsBike(BikeService.getAll())
        }
      }


  return (
    <div className='mt-5'>
        <MenuServico/>
        <Card className='p-4 mt-5'>
            <Card className='bg-dark mb-4 mt-3 text-light p-2 align-items-center' style={{ borderRadius: '15px' }}>
            <h2>Meus Anúncios</h2>
            </Card>

            <Row className='mb-5'>
                <Card className='p-2'>
                    <h1 className='btn btn-danger'>Carros</h1>
                    <Row>
                        {adscarro.map((itemcar, i) => (
                            <Col className='mb-4' key={i}>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img style={{ height: '220px' }} variant="top" src={itemcar.foto} />
                                    <Card.Body>
                                        <Card.Title>
                                            <Card className='p-2 align-items-center'>
                                                {itemcar.modelo}
                                            </Card>
                                        </Card.Title>
                                        <Card.Text>
                                            <strong>Montadora: </strong>{itemcar.montadora}
                                        </Card.Text>
                                        <Card.Text>
                                            <strong>Ano: </strong>{itemcar.ano}
                                        </Card.Text>
                                        <Card.Text>
                                            <strong>Cor: </strong>{itemcar.cor}
                                        </Card.Text>
                                        <Card.Text>
                                            <strong>Quilometragem: </strong>{itemcar.quilometragem}km
                                        </Card.Text>
                                        <Card.Text>
                                            <strong>Combustível: </strong>{itemcar.combustivel}
                                        </Card.Text>
                                        <Card.Text>
                                            <strong>Placa: </strong>{itemcar.placa}
                                        </Card.Text>
                                        <Card.Text>
                                            <strong>Telefone: </strong>{itemcar.telefone}
                                        </Card.Text>
                                        <Card.Text>
                                            <strong>CEP: </strong>{itemcar.cep}
                                        </Card.Text>
                                        <Card.Text>
                                            <Card className='text-light bg-success  align-items-center p-3'>
                                                <h4>R${itemcar.valor}</h4>
                                            </Card>
                                        </Card.Text>
                                        <Row className='mt-4'>
                                            <Col>
                                                <Link className='btn btn-dark' to={'/anunciarcarro/' + i}>Editar</Link>{' '}
                                            </Col>
                                            <Col>
                                                <Link to={""} onClick={() => apagarcarro(i)} className='btn btn-danger'> Excluir</Link>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Card>
            </Row>

            <Row className='mb-5'>
                <Card className='p-2'>
                    <h1 className='btn btn-danger'>Motos</h1>
                    <Row>
                        {adsmoto.map((itemmoto, i) => (
                            <Col className='mb-4' key={i}>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img style={{ height: '220px' }} variant="top" src={itemmoto.foto} />
                                    <Card.Body>
                                        <Card.Title>
                                            <Card className='p-2 align-items-center'>
                                                {itemmoto.modelo}
                                            </Card>
                                        </Card.Title>
                                        <Card.Text>
                                            <strong>Montadora: </strong>{itemmoto.montadora}
                                        </Card.Text>
                                        <Card.Text>
                                            <strong>Ano: </strong>{itemmoto.ano}
                                        </Card.Text>
                                        <Card.Text>
                                            <strong>Cor: </strong>{itemmoto.cor}
                                        </Card.Text>
                                        <Card.Text>
                                            <strong>Cilindradas: </strong>{itemmoto.cilindradas}cc
                                        </Card.Text>
                                        <Card.Text>
                                            <strong>Quilometragem: </strong>{itemmoto.quilometragem}km
                                        </Card.Text>
                                        <Card.Text>
                                            <strong>Placa: </strong>{itemmoto.placa}
                                        </Card.Text>
                                        <Card.Text>
                                            <strong>Telefone: </strong>{itemmoto.telefone}
                                        </Card.Text>
                                        <Card.Text>
                                            <strong>CEP: </strong>{itemmoto.cep}
                                        </Card.Text>
                                        <Card.Text>
                                            <Card className='text-light bg-success  align-items-center p-3'>
                                                <h4>R${itemmoto.valor}</h4>
                                            </Card>
                                        </Card.Text>
                                        <Row className='mt-4'>
                                            <Col>
                                                <Link className='btn btn-dark' to={'/anunciarmoto/' + i}>Editar</Link>{' '}
                                            </Col>
                                            <Col>
                                                <Link to={""} onClick={() => apagarmoto(i)} className='btn btn-danger'> Excluir</Link>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Card>
            </Row>

            <Row className='mb-5'>
                <Card className='p-2'>
                    <h1 className='btn btn-danger'>Barcos</h1>
                    <Row>
                        {adsbarco.map((itembarco, i) => (
                            <Col className='mb-4' key={i}>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img style={{ height: '220px' }} variant="top" src={itembarco.foto} />
                                    <Card.Body>
                                        <Card.Title>
                                            <Card className='p-2 align-items-center'>
                                                {itembarco.modelo}
                                            </Card>
                                        </Card.Title>
                                        <Card.Text>
                                            <strong>Marca: </strong>{itembarco.marca}
                                        </Card.Text>
                                        <Card.Text>
                                            <strong>Ano: </strong>{itembarco.ano}
                                        </Card.Text>
                                        <Card.Text>
                                            <strong>Motor: </strong>{itembarco.motor}
                                        </Card.Text>
                                        <Card.Text>
                                            <strong>Potência: </strong>{itembarco.potencia}hp
                                        </Card.Text>
                                        <Card.Text>
                                            <strong>Comprimento: </strong>{itembarco.comprimento}m
                                        </Card.Text>
                                        <Card.Text>
                                            <strong>Identificação: </strong>{itembarco.identificacao}
                                        </Card.Text>
                                        <Card.Text>
                                            <strong>Telefone: </strong>{itembarco.telefone}
                                        </Card.Text>
                                        <Card.Text>
                                            <strong>CEP: </strong>{itembarco.cep}
                                        </Card.Text>
                                        <Card.Text>
                                            <strong>Horas de Uso: </strong>{itembarco.horas}h
                                        </Card.Text>
                                        <Card.Text>
                                            <Card className='text-light bg-success  align-items-center p-3'>
                                                <h4>R${itembarco.valor}</h4>
                                            </Card>
                                        </Card.Text>
                                        <Row className='mt-4'>
                                            <Col>
                                                <Link className='btn btn-dark' to={'/anunciarbarco/' + i}>Editar</Link>{' '}
                                            </Col>
                                            <Col>
                                                <Link to={""} onClick={() => apagarbarco(i)} className='btn btn-danger'> Excluir</Link>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Card>
            </Row>

            <Row className='mb-5'>
                <Card className='p-2'>
                    <h1 className='btn btn-danger'>Imóveis</h1>
                    <Row>
                        {adsimovel.map((itemcasa, i) => (
                            <Col className='mb-4' key={i}>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img style={{ height: '220px' }} variant="top" src={itemcasa.foto} />
                                    <Card.Body>
                                        <Card.Title>
                                            <Card className='p-2 align-items-center'>
                                                {itemcasa.titulo}
                                            </Card>
                                        </Card.Title>
                                        <Card.Text>
                                            <strong>Área útil: </strong>{itemcasa.area}
                                        </Card.Text>
                                        <Card.Text>
                                            <strong>Quartos: </strong>{itemcasa.quartos}
                                        </Card.Text>
                                        <Card.Text>
                                            <strong>Banheiros: </strong>{itemcasa.banheiros}
                                        </Card.Text>
                                        <Card.Text>
                                            <strong>Área útil: </strong>{itemcasa.area}m²
                                        </Card.Text>
                                        <Card.Text>
                                            <strong>Garagem: </strong>{itemcasa.vagas} vaga
                                        </Card.Text>
                                        <Card.Text>
                                            <strong>Cidade: </strong>{itemcasa.cidade}
                                        </Card.Text>
                                        <Card.Text>
                                            <strong>CEP: </strong>{itemcasa.cep}
                                        </Card.Text>
                                        <Card.Text>
                                            <strong>Telefone: </strong>{itemcasa.telefone}
                                        </Card.Text>
                                        <Card.Text>
                                            <Card className='text-light bg-success  align-items-center p-3'>
                                                <h4>R${itemcasa.valor}</h4>
                                            </Card>
                                        </Card.Text>
                                        <Row className='mt-4'>
                                            <Col>
                                                <Link className='btn btn-dark' to={'/anunciarcasa/' + i}>Editar</Link>{' '}
                                            </Col>
                                            <Col>
                                                <Link to={""} onClick={() => apagarcasa(i)} className='btn btn-danger'> Excluir</Link>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Card>
            </Row>

            <Row className='mb-5'>
                <Card className='p-2'>
                    <h1 className='btn btn-danger'>Bicicletas</h1>
                    <Row>
                        {adsbike.map((itembike, i) => (
                            <Col className='mb-4' key={i}>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img style={{ height: '220px' }} variant="top" src={itembike.foto} />
                                    <Card.Body>
                                        <Card.Title>
                                            <Card className='p-2 align-items-center'>
                                                {itembike.modelo}
                                            </Card>
                                        </Card.Title>
                                        <Card.Text>
                                            <strong>Marca: </strong>{itembike.marca}
                                        </Card.Text>
                                        <Card.Text>
                                            <strong>Ano: </strong>{itembike.ano}
                                        </Card.Text>
                                        <Card.Text>
                                            <strong>Cor: </strong>{itembike.cor}
                                        </Card.Text>
                                        <Card.Text>
                                            <strong>Marca de Passadores: </strong>{itembike.passadores}
                                        </Card.Text>
                                        <Card.Text>
                                            <strong>Pneus: </strong>{itembike.pneus}
                                        </Card.Text>
                                        <Card.Text>
                                            <strong>Aro: </strong>{itembike.aro}
                                        </Card.Text>
                                        <Card.Text>
                                            <strong>Telefone: </strong>{itembike.telefone}
                                        </Card.Text>
                                        <Card.Text>
                                            <strong>CEP: </strong>{itembike.cep}
                                        </Card.Text>
                                        <Card.Text>
                                            <Card className='text-light bg-success  align-items-center p-3'>
                                                <h4>R${itembike.valor}</h4>
                                            </Card>
                                        </Card.Text>
                                        <Row className='mt-4'>
                                            <Col>
                                                <Link className='btn btn-dark' to={'/anunciarbike/' + i}>Editar</Link>{' '}
                                            </Col>
                                            <Col>
                                                <Link to={""} onClick={() => apagarbike(i)} className='btn btn-danger'> Excluir</Link>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Card>
            </Row>
        </Card>
    </div>
    
  )
}

export default MeusAnuncios 