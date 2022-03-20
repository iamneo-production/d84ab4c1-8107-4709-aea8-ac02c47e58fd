import styled from "styled-components";

const image = "https://www.linkpicture.com/q/ice-cream-wallpaper.jpg";
export const Wrapper = styled.div`
  display: flex;
`;
export const Body = styled.div`
  margin: auto;
`;
export const LeftSection = styled.div`
  width: 50vw;
  height: 100vh;
  background-image: url(${image});
  background-size: cover;
  @media only screen and (max-width: 592px) {
    width: 100vw;
  }
`;

export const Title = styled.div`
  font-family: 'Kodchasan', sans-serif;
  font-family: 'Roboto Condensed', sans-serif;
  font-family: 'Sirin Stencil', cursive;

`;

export const RightSection = styled.div`
  width: 50vw;
  height: 100vh;
  display: flex;
  background:#f5f5f5;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 592px) {
    width: 100vw;
    height: fit-content;
    padding: 5rem 0;
  }
`;

export const LeftContent = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Kodchasan:wght@300&family=Roboto+Condensed:ital@1&display=swap");
  color: #fff;
  width: 50vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-weight: 400;
  p {
    font-family: "Kodchasan", sans-serif;
  }
  background: rgba(0, 0, 0, 0.4);
  span {
    font-family: "Kodchasan", sans-serif;
  }
`;
