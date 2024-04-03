import React from "react";
import { Button } from "react-bootstrap";

export const Question5A = ({
    input,
    handleInput,
    handleButton,
    setLocation,
    setInput,
}) => {
    return (
        <div className="font-italic text-muted">
            <h2>¿Cuales de estos transportes utilizas con frecuencia?</h2>
            <h4 className="mb-4">(puede marcar tantos como quiera)</h4>
            <div>
                <input
                    type="checkbox"
                    name="bus"
                    defaultChecked={input.bus}
                    onClick={() => setInput({ ...input, bus: !input.bus })}
                    className="mx-2"
                />
                Bus
            </div>
            <div>
                <input
                    type="checkbox"
                    name="subway"
                    defaultChecked={input.subway}
                    onClick={() =>
                        setInput({
                            ...input,
                            subway: !input.subway,
                        })
                    }
                    className="mx-2"
                />
                Subte
            </div>
            <div>
                <input
                    type="checkbox"
                    name="train"
                    defaultChecked={input.train}
                    onClick={() => setInput({ ...input, train: !input.train })}
                    className="mx-2"
                />
                Tren
            </div>
            <Button
                className="my-3"
                variant="flat"
                size="lg"
                onClick={() => handleButton()}
            >
                Continuar
            </Button>
            <br />
            <Button
                variant="flat"
                size="sm"
                onClick={() => setLocation("start")}
            >
                Volver al Inicio
            </Button>
        </div>
    );
};
