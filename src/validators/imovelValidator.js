const imovelValidator = {
    condominio: {
        required: "O campo Valor do Condomínio é Obrigatório",
        minLength: {
            value: 2,
            message: "A quantidade mínima de caracteres é 2"
        },
        maxLength: {
            value: 5,
            message: "A quantidade máxima de caracteres é 5"
        },
    },
    titulo: {
        required: "O campo Título do Anúncio é Obrigatório",
        minLength: {
            value: 2,
            message: "A quantidade mínima de caracteres é 2"
        },
        maxLength: {
            value: 30,
            message: "A quantidade máxima de caracteres é 30"
        }
    },
    area: {
        required: "O campo Área útil é Obrigatório",
        minLength: {
            value: 2,
            message: "A quantidade mínima de caracteres é 2"
        },
        maxLength: {
            value: 10,
            message: "A quantidade máxima de caracteres é 10"
        }
    },
    quartos: {
        required: "O campo Quartos é Obrigatório",
        minLength: {
            value: 1,
            message: "A quantidade mínima de caracteres é 1"
        },
        maxLength: {
            value: 10,
            message: "A quantidade máxima de caracteres é 10"
        }
    },
    banheiros: {
        required: "O campo Banheiros é Obrigatório",
        minLength: {
            value: 1,
            message: "A quantidade mínima de caracteres é 1"
        },
        maxLength: {
            value: 10,
            message: "A quantidade máxima de caracteres é 10"
        }
    },
    vagas: {
        required: "O campo Vagas é Obrigatório",
        minLength: {
            value: 1,
            message: "A quantidade mínima de caracteres é 1"
        },
        maxLength: {
            value: 10,
            message: "A quantidade máxima de caracteres é 10"
        }
    },
    detalhes: {
        required: false
    },
    cep: {
        required: "O campo CEP é Obrigatório",
        minLength: {
            value: 9,
            message: "A quantidade mínima de caracteres é 9"
        }
    },
    endereco: {
        required: "O campo Endereço é Obrigatório",
        minLength: {
            value: 1,
            message: "A quantidade mínima de caracteres é 3"
        },
        maxLength: {
            value: 30,
            message: "A quantidade máxima de caracteres é 30"
        }
    },
    valor: {
        required: "O campo Valor é Obrigatório",
        minLength: {
            value: 2,
            message: "A quantidade mínima de caracteres é 2"
        },
        maxLength: {
            value: 20,
            message: "A quantidade máxima de caracteres é 20"
        }
    },
    telefone: {
        required: "O campo Telefone é Obrigatório",
        minLength: {
            value: 16,
            message: "A quantidade mínima de caracteres é 11"
        }
    },
    foto: {
        required: false
    }
}

export default imovelValidator