import styled from 'styled-components'

export const OmOsStyle = styled.div`
    h2 {
        color: ${props => props.theme.colors.secondary};
        font-family: ${props => props.theme.fonts[0]};
    }

    p {
        color: ${props => props.theme.colors.tertiary};
        font-family: ${props => props.theme.fonts[0]};
    }
`