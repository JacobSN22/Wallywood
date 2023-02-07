import styled from 'styled-components'

export const HomeStyle = styled.div`
	margin-top: 1.0rem;
	img {
		width: 100%
	}

    h2 {
        color: ${props => props.theme.colors.secondary};
        font-family: ${props => props.theme.fonts[0]};
    }
`