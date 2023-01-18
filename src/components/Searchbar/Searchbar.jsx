import { Component } from "react";

export class Searchbar extends Component {

    state = {
        query: '',
    }


    handleChange = e => {
        this.setState({ query: e.target.value })
    }

    handleSubmit = e => {
        e.preventDefault();

        if( this.state.query.trim() === '' ) {
            return alert('empty field, enter the query')
        }

        this.props.onSubmit(this.state.query);
    }

    render() {

        const { query } = this.state;

        return(
            <header className="searchbar">
                <form onSubmit={this.handleSubmit} className="form">
                    <button
                    type="submit" 
                    className="button">
                    <span className="button-label">Search</span>
                    </button>

                    <input
                    onChange={this.handleChange}
                    value={query}
                    name='name'
                    className="input"
                    type="text"
                    autoComplete="off"
                    placeholder="Search images and photos"
                    />
                </form>
            </header>
        )
    }
}