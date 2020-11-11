import React, {Component} from "react";
import {Book, Books} from "../reducers/book";
import { RouteComponentProps, withRouter, useHistory } from 'react-router-dom';
import {connect} from "react-redux";
import {addBook} from "../actions/booksAction";
import AddBookForm from "./AddBookForm";

export interface BookValues {
    //book: Book,
    //addBook: (book: Book) => {}
}

class CreateBook extends Component<BookValues> {
    constructor(props) {
        super(props);

    }
    renderForm(): JSX.Element | null {
        return <AddBookForm />
    }

    render() {

        return (
            <div>
                {this.renderForm()}
            </div>
    );
    }

}

export default connect(null, {addBook})(CreateBook)

