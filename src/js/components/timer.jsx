import React from "react";

const Timers = (props) => {
    return (
        <div className="card" style={{ width: "18rem" }}>
            <div className="card-body">
                <h1 className="card-title display-1">
                    <strong>{props.value}</strong>
                </h1>
            </div>
        </div>
    );
};

export default Timers;

