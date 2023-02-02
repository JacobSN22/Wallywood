import styled from 'styled-components'
import { Reset } from './Mixins'

export const HeaderStyle = styled.header`
    h1{
            font-family: ${props => props.theme.fonts[0]};
    color: ${props => props.theme.colors.secondary};
    font-size: 3rem;
    font-weight: 900;
    ${ Reset }
    }

    `