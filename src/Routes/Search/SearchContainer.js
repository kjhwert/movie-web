import React from "react";
import SearchPresenter from "./SearchPresenter";
import {movieApi, tvApi} from "../../api";

export default class extends React.Component {
    state = {
        movieResults : null,
        tvResults : null,
        searchTerm  : "",
        error: null,
        loading : true
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const {searchTerm} = this.state;
        if (searchTerm !== "") {
            this.searchByTerm();
        }
    }

    updateSearchTerm = (e) => {
        const {target : {value}} = e;
        this.setState({searchTerm : value})
    }

    searchByTerm = async() => {
        const {searchTerm} = this.state;
        this.setState({loading : true});

        try {
            const {data : {results : movieResults}} = await movieApi.search(searchTerm);
            const {data : {results : tvResults}} = await tvApi.search(searchTerm);
            this.setState({
                movieResults,
                tvResults,
            })
        } catch (e) {
            this.setState({error : "Cant't find results."})
        } finally {
            this.setState({
                loading: false,
            })
        }
    }

    render() {
        const {movieResults, tvResults, searchTerm, error, loading} = this.state;

        return (
            <SearchPresenter
                movieResults={(movieResults && movieResults.length > 0) ? movieResults : null}
                tvResults={(tvResults && tvResults.length > 0) ? tvResults : null}
                searchTerm={searchTerm}
                error={error}
                loading={loading}
                handleSubmit={this.handleSubmit}
                updateSearchTerm={this.updateSearchTerm}
            />)
    }
}