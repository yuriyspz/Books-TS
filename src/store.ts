import {bookReducer, BooksState} from "./reducers/book";
import {BooksAction} from "./actions/booksAction";
import { composeWithDevTools } from 'redux-devtools-extension';
import {applyMiddleware, createStore, combineReducers} from "redux";
import reduxThunk, { ThunkMiddleware } from 'redux-thunk';

export interface RootState {
    readonly books: BooksState;
}

const rootReducer = combineReducers<RootState>({
    books: bookReducer
})

export type RootActions = BooksAction;

export const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(reduxThunk as ThunkMiddleware<RootState, RootActions>))
)
