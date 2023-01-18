import { Component } from "react";
import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SearchbarHeader, SearchbarForm, SearchbarInput, SearchbarBtn, LabelBtn } from './Searchbar.styled';
import PropTypes from 'prop-types';

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
            return toast.error('empty field, enter the query')
        }

        this.props.onSubmit(this.state.query);
    }

    render() {

        const { query } = this.state;

        return(
            <SearchbarHeader className="searchbar">
                <SearchbarForm onSubmit={this.handleSubmit} className="form">
                    <SearchbarBtn
                    type="submit">
                    <LabelBtn>Search</LabelBtn>
                    </SearchbarBtn>

                    <SearchbarInput
                    onChange={this.handleChange}
                    value={query}
                    name='name'
                    type="text"
                    autoComplete="off"
                    placeholder="Search images and photos"
                    />
                </SearchbarForm>
            </SearchbarHeader>
        )
    }
}

Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};