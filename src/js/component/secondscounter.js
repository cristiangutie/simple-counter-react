import { timers } from "jquery";
import React, { useState, useEffect } from "react";
import { FaClock } from "react-icons/fa";

//create your first component
export function SecondsCounter() {
	const [units, setUnits] = useState(0);
	const [dozens, setDozens] = useState(0);
	const [hundreds, setHundreds] = useState(0);
	const [unitOfThousands, setUnitOfThousands] = useState(0);
	const [tenThousands, setTenThousands] = useState(0);
	const [hundredThousands, setHundredThousands] = useState(0);

	useEffect(() => {
		const unitsInterval = setInterval(() => {
			setUnits(units =>
				units < 9 ? setUnits(units + 1) : setUnits((units = 0))
			);
		}, 1000);
		const dozensInterval = setInterval(() => {
			setDozens(dozens =>
				dozens < 9 ? setDozens(dozens + 1) : setDozens((dozens = 0))
			);
		}, 10000);
		const hundredsInterval = setInterval(() => {
			setHundreds(hundreds =>
				hundreds < 9
					? setHundreds(hundreds + 1)
					: setHundreds((hundreds = 0))
			);
		}, 100000);
		const unitOfThousandsInterval = setInterval(() => {
			setUnitOfThousands(unitOfThousands =>
				unitOfThousands < 9
					? setUnitOfThousands(unitOfThousands + 1)
					: setUnitOfThousands((unitOfThousands = 0))
			);
		}, 1000000);
		const tenThousandsInterval = setInterval(() => {
			setTenThousands(tenThousands =>
				tenThousands < 9
					? setTenThousands(tenThousands + 1)
					: setTenThousands((tenThousands = 0))
			);
		}, 1000000);
		const hundredThousandsInterval = setInterval(() => {
			setHundredThousands(hundredThousands =>
				hundredThousands < 9
					? setHundredThousands(hundredThousands + 1)
					: setHundredThousands((hundredThousands = 0))
			);
		}, 10000000);
		return () =>
			clearInterval(
				unitsInterval,
				dozensInterval,
				hundredsInterval,
				unitOfThousandsInterval,
				tenThousandsInterval,
				hundredThousandsInterval
			);
	}, []);

	return (
		<div className="container">
			<div className="d-flex justify-content-center min-vh-100">
				<h1 className="d-flex bg-black text-white mx-auto align-self-center p-2 rounded">
					<span className="bg-dark">
						<FaClock className="pb-1 px-1" />
					</span>
					<span className="bg-dark mx-1">{hundredThousands}</span>
					<span className="bg-dark">{tenThousands}</span>
					<span className="bg-dark mx-1">{unitOfThousands}</span>
					<span className="bg-dark">{hundreds}</span>
					<span className="bg-dark mx-1">{dozens}</span>
					<span className="bg-dark">{units}</span>
				</h1>
			</div>
		</div>
	);
}
