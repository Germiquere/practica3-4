import React from "react";
import { Button } from "react-bootstrap";

export const Question5 = ({
    input,

    handleButton,
    setLocation,
    setInput,
}) => {
    return (
        <div className="font-italic text-muted">
            <h2 className="mb-4">¿Usas con frecuencia transporte publico?</h2>
            <input
                type="checkbox"
                name="publicTransport"
                defaultChecked={input.publicTransport}
                onClick={() =>
                    setInput({
                        ...input,
                        publicTransport: !input.publicTransport,
                    })
                }
            />
            <br />
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
