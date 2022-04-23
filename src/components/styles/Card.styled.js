import styled from 'styled-components';

export const StyledCard = styled.div`
	background: ${({ theme }) => theme.colors.card};
	width: 300px;
	height: 500px;
	border-radius: 10px;
`;
