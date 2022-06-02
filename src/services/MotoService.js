class MotoService {
    getAll(){
        const moto = localStorage.getItem('moto')
        return moto ? JSON.parse(moto) : []
    }

    get(id){
        const moto = this.getAll()
        return moto[id]
    }

    create(dados){
        const moto = this.getAll()
        moto.push(dados)
        localStorage.setItem('moto', JSON.stringify(moto))
    }

    update(id, dados){
        const moto = this.getAll()
        moto.splice(id, 1, dados)
        localStorage.setItem('moto', JSON.stringify(moto))
    }

    delete(id){
        const moto = this.getAll()
        moto.splice(id, 1)
        localStorage.setItem('moto', JSON.stringify(moto))
    }
}

export default new MotoService()