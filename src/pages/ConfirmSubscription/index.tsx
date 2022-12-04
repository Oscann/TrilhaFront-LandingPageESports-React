import styled from "styled-components";
import Icon from "../../components/atoms/Icon";

export default function ConfirmSubscription() {
  return (
    <WrapperDiv>
      <Icon id="checked" src="/assets/checked.png" size="10%" />
      <div>
        <h2>Subscription successfully made</h2>
        <span>Scan the QR Code to download the proof of subscription</span>
      </div>
      <Icon id="qr-code" src="/assets/sample-qr-code.png" size="20%" />
    </WrapperDiv>
  );
}

const WrapperDiv = styled.main`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;

  & div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 850px) {
    & #qr-code {
      width: 30%;
      padding-bottom: 30%;
    }

    & #checked {
      width: 20%;
      padding-bottom: 20%;
    }
  }

  @media (max-width: 600px) {
    & #qr-code {
      width: 40%;
      padding-bottom: 40%;
    }

    & #checked {
      width: 30%;
      padding-bottom: 30%;
    }
  }
`;
