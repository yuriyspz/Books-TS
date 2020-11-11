import {Reducer} from "redux";
import {BooksAction, BooksActionTypes} from "../actions/booksAction";

export interface Book {
    id: number,
    title: string,
    author: string,
    description: string,
    published: number
}

export interface Books {
    [id: number]: Book;
}

export interface BooksState {
    books: Books,
    loading: boolean,
    error: string | null
}

const initialState:BooksState = {
    books: {},
    loading: false,
    error: null
}

export const bookReducer: Reducer<BooksState, BooksAction> = (
    state = initialState, action
) => {
    switch (action.type) {
        case(BooksActionTypes.FETCH_BOOKS):
            return {...state, loading: true};
        case(BooksActionTypes.FETCH_BOOKS_SUCCESS):
            return {
                ...state,
                books: action.payload
                , loading: false
            };
        case(BooksActionTypes.ADD_BOOK):
            return {...state, loading: true};
        case(BooksActionTypes.ADD_BOOK_SUCCESS):
            return {
                ...state,
                books: action.payload
                , loading: false
            };
        default:
            return state
    }
}
