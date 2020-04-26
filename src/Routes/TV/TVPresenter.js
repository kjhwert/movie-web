import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "../../Components/Section";
import Loader from "../../Components/Loader";
import Message from "../../Components/Message";
import Poster from "../../Components/Poster";

const Container = styled.div`
        padding:0 20px;
     `
const TVPresenter = ({topRated, popular, airingToday, loading, error}) =>
    loading ? <Loader/> : (
        <Container>
            {topRated && topRated.length > 0 && (
                <Section title="Top Rated Shows">
                    {topRated.map(tv=>
                        <Poster key={tv.id}
                                imageUrl={tv.poster_path}
                                rating={tv.vote_average}
                                title={tv.name}
                                id={tv.id}
                                year={tv.first_air_date.substring(0, 4)}
                        />)}
                </Section>
            )}
            {popular && popular.length > 0 && (
                <Section title="Popular Shows">
                    {popular.map(tv=>
                    <Poster key={tv.id}
                                imageUrl={tv.poster_path}
                                rating={tv.vote_average}
                                title={tv.name}
                                id={tv.id}
                                year={tv.first_air_date.substring(0, 4)}
                    />)}
                </Section>
            )}
            {airingToday && airingToday.length > 0 && (
                <Section title="Airing Today Shows">
                    {airingToday.map(tv=>
                    <Poster key={tv.id}
                                imageUrl={tv.poster_path}
                                rating={tv.vote_average}
                                title={tv.name}
                                id={tv.id}
                                year={tv.first_air_date.substring(0, 4)}
                    />)}
                </Section>
            )}
            {error && <Message text={error} color='#ffffff'/>}
        </Container>
    )

TVPresenter.propTypes = {
    topRated:PropTypes.array,
    popular:PropTypes.array,
    airingToday:PropTypes.array,
    loading:PropTypes.bool.isRequired,
    error:PropTypes.string
}

export default TVPresenter;