import React from "react";
import { Button } from "react-bootstrap";

export const Question2 = ({
    input,
    handleInput,
    handleButton,
    setLocation,
    setInput,
}) => {
    return (
        <div className="font-italic text-muted">
            <h2>¿Cuales de estos electrodomesticos utilizas?</h2>
            <h4 className="mb-4">(puede marcar tantos como quiera)</h4>
            <div>
                <input
                    type="checkbox"
                    name="pc"
                    // value={input.pc}
                    defaultChecked={input.pc}
                    onClick={() => setInput({ ...input, pc: !input.pc })}
                    className="mx-2"
                />
                PC
            </div>
            <div>
                <input
                    type="checkbox"
                    name="radio"
                    defaultChecked={input.radio}
                    onClick={() => setInput({ ...input, radio: !input.radio })}
                    className="mx-2"
                />
                Radio
            </div>
            <div>
                <input
                    type="checkbox"
                    name="impresora"
                    defaultChecked={input.impresora}
                    onClick={() =>
                        setInput({
                            ...input,
                            impresora: !input.impresora,
                        })
                    }
                    className="mx-2"
                />
                Impresora
            </div>
            <div>
                <input
                    type="checkbox"
                    name="microondas"
                    defaultChecked={input.microondas}
                    onClick={() =>
                        setInput({
                            ...input,
                            microondas: !input.microondas,
                        })
                    }
                    className="mx-2"
                />
                Microondas
            </div>
            <div>
                <input
                    type="checkbox"
                    name="dispenser"
                    defaultChecked={input.dispenser}
                    onClick={() =>
                        setInput({
                            ...input,
                            dispenser: !input.dispenser,
                        })
                    }
                    className="mx-2"
                />
                Dispenser
            </div>
            <div>
                <input
                    type="checkbox"
                    name="pava"
                    defaultChecked={input.pava}
                    onClick={() => setInput({ ...input, pava: !input.pava })}
                    className="mx-2"
                />
                Pava electrica
            </div>
            <div>
                <input
                    type="checkbox"
                    name="lavarropa"
                    defaultChecked={input.lavarropa}
                    onClick={() =>
                        setInput({
                            ...input,
                            lavarropa: !input.lavarropa,
                        })
                    }
                    className="mx-2"
                />
                Lavarropa
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
