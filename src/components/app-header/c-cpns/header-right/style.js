import styled from "styled-components";

export const RightWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: ${(props) => props.theme.text.primaryColor};
  font-size: 14px;
  font-weight: 600;
  .btns {
    display: flex;
    box-sizing: content-box;
    color: ${props => props.theme.isAlpha ? '#fff' : props.theme.text.primaryColor};
    .btn {
      box-sizing: content-box;
      height: 18px;
      line-height: 18px;
      padding: 12px 15px;
      cursor: pointer;
      border-radius: 22px;
      &:hover {
        background: 
        ${props => props.theme.isAlpha ? 'rgba(255,255,255, .1)': '#f5f5f5'} ;
      }
    }
  }
  .profile {
    position: relative;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 77px;
    height: 42px;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 25px;
    background: #fff;
    cursor: pointer;
    margin-right: 24px;
    margin-left: 20px;
    color: ${(props) => props.theme.text.primaryColor};
    /* transition: box-shadow 0.2s ease;
    &:hover {
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.18);
    } */
    ${(props) => props.theme.mixin.boxShadow}
    .panel {
      position: absolute;
      top: 54px;
      right: 0;
      width: 240px;
      background: #fff;
      box-shadow: 0 0 4px rgba(0, 0, 0, 0.18);
      border-radius: 10px;
      color: #555;
      .top {
        border-bottom: 1px solid #ddd;
      }
      .top, .bottom {
        padding: 10px 0;
        .item {
          height: 40px;
          line-height: 40px;
          padding: 0px 16px;
          &:hover {
            background: #f5f5f5;
          }
        }
      }
    }
  }
`;
