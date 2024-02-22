import styled from "styled-components";

export const TabsWrapper = styled.div`
/* display: flex; */
.item {
  flex-basis: 120px;
  flex-shrink: 0;
  padding: 14px 16px;
  margin-right: 16px;
  border-radius: 3px;
  font-size: 17px;
  border: .5px solid #D8D8D8;
  white-space: nowrap;
  text-align: center;
  cursor: pointer;
  ${props=> props.theme.mixin.boxShadow};
  &:last-child {
    margin-right: 0;
  }
  &.active {
    color: #FFF;
    background-color: ${props => props.theme.color.secondaryColor};
  }
}
`