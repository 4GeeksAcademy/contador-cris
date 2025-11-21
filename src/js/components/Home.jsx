import React from "react";
import Timers from "./timer";
import Simbolo from "./simbolo";
import Stop from "./buttonStop";
import Continue from "./buttonContinue";
import Reset from "./resetTimer";
import Countdown from "./countDownButton";

const Home = ({ timer }) => {

	const contadores = {
		cont1: timer % 10,
		cont2: Math.floor(timer / 10) % 10,
		cont3: Math.floor(timer / 100) % 10,
		cont4: Math.floor(timer / 1000) % 10,
		cont5: Math.floor(timer / 10000) % 10,
	};

	return (
		<div className="container mt-4">
			<div className="row">

				<div className="col d-flex gap-3 p-1 align-items-center text-center">
					<Simbolo />
					<Timers value={contadores.cont5} />
					<Timers value={contadores.cont4} />
					<Timers value={contadores.cont3} />
					<Timers value={contadores.cont2} />
					<Timers value={contadores.cont1} />
				</div>

				<div className="col d-flex gap-3 pt-1 align-items-center text-center justify-content-center">
					<Stop />
					<Continue />
					<Reset />
					<Countdown />
				</div>

			</div>
		</div>
	);
};

export default Home;

