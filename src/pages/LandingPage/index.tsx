import styled from "styled-components";
import Icon from "../../components/atoms/Icon";
import QNA from "../../components/molecules/QNA";
import QNAData from "../../components/molecules/QNA/data";
import Footer from "../../components/organisms/Footer";
import Header from "../../components/organisms/Header";
import SignUpForm from "../../components/organisms/SignUpForm";

export default function LandingPage() {
  return (
    <>
      <Header />
      <main>
        <MainSection>
          <div className="announcement">
            <h1>First Edition of the E-Olympics is FINALLY HAPPENING</h1>
            <h2>Opening ceremony: 12/31/2022 - 15:00 GMT</h2>
          </div>
          <Icon
            id="coroa-de-louros"
            src="/assets/laurel-wreath.png"
            size="30%"
          />
        </MainSection>
        <StyledHr />
        <IntroSection>
          <ul>
            {QNAData.map((qna) => {
              return <QNA question={qna.question} answer={qna.answer} />;
            })}
          </ul>
        </IntroSection>
        <StyledHr />
        <SignUpFormSection>
          <h1>SUBSCRIBE</h1>
          <SignUpForm />
        </SignUpFormSection>
      </main>
      <Footer />
    </>
  );
}

const StyledHr = styled.hr`
  height: 0;
  margin: 0;

  border: 2.5px solid #67c387;
`;

const MainSection = styled.section`
  background-color: #e0eee7;
  font-family: Verdana;

  padding: 24px 48px 24px 48px;

  justify-content: space-between;

  & div.announcement {
    max-width: 50%;
  }

  & div.announcement h1 {
    font-weight: 800;
  }

  & div.announcement h2 {
    font-size: 28px;

    color: hsl(160, 20%, 24%);
  }

  @media (max-width: 850px) {
    & div.announcement h2 {
      font-size: 20px;
    }
  }

  @media (max-width: 600px) {
    & div.announcement {
      max-width: 100%;
    }

    & #coroa-de-louros {
      display: none;
    }
  }
`;

const IntroSection = styled.section`
  padding: 64px 32px;

  @media (max-width: 850px) {
    & {
      padding: 32px 32px 64px 32px;
    }
  }
`;

const SignUpFormSection = styled.section`
  padding: 24px;
  flex-direction: column;

  & h1 {
    margin-bottom: 24px;
  }
`;
