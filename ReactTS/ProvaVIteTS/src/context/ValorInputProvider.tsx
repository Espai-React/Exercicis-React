import { createContext, useReducer } from "react";

const estatInicial = {
	valorInput: 427,
};

type AppState = typeof estatInicial;
type Action =
	| { type: "Set Valor Input"; payload: number }
	| { type: "Set Valor Input a 100" };

interface InputProviderProps {
	children: React.ReactNode;
}

const reducerInput = (estat: AppState, action: Action) => {
	const { type } = action;

	switch (type) {
		case "Set Valor Input":
			return {
				...estat,
				valorInput: action.payload,
			};
		case "Set Valor Input a 100":
			return {
				...estat,
				valorInput: 100,
			};
		default:
			return estat;
	}
};

export const ValorInputContext = createContext<{
	estat: AppState;
	dispatch: React.Dispatch<Action>;
}>({ estat: estatInicial, dispatch: () => {null} });

const ValorInputProvider = ({ children }: InputProviderProps) => {
	const [estat, dispatch] = useReducer(reducerInput, estatInicial);

	return (
		<ValorInputContext.Provider value={{ estat, dispatch }}>
			{children}
		</ValorInputContext.Provider>
	);
};

export default ValorInputProvider;
