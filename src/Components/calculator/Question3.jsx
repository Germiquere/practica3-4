import React from "react";
import { Button } from "react-bootstrap";

export const Question3 = ({ input, handleButton, setLocation, setInput }) => {
    return (
        <div className="font-italic text-muted">
            <h2>¿Cuales de estos utilizas con frecuencia?</h2>
            <h4 className="mb-4">(puede marcar tantos como quiera)</h4>
            <div>
                <input
                    type="checkbox"
                    name="cocina"
                    defaultChecked={input.cocina}
                    onClick={() =>
                        setInput({
                            ...input,
                            cocina: !input.cocina,
                        })
                    }
                    className="mx-2"
                />
                Cocina
            </div>
            <div>
                <input
                    type="checkbox"
                    name="termotanque"
                    defaultChecked={input.termotanque}
                    onClick={() =>
                        setInput({
                            ...input,
                            termotanque: !input.termotanque,
                        })
                    }
                    className="mx-2"
                />
                Termotanque
            </div>
            <div>
                <input
                    type="checkbox"
                    name="estufa"
                    defaultChecked={input.estufa}
                    onClick={() =>
                        setInput({
                            ...input,
                            estufa: !input.estufa,
                        })
                    }
                    className="mx-2"
                />
                Estufa
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
