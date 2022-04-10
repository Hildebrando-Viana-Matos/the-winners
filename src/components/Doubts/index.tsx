// Icons
import { useState } from "react";
import { FiChevronLeft, FiChevronDown } from "react-icons/fi";

// Styles
import "./styles.scss";

type DoubtsProps = {
  question: string;
  answer: string;
};

export function Doubts({ question, answer }: DoubtsProps) {
  const [openQuestion, setOpenQuestion] = useState<boolean>();

  function handleOpenAnswer() {
    if (openQuestion) {
      setOpenQuestion(false);
    } else {
      setOpenQuestion(true);
    }
  }
  return (
    <>
      <div className="boxDoubts" id="boxDoubts1">
        <span>{question}</span>
        <button className="buttonDoubts" onClick={handleOpenAnswer}>
          {openQuestion ? <FiChevronDown /> : <FiChevronLeft />}
        </button>
      </div>
      <div className={`boxAnswer ${openQuestion ? "open" : "closed"}`}>
        <p>{answer}</p>
      </div>
    </>
  );
}
