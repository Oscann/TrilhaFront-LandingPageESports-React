import { FormEvent, useContext, useRef } from "react";
import styled from "styled-components";
import { UsernameContext } from "../../../App";

export default function SignUpForm() {
  const { changeUsername } = useContext(UsernameContext);

  const userRef = useRef<null | HTMLInputElement>(null);
  const responseRef = useRef<null | HTMLDivElement>(null);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (responseRef.current) responseRef.current.style.display = "flex";

    setTimeout(() => {
      if (userRef.current) changeUsername(userRef.current.value);
    }, 3000);
  }

  return (
    <StyledForm id="subscribe-form" onSubmit={handleSubmit}>
      <div className="input-label-pair">
        <label htmlFor="name">Name</label>
        <input
          name="name"
          id="name"
          type="text"
          placeholder="type your name"
          required
        />
      </div>

      <div className="input-label-pair">
        <label htmlFor="email">E-Mail</label>
        <input
          name="email"
          id="email"
          type="email"
          placeholder="example@example.com"
          required
        />
      </div>

      <div className="input-label-pair">
        <label htmlFor="game">Game</label>
        <select id="game" required>
          <option>CS: GO</option>
          <option>League of Legends</option>
          <option>Hearthstone</option>
          <option>Overwatch 2</option>
          <option>Warcraft 3</option>
        </select>
      </div>

      <div className="input-label-pair">
        <label htmlFor="username">Username</label>
        <input
          name="username"
          id="username"
          type="text"
          placeholder="type your username"
          required
          ref={userRef}
        />
      </div>

      <div className="input-label-pair">
        <label htmlFor="password">Password</label>
        <input
          name="password"
          id="password"
          type="password"
          placeholder="8-20 characters"
          minLength={8}
          maxLength={20}
          required
        />
      </div>
      <button type="submit">Subscribe</button>
      <div id="response" ref={responseRef}>
        <h2>Loading...</h2>
      </div>
    </StyledForm>
  );
}

const StyledForm = styled.form`
  position: relative;

  border: 1px solid #67c387;
  border-radius: 8px;

  padding: 12px 24px;

  display: flex;
  flex-direction: column;
  gap: 16px;

  overflow: hidden;

  & div.input-label-pair {
    display: flex;
    flex-direction: column;
  }

  & input,
  & select {
    background-color: inherit;

    width: 450px;
    padding: 16px;

    border-radius: 16px;
    border: 1px solid #67c387;

    font-size: 20px;

    outline: none;

    color: #235645;
  }

  & label {
    font-size: 24px;

    margin: 10px 0px;

    user-select: none;
  }

  & button {
    background-color: hsl(141, 53%, 58%);
    color: #fff;
    font-size: 20px;

    padding: 16px;

    border: 0px;
    border-radius: 8px;

    margin-top: 10px;
  }

  & button:hover {
    background-color: hsl(141, 43%, 48%);
  }

  & button:active {
    background-color: hsl(141, 43%, 28%);
  }

  & #response {
    position: absolute;
    top: 0px;
    right: 0px;

    background-color: #fff;

    display: none;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 100%;
  }

  @media (max-width: 600px) {
    & input,
    & select {
      width: 300px;
    }
  }
`;
