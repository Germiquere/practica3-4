import React from "react";
import { Button } from "react-bootstrap";

export const Result = ({ input, handleButton }) => {
    return (
        <div className="font-italic text-muted">
            <h3 className="mb-4">
                El Resultado es: {input.total} Toneladas anuales de emision de
                huella de carbono.
            </h3>
            <h6 className="font-weight-bold parH pb-3 pl-2 ">
                ¿Sabías que los árboles funcionan como termorreguladores
                capturando estas emisiones de co2?
            </h6>
            Se calcula que una hectárea de bosque mayor a 20 años puede llegar a
            capturar las emisiones generadas por una persona por año.
            <div>
                <h5 className="parH mb-n3 mt-3 py-3 pl-2">
                    <p className="font-weight-bold">
                        ¿Qué esperas para mitigar tu huella de carbono? Podés
                        empezar ahora.
                    </p>
                </h5>
                <div className="ml-5 mt-2">
                    <Button
                        variant="flat"
                        size="lg"
                        onClick={() => handleButton()}
                    >
                        Siguiente
                    </Button>
                    <Button
                        size="lg"
                        variant="flat"
                        onClick={() => handleButton()}
                    >
                        Reiniciar
                    </Button>
                </div>
            </div>
        </div>
    );
};
