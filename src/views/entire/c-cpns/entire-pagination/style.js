import styled from "styled-components";

export const PaginationWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
.desc {
  margin-top: 16px;
  color: ${props => props.theme.text.secondaryColor};
}
`