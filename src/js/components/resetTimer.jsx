import React from "react";
import { resetTimer } from "../main";

const Reset = () => {
    return (
        <button onClick={resetTimer}>
            Reiniciar
        </button>
    );
};

export default Reset;