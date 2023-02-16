import styled from 'styled-components'

export const PosterStyled = styled.div`

    display: grid;
    grid-template-columns: 1.2fr 4fr;

    ul {
        li {
            display: block;
            
            a {
                text-decoration: none;
                color: ${props => props.theme.colors.secondary};
            }
        }
    }
`