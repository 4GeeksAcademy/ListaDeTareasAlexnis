import React, { useState } from "react";


//create your first component
const Home = () => {
	const [inputValue, setInputvalue] = useState("")
	const [tareas, setTareas] = useState([])

	const onInputChange = (e) => {
		setInputvalue(e.target.value)
	}

	const handleKeyUp = (e) => {
		if (e.key === "Enter") {
			setTareas([...tareas, inputValue])
			setInputvalue("")
		}
	}
	const deleteTarea = (iTarea) => {
		const tareaFiltrada = tareas.filter((tarea, index) => index !== iTarea)
		setTareas(tareaFiltrada)
	}
	return (
		<div className="container">
			<h1>Lista de Tareas</h1>
			<input
				type="text"
				value={inputValue}
				placeholder="Tu Tarea"
				onChange={onInputChange}
				onKeyUp={handleKeyUp}
			/>
			<ul>
				{
					tareas.length > 0 ?
						tareas.map((tarea, index) => (
							<div className="d-flex justify-content-between">
								<p>{tarea}</p>
								<button className="btn btn-darkbtn" onClick={() => deleteTarea(index)}>✖️</button>
							</div>
						)) :
						<h2>No hay tarea agrega una</h2>
				}
			</ul>
		</div>
	);
};

export default Home;