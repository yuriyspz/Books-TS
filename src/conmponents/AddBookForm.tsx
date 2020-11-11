import React, {Component} from "react";


class AddBookForm extends Component {
    handleInputChange = (e:any) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    // handleSubmit = (e:any) => {
    //     e.preventDefault();
    //     if (this.state.title.trim() && this.state.author.trim() && this.state.description.trim() && this.state.published.trim()) {
    //         this.props.addBook(this.state);
    //     }
    // };

    render() {

        return (
            <div>
                <div>Form to submit</div>
                <form>
                    <label>
                        Название:
                        <input type="text"
                               name="title"
                               onChange={this.handleInputChange}
                        />
                    </label>
                    <label>
                        Автор:
                        <input type="text"
                               name="author"
                               onChange={this.handleInputChange}
                        />
                    </label>
                    <label>
                        Описание:
                        <input type="text"
                               name="description"
                               onChange={this.handleInputChange}
                        />
                    </label>
                    <label>
                        Дата публикации:
                        <input type="number"
                               name="published"
                               onChange={this.handleInputChange}
                        />
                    </label>

                    <button>ADD BOOK</button>
                </form>
            </div>
        );
    }

}


export default AddBookForm;
