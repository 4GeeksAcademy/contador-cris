import React from "react";
import { countdownTimer } from "../main";

const Countdown = () => {
    return (
        <button onClick={countdownTimer}>
            Cuenta Atrás
        </button>
    );
};

export default Countdown;
