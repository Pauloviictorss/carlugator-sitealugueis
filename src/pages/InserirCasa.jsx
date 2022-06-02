import { Button } from 'bootstrap';
import React, { useEffect } from 'react'
import { Card, Col, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link, useNavigate, useParams } from 'react-router-dom';
import MenuServico from '../components/MenuServico';
import imovelValidator from '../validators/imovelValidator';
import ImovelService from '../services/ImovelService';
import { mask } from 'remask';
import Swal from 'sweetalert2';

const InserirCasa = () => {

    const params = useParams()
    const navigate = useNavigate()
    const { register, handleSubmit, setValue, formState: { errors } } = useForm();


    useEffect(() => {
        if(params.id) {
            const imovel = ImovelService.get(params.id)

            for (let campo in imovel) {
                setValue(campo, imovel[campo])
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
            ImovelService.update(params.id, dados) 
          } else {
            ImovelService.create(dados)
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
        <Card className='mt-5 align-items-center p-5 mb-5'>
            <Card className='align-items-center bg-danger text-light' style={{ width: '550px' }}>
                <h2>Anunciar Residência</h2>
            </Card>
            <Card className='align-items-center bg-dark text-light mb-5' style={{ width: '550px', height: '20px' }}>
                <h2 style={{ fontSize: '8pt'}} >Carlugator - Sua Vitrine de Aluguéis!</h2>
            </Card>

            <Row>
                <Row>
                    <Form.Group className='mb-3' controlId="condominio">
                        <Form.Control isInvalid={errors.titulo} {...register("titulo", imovelValidator.titulo)} type="text" placeholder="Título do Anúncio"/>
                        {errors.titulo && <span className='text-danger'>{errors.titulo.message}</span>}
                    </Form.Group>
                    <Col>
                        <Form.Group className='mb-3' controlId="banheiros">
                            <Form.Control isInvalid={errors.banheiros} {...register("banheiros", imovelValidator.banheiros)} type="number" placeholder="Banheiros"/>
                            {errors.banheiros && <span className='text-danger'>{errors.banheiros.message}</span>}
                </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className='mb-3' controlId="quartos">
                            <Form.Control isInvalid={errors.quartos} {...register("quartos", imovelValidator.quartos)} type="number" placeholder="Quartos"/>
                            {errors.quartos && <span className='text-danger'>{errors.quartos.message}</span>}
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Form.Group className='mb-3' controlId="area">
                        <Form.Control isInvalid={errors.area} {...register("area", imovelValidator.area)} type="number" placeholder="Área útil em m²"/>
                        {errors.area && <span className='text-danger'>{errors.area.message}</span>}
                    </Form.Group>
                    <Form.Group className='mb-3' controlId="vagas">
                        <Form.Control isInvalid={errors.vagas} {...register("vagas", imovelValidator.vagas)} type="number" placeholder="Vagas na Garagem"/>
                        {errors.vagas && <span className='text-danger'>{errors.vagas.message}</span>}
                    </Form.Group>
                    <Form.Group className='mb-3' controlId="condominio">
                        <Form.Control isInvalid={errors.condominio} {...register("condominio", imovelValidator.condominio)} type="number" placeholder="Valor do Condomínio"/>
                        {errors.condominio && <span className='text-danger'>{errors.condominio.message}</span>}
                    </Form.Group>
                    <Form.Group className='mb-3' controlId="detalhes">
                        <Form.Control isInvalid={errors.detalhes} {...register("detalhes", imovelValidator.detalhes)}  type="text" placeholder="Detalhes do imóvel"/>
                    </Form.Group>
                </Row>
                <Row>
                    <Col>
                        <Form.Group className='mb-3' controlId="cidade">
                            <Form.Select {...register("cidade")} aria-label="Default select example">
                                <option disabled selected>Cidade</option>
                                <option value="Águas Claras">Águas Claras</option>
                                <option value="Taguatinga">Taguatinga</option>
                                <option value="Ceilândia">Ceilândia</option>
                                <option value="Park Way">Park Way</option>
                                <option value="Guará">Guará</option>
                                <option value="Gama">Gama</option>
                                <option value="Vicente Pires">Vicente Pires</option>
                                <option value="Núcleo Bandeirante">Núcleo Bandeirante</option>
                                <option value="Asa Sul">Asa Sul</option>
                                <option value="Asa Norte">Asa Norte</option>
                            </Form.Select>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className='mb-3' controlId="cep">
                            <Form.Control isInvalid={errors.cep}
                                {...register("cep", imovelValidator.cep)} 
                                type="text" 
                                placeholder="CEP"
                                mask="99999-999" 
                                onChange={handleChange}
                            />
                            {errors.cep && <span className='text-danger'>{errors.cep.message}</span>}
                        </Form.Group>
                    </Col>
                    <Form.Group className='mb-3' controlId="endereco">
                        <Form.Control isInvalid={errors.endereco} {...register("endereco", imovelValidator.endereco)} type="text" placeholder="Endereço"/>
                        {errors.endereco && <span className='text-danger'>{errors.endereco.message}</span>}
                    </Form.Group>
                </Row>
                <Row>
                    <Form.Group className='mb-3' controlId="telefone">
                        <Form.Control 
                            isInvalid={errors.telefone} 
                            {...register("telefone", imovelValidator.telefone)} 
                            type="text" 
                            placeholder="Telefone"
                            mask="(99) 9 9999-9999" 
                            onChange={handleChange}
                        />
                        {errors.telefone && <span className='text-danger'>{errors.telefone.message}</span>}
                    </Form.Group>
                    <Form.Group className='mb-3' controlId="foto">
                        <Form.Control {...register("foto", imovelValidator.foto)} type="text" placeholder="Insira o link da imagem"/>
                    </Form.Group>
                    <Form.Group className='mb-3' controlId="valor">
                        <Form.Control isInvalid={errors.valor} {...register("valor", imovelValidator.valor)} type="text" placeholder="Valor"/>
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

export default InserirCasa