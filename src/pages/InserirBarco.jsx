import React, { useEffect } from 'react'
import { Card, Col, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link, useNavigate, useParams } from 'react-router-dom';
import MenuServico from '../components/MenuServico';
import BarcoService from '../services/BarcoService';
import barcoValidator from '../validators/barcoValidator';
import { mask } from 'remask';
import Swal from 'sweetalert2';

const InserirBarco = () => {

    const params = useParams()
    const navigate = useNavigate()
    const { register, handleSubmit, setValue, formState: { errors } } = useForm();

    useEffect(() => {
        if(params.id) {
            const barco = BarcoService.get(params.id)

            for (let campo in barco) {
                setValue(campo, barco[campo])
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
            BarcoService.update(params.id, dados) 
          } else {
            BarcoService.create(dados)
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
        <Card className='mt-5 align-items-center p-5'>
            <Card className='align-items-center bg-danger text-light' style={{ width: '550px' }}>
                <h2>Anunciar Barco</h2>
            </Card>
            <Card className='align-items-center bg-dark text-light mb-5' style={{ width: '550px', height: '20px' }}>
                <p style={{ fontSize: '8pt'}} >Carlugator - Sua Vitrine de Aluguéis!</p>
            </Card>

            <Row>
                <Row>
                    <Col>
                        <Form.Group className='mb-3' controlId="modelo">
                            <Form.Control isInvalid={errors.modelo} {...register("modelo", barcoValidator.modelo)} type="text" placeholder="Modelo"/>
                            {errors.modelo && <span className='text-danger'>{errors.modelo.message}</span>}
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className='mb-3' controlId="marca">
                            <Form.Control isInvalid={errors.marca} {...register("marca", barcoValidator.marca)} type="text" placeholder="Marca"/>
                            {errors.marca && <span className='text-danger'>{errors.marca.message}</span>}
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Form.Group className='mb-3' controlId="ano">
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
                        <Form.Group className='mb-3' controlId="motor">
                            <Form.Control isInvalid={errors.motor} {...register("motor", barcoValidator.motor)}type="text" placeholder="Motor"/>
                            {errors.motor && <span className='text-danger'>{errors.motor.message}</span>}
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className='mb-3' controlId="potencia">
                            <Form.Control isInvalid={errors.potencia} {...register("potencia", barcoValidator.potencia)} type="number" placeholder="Potência"/>
                            {errors.potencia && <span className='text-danger'>{errors.potencia.message}</span>}
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group className='mb-3' controlId="comprimento">
                            <Form.Control isInvalid={errors.comprimento} {...register("comprimento", barcoValidator.comprimento)} type="number" placeholder="Comprimento"/>
                            {errors.comprimento && <span className='text-danger'>{errors.comprimento.message}</span>}
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className='mb-3' controlId="horas">
                            <Form.Control isInvalid={errors.horas} {...register("horas", barcoValidator.horas)} type="number" placeholder="Horas de uso"/>
                            {errors.horas && <span className='text-danger'>{errors.horas.message}</span>}
                        </Form.Group>
                    </Col>
                    <Form.Group className='mb-3' controlId="foto">
                        <Form.Control {...register("foto", barcoValidator.foto)} type="text" placeholder="Insira o link da imagem"/>
                    </Form.Group>
                    <Form.Group className='mb-3' controlId="identificacao">
                        <Form.Control 
                            isInvalid={errors.identificacao} 
                            {...register("identificacao", barcoValidator.identificacao)} 
                            type="text" 
                            placeholder="Identificação"
                            mask="AAA99A9" 
                            onChange={handleChange}
                        />
                        {errors.identificacao && <span className='text-danger'>{errors.identificacao.message}</span>}
                    </Form.Group>
                    <Col>
                        <Form.Group className='mb-3' controlId="telefone">
                            <Form.Control 
                                isInvalid={errors.telefone} 
                                {...register("telefone", barcoValidator.telefone)} 
                                type="text" 
                                placeholder="Telefone"
                                mask="(99) 9 9999-9999" 
                                onChange={handleChange}
                            />
                            {errors.telefone && <span className='text-danger'>{errors.telefone.message}</span>}
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className='mb-3' controlId="cep">
                            <Form.Control 
                                isInvalid={errors.cep} 
                                {...register("cep", barcoValidator.cep)} 
                                type="text" 
                                placeholder="CEP"
                                mask="99999-999" 
                                onChange={handleChange}
                            />
                            {errors.cep && <span className='text-danger'>{errors.cep.message}</span>}
                        </Form.Group>
                    </Col>
                    <Form.Group className='mb-3' controlId="valor">
                        <Form.Control isInvalid={errors.valor} {...register("valor", barcoValidator.valor)} type="number" placeholder="Valor"/>
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

export default InserirBarco