import {Reducer} from "redux";
import {BooksAction} from "../actions/booksAction";

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

const initialState = {
    books: {},
    loading: false,
    error: null
}

export const bookReducer: Reducer<BooksState, BooksAction> = (
    state = initialState, action
) => {
    switch (action.type) {
        default: return state
    }
}
