import React, { useState } from "react";


//create your first component
const Home = () => {
	const [inputValue, setInputvalue] = useState("")
	const [tarea, setTarea] = useState(null)

	const onInputChange = (e) => {
		setInputvalue(e.target.value)
	}

	const handleKeyUp = (e) => {
		if (e.key === "Enter") {
			setTarea(inputValue)
			setInputvalue("")
		}
	}

	return (
		<div className="container">
			<h1>Lista de Tareas</h1>
			<ul>
				<li>
					<input
						type="text"
						value={inputValue}
						placeholder="Tarea 1"
						onChange={onInputChange}
						onKeyUp={handleKeyUp}
					/>
					{tarea && <p> {tarea} </p>}
				</li>

				<li>
					<input
						type="text"
						value={inputValue}
						placeholder="Tarea 2"
						onChange={onInputChange}
						onKeyUp={handleKeyUp}
					/>
					{tarea && <p> {tarea} </p>}
				</li>

				<li>
					<input
						type="text"
						value={inputValue}
						placeholder="Tarea 3"
						onChange={onInputChange}
						onKeyUp={handleKeyUp}
					/>
					{tarea && <p> {tarea} </p>}
				</li>

				<li>
					<input
						type="text"
						value={inputValue}
						placeholder="Tarea 4"
						onChange={onInputChange}
						onKeyUp={handleKeyUp}
					/>
					{tarea && <p> {tarea} </p>}
				</li>

				<li>
					<input
						type="text"
						value={inputValue}
						placeholder="Tarea 5"
						onChange={onInputChange}
						onKeyUp={handleKeyUp}
					/>
					{tarea && <p> {tarea} </p>}
				</li>

				<li>
					<input
						type="text"
						value={inputValue}
						placeholder="Tarea 6"
						onChange={onInputChange}
						onKeyUp={handleKeyUp}
					/>
					{tarea && <p> {tarea} </p>}
				</li>

			</ul>
		</div>
	);
};

export default Home;