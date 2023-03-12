import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(4);
    const [quizInProgress, setQuizInProgress] = useState<boolean>(false);

    function startQuiz(): void {
        setAttempts(attempts - 1);
        setQuizInProgress(true);
    }

    function stopQuiz(): void {
        setQuizInProgress(false);
    }

    return (
        <div>
            {attempts}
            {quizInProgress === false ? (
                <div>
                    {attempts > 0 ? (
                        <Button onClick={startQuiz}>Start Quiz</Button>
                    ) : (
                        <Button onClick={startQuiz} disabled>
                            Start Quiz
                        </Button>
                    )}
                    <Button onClick={stopQuiz} disabled>
                        Stop Quiz
                    </Button>
                    <Button onClick={() => setAttempts(attempts + 1)}>
                        Mulligan
                    </Button>
                </div>
            ) : (
                <div>
                    <Button onClick={startQuiz} disabled>
                        Start Quiz
                    </Button>
                    <Button onClick={stopQuiz}>Stop Quiz</Button>
                    <Button onClick={() => setAttempts(attempts + 1)} disabled>
                        Mulligan
                    </Button>
                </div>
            )}
        </div>
    );
}
