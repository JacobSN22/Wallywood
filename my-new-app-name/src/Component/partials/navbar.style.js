import styled from 'styled-components'

export const Navbar = styled.nav`

    nav {
        text-align: right;
        margin: 0 0 0 24.4%;
    }

    li {
        display: inline;
        margin: 0 1em;
    }

    a {
        text-decoration: none;
        color: ${props => props.theme.colors.tertiary};
        font-family: ${props => props.theme.fonts[0]};
    }

    a:hover {
        color: ${props => props.theme.colors.secondary};

    }
`