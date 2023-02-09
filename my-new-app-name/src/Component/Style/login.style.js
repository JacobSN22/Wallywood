import styled from 'styled-components'

export const LoginStyle = styled.div`
    h2 {
        color: ${props => props.theme.colors.secondary};
        font-family: ${props => props.theme.fonts[0]};
        margin: 1em 0 0 0;
    }

    label {
        display: block;
        color: ${props => props.theme.colors.tertiary};
        font-family: ${props => props.theme.fonts[0]};
    }

    input {
        padding: 0.4em 15em 0 0.4em;
        border-width: 0;
        box-shadow: 0px -0.5px 0px 0px #D97852;
    }

    span {
        color: ${props => props.theme.colors.secondary};
    }

    button {
        display: block; 
        padding: 0.5em 1em;
        background-color: ${props => props.theme.colors.quinary};
        border-width: 1px;
        border-radius: 3px;
        margin: 1em 0 10em 0;
    }

    button:hover {
        cursor: pointer;
        background-color: ${props => props.theme.colors.senary};
        color: ${props => props.theme.colors.light};
    }
`