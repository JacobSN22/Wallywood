import styled from 'styled-components'

export const Container = styled.div`
    border: solid 1px #000;
    background-color: ${probs => probs.theme.colors.secondary};
    width: 100%;
    max-width: ${props => props.maxwidth};
    margin: 0 auto;
    padding: 40px;
    `