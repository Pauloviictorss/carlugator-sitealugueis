class ImovelService {
    getAll(){
        const casa = localStorage.getItem('casa')
        return casa ? JSON.parse(casa) : []
    }

    get(id){
        const casa = this.getAll()
        return casa[id]
    }

    create(dados){
        const casa = this.getAll()
        casa.push(dados)
        localStorage.setItem('casa', JSON.stringify(casa))
    }

    update(id, dados){
        const casa = this.getAll()
        casa.splice(id, 1, dados)
        localStorage.setItem('casa', JSON.stringify(casa))
    }

    delete(id){
        const casa = this.getAll()
        casa.splice(id, 1)
        localStorage.setItem('casa', JSON.stringify(casa))
    }
}

export default new ImovelService()