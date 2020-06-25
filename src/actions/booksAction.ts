import { ThunkAction } from 'redux-thunk';
import { Dispatch } from 'redux';
import {Book, Books} from "../reducers/book";
import {RootActions, RootState} from "../store";
import {AxiosResponse} from "axios";
import axios from "axios";
const url = `https://spring-boot-mysql-server-part0.herokuapp.com/api`;

export type ThunkResult<R> = ThunkAction<R, RootState, undefined, RootActions>;

export enum BooksActionTypes {
    FETCH_BOOKS = 'FETCH_BOOKS',
    FETCH_BOOKS_SUCCESS = 'FETCH_BOOKS_SUCCESS',
    FETCH_BOOKS_FAIL = 'FETCH_BOOKS_FAIL',
    FETCH_BOOK = 'FETCH_BOOK',
    FETCH_BOOK_SUCCESS = 'FETCH_BOOK_SUCCESS',
    FETCH_BOOK_FAIL = 'FETCH_BOOK_FAIL',
    ADD_BOOK = 'ADD_BOOK',
    ADD_BOOK_SUCCESS = 'ADD_BOOK_SUCCESS',
    ADD_BOOK_FAIL = 'ADD_BOOK_FAIL',
    EDIT_BOOK = 'EDIT_BOOK',
    EDIT_BOOK_SUCCESS = 'EDIT_BOOK_SUCCESS',
    EDIT_BOOK_FAIL = 'EDIT_BOOK_FAIL',
    DELETE_BOOK = 'DELETE_BOOK',
    DELETE_BOOK_SUCCESS = 'DELETE_BOOK_SUCCESS',
    DELETE_BOOK_FAIL = 'DELETE_BOOK_FAIL'
}
interface FetchBooks {
    type: BooksActionTypes.FETCH_BOOKS;
}

interface FetchBooksSuccess {
    type: BooksActionTypes.FETCH_BOOKS_SUCCESS;
    payload: Books;
}

interface FetchBooksFail {
    type: BooksActionTypes.FETCH_BOOKS_FAIL;
}

export const fetchBooks = (): ThunkResult<void> => async dispatch => {
    handleFetchBooks(dispatch);
    try {
        const response: AxiosResponse<Book[]> = await axios.create({baseURL: url}).get('/books');
        handleFetchBooksSuccess(dispatch, response.data);
    } catch (e) {
        handleFetchBooksFail(dispatch);
    }
};
export const handleFetchBooks = (dispatch: Dispatch<FetchBooks>) => {
    dispatch({ type: BooksActionTypes.FETCH_BOOKS });
};

export const handleFetchBooksSuccess = (
    dispatch: Dispatch<FetchBooksSuccess>,
    response: Books
) =>
    dispatch({
        type: BooksActionTypes.FETCH_BOOKS_SUCCESS,
        payload: response
    });

export const handleFetchBooksFail = (dispatch: Dispatch<FetchBooksFail>) => {
    dispatch({
        type: BooksActionTypes.FETCH_BOOKS_FAIL
    });
};
export type BooksAction =
    | FetchBooks
    | FetchBooksSuccess
    | FetchBooksFail;
    // | FetchBook
    // | FetchBooksuccess
    // | FetchBookFail
    // | AddBook
    // | AddBooksuccess
    // | AddBookFail
    // | EditBook
    // | EditBooksuccess
    // | EditBookFail
    // | DeleteBook
    // | DeleteBooksuccess
    // | DeleteBookFail;
