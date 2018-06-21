import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    todo: () => ({
        description: "Ler Livro",
        List: [{
            _id: 1,
            description: 'Pagar fatura do cartão',
            done: true
        },
        {
            _id: 1,
            description: 'Reunião com a equipe às 10:00',
            done: false
        },
        {
            _id: 1,
            description: 'Consulta méddia depois do almoço',
            done: false
        }]
    })
})

export default rootReducer