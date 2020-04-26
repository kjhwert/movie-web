import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";
import EmptyImage from "../Assets/noPosterSmall.png"

const Container = styled.div`
    display: flex;
    flex-direction: column;
    @media screen and (max-width: 414px) {
        width: 125px;
        margin-right:10px;
        
        &:nth-child(20) {
            margin-right: 0;
        }
    }
`

const Image = styled.div`
    background-size: cover;
    background-image: url(${props => props.bgUrl});
    background-position: center center;
    height: 180px;
    transition: opacity 0.2s ease-in-out;
`

const Rating = styled.span`
    font-size: 12px;
    position: absolute;
    right:5px;
    bottom:2px;
    opacity: 0;
`

const ImageContainer = styled.div`
    &:hover {
        ${Image} {
          opacity: 0.3;
        }
        ${Rating} {
          opacity: 1;
        }
    }
    position: relative;
`

const Title = styled.span`
    font-weight: bold;
    font-size: 12px;
`

const Year = styled.span`
    font-size: 10px;
    color:#606060;
`

const Poster = ({id, imageUrl, title, rating, year, isMovie}) => (
    <Link to={isMovie ? `/movie/${id}` : `/tv/${id}`}>
        <Container>
            <ImageContainer>
                <Image bgUrl={imageUrl ? `https://image.tmdb.org/t/p/w300${imageUrl}` : EmptyImage}/>
                <Rating>
                <span role="img" aria-label="rating">
                    ⭐️
                </span>{" "}
                    {rating}/10
                </Rating>
            </ImageContainer>
            <Title>{title.length > 16 ? `${title.substring(0,16)}...` : title}</Title>
            <Year>{year}</Year>
        </Container>
    </Link>
)

Poster.propTypes = {
    id:PropTypes.number.isRequired,
    imageUrl:PropTypes.string,
    title:PropTypes.string.isRequired,
    rating:PropTypes.number,
    year:PropTypes.string,
    isMovie:PropTypes.bool
}

export default Poster;