import React from 'react'
import { Button, Card, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import MenuServico from '../components/MenuServico';
import Pagina from '../components/Pagina';
import carros from '../assets/carro.png'
import boat from '../assets/barco.png'
import classes from '../assets/categorias.jpeg'
import home from '../assets/casa.png'

const HomeServico = () => {
  return (
      
      <div className='mt-5'>
        <MenuServico/>
        <Card className='bg-dark mb-4 mt-5 text-light p-2 align-items-center' style={{ borderRadius: '15px' }}>
          <h2>Quer anunciar? Aqui a gente dá um jeito!</h2>
        </Card>
        <Carousel variant="dark">
          <Carousel.Item>
            <img
              style={{ borderRadius: '20px' }}
              className="d-block w-100"
              src={carros}
              alt="Golfão"
            />
            <Carousel.Caption>
              <Card className='bg-dark p-2 mb-3'>
                <h3 className='text-light'>Anuncie seu veículo aqui!</h3>
              </Card>
              <Button className='d-grid gap-2 mb-5' variant='danger' size='lg' href='../anunciarcarro'>Anunciar</Button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={{ borderRadius: '20px' }}
              className="d-block w-100"
              src={home}
              alt="Imóveis"
            />
            <Carousel.Caption>
              <Card className='bg-dark p-2 mb-3'>
                <h3 className='text-light'>Anuncie seu imóvel aqui!</h3>
              </Card>
              <Button className='d-grid gap-2 mb-5' variant='danger' size='lg' href='../anunciarcasa'>Anunciar</Button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={{ borderRadius: '20px' }}
              className="d-block w-100"
              src={boat}
              alt="Embarcações"
            />
            <Carousel.Caption>
              <Card className='bg-dark p-2 mb-3'>
                <h3 className='text-light'>Anuncie sua embarcação aqui!</h3>
              </Card>
              <Button className='d-grid gap-2 mb-5' variant='danger' size='lg' href='../anunciarbarco'>Anunciar</Button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={{ borderRadius: '20px' }}
              className="d-block w-100"
              src={classes}
              alt="Todas as categorias"
            />
            <Carousel.Caption>
              <Card className='bg-dark p-2 mb-3'>
                <h3 className='text-light'>Ver todas as categorias!</h3>
              </Card>
              <Button className='d-grid gap-2 mb-5' variant='danger' size='lg' href='../tipoanuncio'>Anunciar</Button>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
  )
}

export default HomeServico