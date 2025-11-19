import React from "react";
import Timers from "./timer";

let timer = 0;
let id = 0

const Home = ({timer}) => {

	const contadores = {
		cont1: timer % 10,
    	cont2: Math.floor(timer / 10) % 10,
    	cont3: Math.floor(timer / 100) % 10,
    	cont4: Math.floor(timer / 1000) % 10,
    	cont5: Math.floor(timer / 10000) % 10,
	}

	return (
		<div className="container mt-4">
			<div className="row">
				<div className="col d-flex gap-3 p-1 aling-items-center text-center">
					<Timers id={id + 4} value={contadores.cont5} />
					<Timers id={id + 3} value={contadores.cont4} />
					<Timers id={id + 2} value={contadores.cont3} />
					<Timers id={id + 1} value={contadores.cont2} />
                    <Timers id={id} value={contadores.cont1} />
				</div>
			</div>
		</div>
	);
};
export default Home;
