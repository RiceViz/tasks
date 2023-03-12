import React from "react";
import dancing_cartoon_picture from "./assets/cartoondancing.gif";
import "./App.css";
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";


function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <hr></hr>
            <Counter></Counter>
            <hr />
            <RevealAnswer></RevealAnswer>
            <hr />
            <StartAttempt></StartAttempt>
            <hr />
            <TwoDice></TwoDice>
            <hr />
            <ChangeType></ChangeType>
            <hr />
            <CycleHoliday></CycleHoliday>
            <h1>Welcome To My Website!</h1>
            <div
                style={{
                    width: "1400px",
                    height: "300px",
                    backgroundColor: "#a30000"
                }}
            >
                <Container>
                    <Row>
                        <Col>
                            <p>
                                <span style={{ color: "White" }}>
                                    Edit <code>src/App.tsx</code> and save. This
                                    page will automatically reload. <br></br>It
                                    is{" "}
                                    <span style={{ color: "Orange" }}>
                                        <b>Tyran Rice Jr.</b>
                                    </span>{" "}
                                    Hello World!
                                </span>
                            </p>
                        </Col>
                        <Col>
                            <Button onClick={() => console.log("Hello World!")}>
                                Log Hello World
                            </Button>
                        </Col>
                    </Row>
                </Container>
            </div>
            <br></br>
            <img
                src={dancing_cartoon_picture}
                alt="Your Missing The Best Part"
            />
            <br></br>
            Todo List:
            <ol>
                <li>
                    <span>Wake Up</span>
                </li>
                <li>
                    <span>Code</span>
                </li>
                <li>
                    <span>Eat</span>
                </li>
                <li>
                    <span>Nap</span>
                </li>
                <li>
                    <span>Repeat</span>
                </li>
            </ol>
        </div>
    );
}

export default App;
