import React, {Component} from "react";
import {Book, Books} from "../reducers/book";
import {fetchBooks} from '../actions/booksAction';
import {RootState} from "../store";
import {connect} from "react-redux";
import SingleBookItem from "./SingleBookItem";

export interface BookListProps {
    books: Books,
    fetchBooks: () => any
}

class AllBooks extends Component<BookListProps> {
    componentDidMount(): void {
        this.props.fetchBooks();
    }

    renderBooks(): JSX.Element[] | null {
        const bookList: Books = this.props.books;
        const books: Book[] = [];
        for (let index in bookList) {
            books[index] = bookList[index]
        }
        return books.map((book: Book) => {
            return <SingleBookItem book={book} key={book.id}/>
        })
    }

    render() {
        return (
            <div>
                {this.renderBooks()}
            </div>
        );
    }

}

const mapStateToProps = (state: RootState) => {
    return {
        books: state.books.books
    };
}


export default connect(mapStateToProps, {fetchBooks})(AllBooks);
