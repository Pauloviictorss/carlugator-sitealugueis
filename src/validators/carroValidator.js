const carroValidator = {
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
    montadora: {
        required: "O campo Montadora é Obrigatório",
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
            value: 20,
            message: "A quantidade máxima de caracteres é 20"
        }
    },
    quilometragem: {
        required: "O campo Quilometragem é Obrigatório",
        minLength: {
            value: 1,
            message: "A quantidade mínima de caracteres é 1"
        },
        maxLength: {
            value: 7,
            message: "A quantidade máxima de caracteres é 7"
        }
    },
    combustivel: {
        required: "O campo Combustível é Obrigatório"
    },
    valor: {
        required: "O campo Valor é Obrigatório",
        minLength: {
            value: 3,
            message: "A quantidade mínima de caracteres é 3"
        },
        maxLength: {
            value: 10,
            message: "A quantidade máxima de caracteres é 10"
        }
    },
    placa: {
        required: "O campo Placa é Obrigatório",
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
        },
    },
    cep: {
        required: "O campo CEP é Obrigatório",
        minLength: {
            value: 9,
            message: "A quantidade mínima de caracteres é 8"
        }
    },
    foto: {
        required: false
    }
}

export default carroValidator