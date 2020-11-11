import React, {Component} from "react";
import {Book} from "../reducers/book";

export interface SingleBookItemProps {
    book: Book,
}

class SingleBookItem extends Component<SingleBookItemProps> {
    constructor(props:SingleBookItemProps) {
        super(props);
    }

    render() {

        return (
            <div>
                Book Title{this.props.book.title}
            </div>
        );
    }

}


export default SingleBookItem;
