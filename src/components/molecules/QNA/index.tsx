import { ReactNode } from "react";
import styled from "styled-components";

interface QNAProps {
  question: string;
  answer: string | ReactNode;
}

export default function QNA({ question, answer }: QNAProps) {
  return (
    <QNALi>
      <h3 className="question">{question}</h3>
      <p className="answer">{answer}</p>
    </QNALi>
  );
}

const QNALi = styled.li`
  list-style: none;
  border-bottom: 2px solid #67c387;

  padding: 20px 0px;

  & h3.question {
    font-size: 32px;
    font-weight: 700;

    margin: 10px 0px;
  }

  & p.answer {
    font-size: 24px;
  }

  @media (max-width: 850px) {
    h3.question {
      font-size: 24px;
    }

    p.answer {
      font-size: 16px;
    }
  }
`;
