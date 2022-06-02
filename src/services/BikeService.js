class BikeService {
    getAll(){
        const bike = localStorage.getItem('bike')
        return bike ? JSON.parse(bike) : []
    }

    get(id){
        const bike = this.getAll()
        return bike[id]
    }

    create(dados){
        const bike = this.getAll()
        bike.push(dados)
        localStorage.setItem('bike', JSON.stringify(bike))
    }

    update(id, dados){
        const bike = this.getAll()
        bike.splice(id, 1, dados)
        localStorage.setItem('bike', JSON.stringify(bike))
    }

    delete(id){
        const bike = this.getAll()
        bike.splice(id, 1)
        localStorage.setItem('bike', JSON.stringify(bike))
    }
}

export default new BikeService()