import styled from "styled-components";

const Heading = styled.div`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    position: relative;
    margin-bottom: 25px;
    padding-bottom: 8px;

    &::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: -3px;
      background-color: #ffc107;
      height: 5px;
      width: 70px;
    }
  }

  h1 {
      padding-bottom: 25px;
  }

  h2 {
      padding-bottom: 16px;
  }
`;

export default Heading;
