import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: calc(100vw - 16px);
  height: calc(100vh - 16px);

  & h2 {
    margin: 0;
    padding: 0;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 24px;
    font-weight: 700;
  }
`;

export const SignInForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  max-height: 640px;
  padding: 24px;
  border-radius: 6px;

  & .MuiButton-root {
    margin-top: 15px;
  }

  & .MuiTextField-root {
    margin: 5px 0px;
  }
`;
