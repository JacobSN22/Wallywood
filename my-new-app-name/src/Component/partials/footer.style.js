import styled from 'styled-components'

export const FooterStyle = styled.footer`
    footer {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
    }

    h3 {
        margin: 0 0 0.5em 0;
        font-family: ${props => props.theme.fonts[0]};
        color: ${props => props.theme.colors.secondary};
    }

    p {
        margin: 0 0 0.3em 0;
        font-family: ${props => props.theme.fonts[0]};
        color: ${props => props.theme.colors.tertiary};
    }

    svg {
        text-align: right;
    }
`