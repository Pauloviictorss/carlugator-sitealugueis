class BarcoService {
    getAll(){
        const barco = localStorage.getItem('barco')
        return barco ? JSON.parse(barco) : []
    }

    get(id){
        const barco = this.getAll()
        return barco[id]
    }

    create(dados){
        const barco = this.getAll()
        barco.push(dados)
        localStorage.setItem('barco', JSON.stringify(barco))
    }

    update(id, dados){
        const barco = this.getAll()
        barco.splice(id, 1, dados)
        localStorage.setItem('barco', JSON.stringify(barco))
    }

    delete(id){
        const barco = this.getAll()
        barco.splice(id, 1)
        localStorage.setItem('barco', JSON.stringify(barco))
    }
}

export default new BarcoService()