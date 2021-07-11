import axiosApi from "../../axiosApi";
import * as types from '../types/typeBook'

const getBooksSuccess = data => ({type: types.GET_BOOKS_SUCCESS, data})
const getBooksRequest = () => ({type: types.GET_BOOKS_REQUEST})
const getBooksFailure = error => ({type: types.GET_BOOKS_FAILURE, error})

const putBookSuccess = () => ({type: types.PUT_BOOK_SUCCESS})
const putBookRequest = () => ({type: types.PUT_BOOK_REQUEST})
const putBookFailure = error => ({type: types.PUT_BOOK_FAILURE, error})

const searchBookSuccess = data => ({type: types.SEARCH_BOOK_SUCCESS, data})
const searchBookRequest = () => ({type: types.SEARCH_BOOK_REQUEST})
const searchBookFailure = error => ({type: types.SEARCH_BOOK_FAILURE, error})

export const clearSearchBook = () => ({type: types.CLEAR_SEARCH_BOOK})


export const getBooks = () => {
    return async (dispatch) => {
        try {
            dispatch(getBooksRequest())
            const res = await axiosApi.get('/books')
            dispatch(getBooksSuccess(res.data?.books))
        } catch (e) {
            dispatch(getBooksFailure(e))
        }
    }
}

export const putBook = (id, data) => {
    return async (dispatch) => {
        try {
            dispatch(putBookRequest())
            await axiosApi.put(`/books/${id}`, data)
            dispatch(getBooks())
            dispatch(putBookSuccess())
        } catch (e) {
            dispatch(putBookFailure(e))
        }
    }
}

export const searchBook = data => {
    return async (dispatch) => {
        try {
            dispatch(searchBookRequest())
            const res = await axiosApi.post('/search', data)
            dispatch(searchBookSuccess(res.data?.books))
        } catch (e) {
            dispatch(searchBookFailure(e))
        }
    }
}