import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "../../Components/Loader";
import Section from "../../Components/Section";
import Message from "../../Components/Message";
import Poster from "../../Components/Poster";

const Container = styled.div`
    padding:0 20px;
`;

const Form = styled.form`
    margin-bottom: 50px;
    width: 100%;
`;

const Input = styled.input`
    all:unset;
    font-size: 18px;
    width: 100%;
`;

const SearchPresenter = ({movieResults,tvResults,searchTerm,error,loading,handleSubmit, updateSearchTerm}) =>
    <Container>
        <Form onSubmit={handleSubmit}>
            <Input placeholder="search" value={searchTerm} onChange={updateSearchTerm} />
        </Form>
        {loading ? <Loader/> :
            // Fragment
            <>
                {movieResults &&
                <Section title="Movie Results">
                    {movieResults.map(movie=>
                        <Poster key={movie.id}
                                imageUrl={movie.poster_path}
                                rating={movie.vote_average}
                                title={movie.title}
                                id={movie.id}
                                year={movie.release_date.substring(0, 4)}
                                isMovie={true}/>)}
                </Section>}
                {tvResults &&
                <Section title="TV Results">
                    {tvResults.map(tv=>
                        <Poster key={tv.id}
                                imageUrl={tv.poster_path}
                                rating={tv.vote_average}
                                title={tv.name}
                                id={tv.id}
                                year={tv.first_air_date.substring(0, 4)}
                                />)}
                </Section>}
                {error && <Message text={error} color='red'/>}
                {!movieResults && !tvResults && <Message color="#ffffff" text="Nothing found"/>}
            </>
        }
    </Container>;

SearchPresenter.propTypes = {
    movieResults:PropTypes.array,
    tvResults:PropTypes.array,
    searchTerm:PropTypes.string,
    loading:PropTypes.bool.isRequired,
    error:PropTypes.string,
    handleSubmit:PropTypes.func.isRequired,
    updateSearchTerm:PropTypes.func.isRequired
}

export default SearchPresenter;