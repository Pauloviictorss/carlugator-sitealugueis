const barcoValidator = {
    modelo: {
        required: "O campo Modelo é Obrigatório",
        minLength: {
            value: 3,
            message: "A quantidade mínima de caracteres é 3"
        },
        maxLength: {
            value: 50,
            message: "A quantidade máxima de caracteres é 20"
        },
    },
    marca: {
        required: "O campo Marca é Obrigatório",
        minLength: {
            value: 3,
            message: "A quantidade mínima de caracteres é 3"
        },
        maxLength: {
            value: 20,
            message: "A quantidade máxima de caracteres é 20"
        }
    },
    ano: {
        required: "O campo Ano é Obrigatório"
    },
    cor: {
        required: "O campo Cor é Obrigatório",
        minLength: {
            value: 3,
            message: "A quantidade mínima de caracteres é 3"
        },
        maxLength: {
            value: 10,
            message: "A quantidade máxima de caracteres é 10"
        }
    },
    passadores: {
        required: "O campo Marca dos Passadores é Obrigatório",
        minLength: {
            value: 2,
            message: "A quantidade mínima de caracteres é 2"
        },
        maxLength: {
            value: 10,
            message: "A quantidade máxima de caracteres é 7"
        }
    },
    valor: {
        required: "O campo Valor é Obrigatório",
        minLength: {
            value: 2,
            message: "A quantidade mínima de caracteres é 2"
        },
        maxLength: {
            value: 10,
            message: "A quantidade máxima de caracteres é 10"
        }
    },
    pneus: {
        required: "O campo Pneus é Obrigatório",
        minLength: {
            value: 2,
            message: "A quantidade mínima de caracteres é 2"
        },
        maxLength: {
            value: 10,
            message: "A quantidade máxima de caracteres é 4"
        }
    },
    aro: {
        required: "O campo Aro de Uso é Obrigatório",
        minLength: {
            value: 2,
            message: "A quantidade mínima de caracteres é 2"
        },
        maxLength: {
            value: 4,
            message: "A quantidade máxima de caracteres é 5"
        }
    },
    telefone: {
        required: "O campo Telefone é Obrigatório",
        minLength: {
            value: 16,
            message: "A quantidade mínima de caracteres é 11"
        }
    },
    cep: {
        required: "O campo CEP é Obrigatório",
        minLength: {
            value: 9,
            message: "A quantidade mínima de caracteres é 9"
        }
    },
    foto: {
        required: false
    }
}

export default barcoValidator