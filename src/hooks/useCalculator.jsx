import { useState } from "react";

export const useCalculator = () => {
    const [input, setInput] = useState({
        //electrico
        people: 1,
        pc: false,
        radio: false,
        impresora: false,
        microondas: false,
        dispenser: false,
        pava: false,
        lavarropa: false,
        heladera: false,
        tv: false,
        //gas
        cocina: false,
        termotanque: false,
        estufa: false,
        //auto
        useCar: false,
        carDistance: 1,
        carShare: 1,
        //transporte publico
        publicTransport: false,
        train: false,
        subway: false,
        bus: false,
        taxi: false,
        publicHours: 1,
        //totales

        total: 1,
    });
    const [location, setLocation] = useState("start");
    const handleButton = () => {
        switch (location) {
            case "start":
                setInput({
                    people: 1,
                    pc: false,
                    radio: false,
                    impresora: false,
                    microondas: false,
                    dispenser: false,
                    pava: false,
                    lavarropa: false,
                    heladera: false,
                    tv: false,
                    cocina: false,
                    termotanque: false,
                    estufa: false,
                    useCar: false,
                    carDistance: 1,
                    carShare: 1,
                    publicTransport: false,
                    train: false,
                    subway: false,
                    bus: false,
                    taxi: false,
                    publicHours: 1,

                    total: 1,
                });
                setLocation("question1");
                break;
            case "question1":
                setLocation("question2");
                break;
            case "question2":
                setLocation("question3");
                break;
            case "question3":
                setLocation("question4");
                break;
            case "question4":
                if (input.useCar) {
                    setLocation("question4A");
                } else {
                    setLocation("question5");
                }
                break;
            case "question4A":
                setLocation("question4B");
                break;
            case "question4B":
                setLocation("question5");
                break;
            case "question5":
                var edesur = 0;
                var metrogas = 0;
                if (input.pc) {
                    edesur += 0.0106;
                }
                if (input.radio) {
                    edesur += 0.029;
                }
                if (input.impresora) {
                    edesur += 0.4355;
                }
                if (input.microondas) {
                    edesur += 0.3097;
                }
                if (input.dispenser) {
                    edesur += 0.121;
                }
                if (input.pava) {
                    edesur += 1.1613;
                }
                if (input.lavarropa) {
                    edesur += 0.9481;
                }
                if (input.heladera) {
                    edesur += 0.0564;
                }
                if (input.tv) {
                    edesur += 0.0263;
                }
                if (input.cocina) {
                    metrogas += 0.0228;
                }
                if (input.termotanque) {
                    metrogas += 0.0228;
                }
                if (input.estufa) {
                    metrogas += 0.5558;
                }

                var sub =
                    (edesur * 6 * 365 + metrogas * 4 * 365) / input.people;

                if (input.useCar) {
                    sub += (0.15 * input.carDistance) / 12 / input.carShare;
                }

                setInput({
                    ...input,
                    total: sub,
                });
                if (input.publicTransport) {
                    setLocation("question5A");
                } else {
                    setLocation("result");
                }
                break;
            case "question5A":
                setLocation("question5B");
                break;
            case "question5B":
                var quantity = 0;
                var totalPublic = 0;
                if (input.train) {
                    quantity++;
                    totalPublic +=
                        ((0.005 * 50 * input.publicHours) / 737) * 240;
                }
                if (input.subway) {
                    quantity++;
                    totalPublic +=
                        ((0.036 * 50 * input.publicHours) / 255) * 240;
                }
                if (input.bus) {
                    quantity++;
                    totalPublic += ((0.05 * 50 * input.publicHours) / 25) * 240;
                }
                if (input.taxi) {
                    quantity++;
                    totalPublic += ((0.15 * 50 * input.publicHours) / 2) * 240;
                }
                if (quantity > 0) {
                    totalPublic = totalPublic / quantity;
                }
                totalPublic += input.total;
                setInput({
                    ...input,
                    total: totalPublic.toFixed(2),
                });

                setLocation("result");
                break;
            default:
                setLocation("start");
                break;
        }
    };
    const handleInput = (e) => {
        if (e.target.value < 1) {
            setInput({
                ...input,
                [e.target.name]: 1,
            });
        } else {
            setInput({
                ...input,
                [e.target.name]: e.target.value,
            });
        }
    };
    return {
        // PROPIEDADES,
        location,
        input,
        //METODOS
        handleButton,
        handleInput,
        setInput,
        setLocation,
    };
};
