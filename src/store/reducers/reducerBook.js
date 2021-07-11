import * as types from '../types/typeBook'

const initialState = {
    books: [],
    searchBooks: [],
    loading: false,
    error: null
}

const reducer = (state = initialState, action) => {
    switch (action.type){
        case types.SEARCH_BOOK_SUCCESS:
            return {...state, searchBooks: action.data, loading: false, error: null}
        case types.SEARCH_BOOK_FAILURE:
            return {...state, loading: false, error: action.error, searchBooks: []}
        case types.SEARCH_BOOK_REQUEST:
            return {...state, loading: true}
        case types.GET_BOOKS_SUCCESS:
            return {...state, books: action.data, error: null, loading: false}
        case types.GET_BOOKS_REQUEST:
            return {...state, loading: true}
        case types.CLEAR_SEARCH_BOOK:
            return {...state, searchBooks: []}
        case types.GET_BOOKS_FAILURE:
            return {...state, error: null, loading: false}
        default:
            return state
    }
}

export default reducer