import React, {Component} from "react";
import {Book} from "../reducers/book";
import {fetchBooks} from '../actions/booksAction';
import {RootState} from "../store";
import {connect} from "react-redux";

export interface BookListProps {
    books: Book[],
    fetchBooks: () => any
}

class allBooks extends Component<BookListProps>{
    componentDidMount(): void {
        this.props.fetchBooks();
    }

    render() {
        const bookList = this.props.books;
        console.log(bookList)
        return (
            <div>
                {bookList.map(x=>console.log(x))}
            </div>
        );
    }

}

const mapStateToProps = (state: RootState) =>{
    return {
        books: state.books.books
    };
}


export default connect(mapStateToProps, {fetchBooks})(allBooks);
