import React from "react";
import {Link, withRouter} from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
        display: flex;
        position: fixed;
        color: white;
        top : 0;
        left : 0;
        height : 50px;
        align-items: center;
        z-index : 10;
     
    `

const Ul = styled.ul`
        display: flex;
        margin-left:10px;
    `

const Li = styled.li`
        padding:10px;
        border-bottom:5px solid ${props => props.current ? "red" : "transparent"};
        transition:border-bottom 0.5s ease-in-out;
    `

const SLink = styled(Link)`
    
    `

export default withRouter(({location : {pathname}}) => (
        <Header>
            <Ul>
                <Li current={pathname === "/"}><SLink to="/">Movies</SLink></Li>
                <Li current={pathname === "/tv"}><SLink to="/tv">TV</SLink></Li>
                <Li current={pathname === "/search"}><SLink to="/search">Search</SLink></Li>
            </Ul>
        </Header>
))