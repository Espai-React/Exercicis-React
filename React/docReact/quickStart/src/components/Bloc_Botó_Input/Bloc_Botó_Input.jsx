const Bloc_Botó_Input = ({ handleClick, handleChange, text, comptador }) => (
	<div>
		<button onClick={handleClick}>
			Sóc un botó clicat {comptador} vegades
		</button>
		<input onChange={handleChange} value={text} />
	</div>
);

export default Bloc_Botó_Input;

/* const Bloc_Botó_Input = ({ handleClick, handleChange, text }) => (
	<div>
		<button onClick={() => handleClick()}>Sóc un botó</button>
		<input onChange={(e) => handleChange(e)} value={text} />
	</div>
); */
