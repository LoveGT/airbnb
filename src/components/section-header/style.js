import styled from "styled-components";

export const HeaderWrapper = styled.div`
  color: ${(props) => props.theme.text.secondaryColor};
  .title {
    font-size:22px;
    font-weight: 600;
    margin-bottom: 16px;
  }

  .subtitle {
    font-size: 16px;
    margin-bottom: 20px;
  }
`;