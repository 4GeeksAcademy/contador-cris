import React from "react";
import { stopTimer } from "../main";

const Stop = () => {
    return (
        <button onClick={stopTimer}>
            Parar
        </button>
    );
};

export default Stop;
