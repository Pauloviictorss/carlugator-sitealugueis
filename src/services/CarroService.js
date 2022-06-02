class CarroService {
    getAll(){
        const carro = localStorage.getItem('carro')
        return carro ? JSON.parse(carro) : []
    }

    get(id){
        const carro = this.getAll()
        return carro[id]
    }

    create(dados){
        const carro = this.getAll()
        carro.push(dados)
        localStorage.setItem('carro', JSON.stringify(carro))
    }

    update(id, dados){
        const carro = this.getAll()
        carro.splice(id, 1, dados)
        localStorage.setItem('carro', JSON.stringify(carro))
    }

    delete(id){
        const carro = this.getAll()
        carro.splice(id, 1)
        localStorage.setItem('carro', JSON.stringify(carro))
    }
}

export default new CarroService()