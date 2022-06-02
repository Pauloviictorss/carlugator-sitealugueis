import React, { useEffect } from 'react'
import { Card, Col, Form, Row, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link, useNavigate, useParams } from 'react-router-dom';
import MenuServico from '../components/MenuServico';
import CarroService from '../services/CarroService';
import carroValidator from '../validators/carroValidator';
import { mask } from 'remask';
import Swal from 'sweetalert2';

const InserirCarro = () => {

    const params = useParams()
    const navigate = useNavigate()
    const { register, handleSubmit, setValue, formState: { errors } } = useForm();


    useEffect(() => {
        if(params.id) {
            const carro = CarroService.get(params.id)

            for (let campo in carro) {
                setValue(campo, carro[campo])
            }
        }
    }, [])

    function salvar(dados) {
        Swal.fire({
            title: 'Anúncio salvo com sucesso!.',
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
        if(params.id){
            CarroService.update(params.id, dados) 
          } else {
            CarroService.create(dados)
        }
        navigate('/meusanuncios')
    }
    function handleChange(event) {
        const mascara = event.target.getAttribute('mask')
        setValue(event.target.name, mask(event.target.value, mascara))
      }
    

  return (
    <div className='mt-5'>
        <MenuServico/>
        <Card className='align-items-center p-5 mb-5 mt-5'>
            <Card className='align-items-center bg-danger text-light' style={{ width: '550px' }}>
                <h2>Anunciar Carro</h2>
            </Card>
            <Card className='align-items-center bg-dark text-light mb-5' style={{ width: '550px', height: '20px' }}>
                <p style={{ fontSize: '8pt'}} >Carlugator - Sua Vitrine de Aluguéis!</p>
            </Card>

            <Row>
                <Row>
                    <Col>
                        <Form.Group name='modelo' className='mb-3' controlId="modelo">
                            <Form.Control isInvalid={errors.modelo} {...register("modelo", carroValidator.modelo)} type="text" placeholder="Modelo"/>
                            {errors.modelo && <span className='text-danger'>{errors.modelo.message}</span>}
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group name='montadora' className='mb-3' controlId="montadora">
                            <Form.Control isInvalid={errors.montadora} {...register("montadora", carroValidator.montadora)} type="text" placeholder="Montadora"/>
                            {errors.montadora && <span className='text-danger'>{errors.montadora.message}</span>}
                        </Form.Group>
                    </Col>
                    <Form.Group name='ano' className='mb-3' controlId="ano">
                        <Form.Select {...register("ano")} aria-label="Default select example">
                            <option disabled selected>Ano</option>
                            <option value="2000">2000</option>
                            <option value="2001">2001</option>
                            <option value="2002">2002</option>
                            <option value="2003">2003</option>
                            <option value="2004">2004</option>
                            <option value="2005">2005</option>
                            <option value="2006">2006</option>
                            <option value="2007">2007</option>
                            <option value="2008">2008</option>
                            <option value="2009">2009</option>
                            <option value="2010">2010</option>
                            <option value="2011">2011</option>
                            <option value="2012">2012</option>
                            <option value="2013">2013</option>
                            <option value="2014">2014</option>
                            <option value="2015">2015</option>
                            <option value="2016">2016</option>
                            <option value="2017">2017</option>
                            <option value="2018">2018</option>
                            <option value="2019">2019</option>
                            <option value="2020">2020</option>
                            <option value="2021">2021</option>
                            <option value="2022">2022</option>
                        </Form.Select>
                    </Form.Group>
                    <Col>
                        <Form.Group name='cor' className='mb-3' controlId="cor">
                            <Form.Control isInvalid={errors.cor} {...register("cor", carroValidator.cor)} type="text" placeholder="Cor"/>
                            {errors.cor && <span className='text-danger'>{errors.cor.message}</span>}
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group name='quilometragem' className='mb-3' controlId="quilometragem">
                            <Form.Control isInvalid={errors.quilometragem} {...register("quilometragem", carroValidator.quilometragem)} type="number" placeholder="Quilometragem"/>
                            {errors.quilometragem && <span className='text-danger'>{errors.quilometragem.message}</span>}
                        </Form.Group>
                    </Col>
                    <Form.Group name='foto' className='mb-3' controlId="foto">
                        <Form.Control {...register("foto", carroValidator.foto)} type="text" placeholder="Insira o link da imagem"/>
                    </Form.Group>
                    <Col>
                        <Form.Group name='combustivel' className='mb-3' controlId="combustivel">
                            <Form.Select {...register("combustivel")} aria-label="Default select example">
                                <option disabled selected>Combustível</option>
                                <option value="Álcool">Álcool</option>
                                <option value="Diesel">Diesel</option>
                                <option value="Gasolina">Gasolina</option>
                                <option value="Flex">Flex</option>
                                <option value="GNV">GNV</option>
                            </Form.Select>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group name='valor' className='mb-3' controlId="placa">
                            <Form.Control 
                                isInvalid={errors.placa} 
                                {...register("placa", carroValidator.placa)} 
                                type="text" 
                                placeholder="Placa"
                                mask="AAA99A9" 
                                onChange={handleChange}
                            />
                            {errors.placa && <span className='text-danger'>{errors.placa.message}</span>}
                        </Form.Group>
                    </Col>
                </Row>


                <Row>
                    <Col>
                        <Form.Group name='telefone' className='mb-3' controlId="telefone">
                            <Form.Control 
                                isInvalid={errors.telefone} 
                                {...register("telefone", carroValidator.telefone)} 
                                type="text" 
                                placeholder="Telefone"
                                mask="(99) 9 9999-9999" 
                                onChange={handleChange}
                        />
                            {errors.telefone && <span className='text-danger'>{errors.telefone.message}</span>}
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group name='cep' className='mb-3' controlId="cep">
                            <Form.Control 
                                isInvalid={errors.cep} 
                                {...register("cep", carroValidator.cep)} 
                                type="text" 
                                placeholder="CEP"
                                mask="99999-999" 
                                onChange={handleChange}
                            />
                            {errors.cep && <span className='text-danger'>{errors.cep.message}</span>}
                        </Form.Group>
                    </Col>
                    <Form.Group name='valor' className='mb-3' controlId="valor">
                        <Form.Control isInvalid={errors.valor} {...register("valor", carroValidator.valor)} type="number" placeholder="Valor"/>
                        {errors.valor && <span className='text-danger'>{errors.valor.message}</span>}
                    </Form.Group>
                </Row>
            </Row>


            <Row>
                <Col>
                    <Link className='btn btn-danger' to={-1}>Voltar</Link>
                </Col>
                <Col>
                    <Link style={{ width: '150px' }} className='btn btn-dark' to={""} onClick={handleSubmit(salvar)}>Publicar anúncio</Link>
                </Col>
            </Row>
        </Card>
    </div>
  )
}

export default InserirCarro