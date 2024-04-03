import React from "react";
import { Jumbotron } from "react-bootstrap";
import { useCalculator } from "../hooks/useCalculator";
import { Start } from "../Components/calculator/Start";
import { Question1 } from "../Components/calculator/Question1";
import { Question2 } from "../Components/calculator/Question2";
import { Question3 } from "../Components/calculator/Question3";
import { Question4 } from "../Components/calculator/Question4";
import { Question4A } from "../Components/calculator/Question4A";
import { Question4B } from "../Components/calculator/Question4B";
import { Question5 } from "../Components/calculator/Question5";
import { Question5A } from "../Components/calculator/Question5A";
import { Question5B } from "../Components/calculator/Question5B";
import { Result } from "../Components/calculator/Result";

export default function Calculator() {
    // pasar el estado inicial del useState a un archivo aparte.

    const {
        input,
        location,
        setInput,
        setLocation,
        handleInput,
        handleButton,
    } = useCalculator();
    // pasar este handler a un nuevo archivo

    return (
        <>
            <Jumbotron
                className="cover"
                style={{
                    backgroundImage: `url("http://i.ibb.co/jgZph3V/fondo.png")`,
                }}
            >
                {/* start */}
                {location === "start" ? (
                    <Start handleButton={handleButton} />
                ) : (
                    <div />
                )}
                {/* question1 */}
                {location === "question1" ? (
                    <Question1
                        handleButton={handleButton}
                        input={input}
                        handleInput={handleInput}
                        setLocation={setLocation}
                    />
                ) : (
                    <div />
                )}
                {/* question2 */}
                {location === "question2" ? (
                    <Question2
                        handleButton={handleButton}
                        input={input}
                        handleInput={handleInput}
                        setLocation={setLocation}
                        setInput={setInput}
                    />
                ) : (
                    <div />
                )}
                {/* question 3 */}
                {location === "question3" ? (
                    <Question3
                        handleButton={handleButton}
                        input={input}
                        setLocation={setLocation}
                        setInput={setInput}
                    />
                ) : (
                    <div />
                )}
                {/* question 4 */}
                {location === "question4" ? (
                    <Question4
                        handleButton={handleButton}
                        input={input}
                        setLocation={setLocation}
                        setInput={setInput}
                    />
                ) : (
                    <div />
                )}
                {/* question 4A */}
                {location === "question4A" ? (
                    <Question4A
                        handleButton={handleButton}
                        input={input}
                        handleInput={handleInput}
                        setLocation={setLocation}
                    />
                ) : (
                    <div />
                )}
                {/* question 4B */}
                {location === "question4B" ? (
                    <Question4B
                        handleButton={handleButton}
                        input={input}
                        handleInput={handleInput}
                        setLocation={setLocation}
                    />
                ) : (
                    <div />
                )}
                {/* question 5 */}
                {location === "question5" ? (
                    <Question5
                        handleButton={handleButton}
                        input={input}
                        setLocation={setLocation}
                        setInput={setInput}
                    />
                ) : (
                    <div />
                )}
                {/* question 5A */}
                {location === "question5A" ? (
                    <Question5A
                        handleButton={handleButton}
                        input={input}
                        setLocation={setLocation}
                        setInput={setInput}
                    />
                ) : (
                    <div />
                )}
                {/* question 5B */}
                {location === "question5B" ? (
                    <Question5B
                        handleButton={handleButton}
                        input={input}
                        handleInput={handleInput}
                        setLocation={setLocation}
                    />
                ) : (
                    <div />
                )}
                {location === "result" ? (
                    <Result input={input} handleButton={handleButton} />
                ) : (
                    <div />
                )}
            </Jumbotron>
        </>
    );
}
