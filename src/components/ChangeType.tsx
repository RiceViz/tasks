import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

const ChangeQuestion: Record<QuestionType, QuestionType> = {
    multiple_choice_question: "short_answer_question",
    short_answer_question: "multiple_choice_question"
};

export function ChangeType(): JSX.Element {
    const [type, setType] = useState<QuestionType>("short_answer_question");

    function changeQuestionType(): void {
        const newQuestion = ChangeQuestion[type];
        setType(newQuestion);
    }

    return (
        <div>
            <div>
                <Button onClick={changeQuestionType}>Change Type</Button>
            </div>
            <div>
                {type === "short_answer_question" ? (
                    <span>Short Answer </span>
                ) : (
                    <span>Multiple Choice</span>
                )}
            </div>
        </div>
    );
}
