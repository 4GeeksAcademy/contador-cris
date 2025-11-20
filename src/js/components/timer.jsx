import React from "react";

const Timers = (props) => {
    return (
        <div className="Timers">
            <h1>
                <strong>{props.value}</strong>
            </h1>
        </div>
    );
};

export default Timers;

