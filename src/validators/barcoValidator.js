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
    motor: {
        required: "O campo Motor é Obrigatório",
        minLength: {
            value: 3,
            message: "A quantidade mínima de caracteres é 3"
        },
        maxLength: {
            value: 20,
            message: "A quantidade máxima de caracteres é 20"
        }
    },
    potencia: {
        required: "O campo Potência é Obrigatório",
        minLength: {
            value: 2,
            message: "A quantidade mínima de caracteres é 2"
        },
        maxLength: {
            value: 7,
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
    horas: {
        required: "O campo Horas de Uso é Obrigatório",
        minLength: {
            value: 2,
            message: "A quantidade mínima de caracteres é 2"
        },
        maxLength: {
            value: 4,
            message: "A quantidade máxima de caracteres é 4"
        }
    },
    comprimento: {
        required: "O campo Comprimento de Uso é Obrigatório",
        minLength: {
            value: 2,
            message: "A quantidade mínima de caracteres é 2"
        },
        maxLength: {
            value: 4,
            message: "A quantidade máxima de caracteres é 5"
        }
    },
    identificacao: {
        required: "O campo Identificação é Obrigatório",
        minLength: {
            value: 7,
            message: "A quantidade mínima de caracteres é 7"
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
            message: "A quantidade mínima de caracteres é 7"
        }
    },
    foto: {
        required: false
    }
}

export default barcoValidator