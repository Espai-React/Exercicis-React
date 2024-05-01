import { createContext, useContext } from "react";

export const LevelContext = createContext(0);

const SectionContext = ({ children }) => {
	const level = useContext(LevelContext);
	return (
		<section
			style={{
				border: "1px solid black",
				padding: "1rem",
				borderRadius: "10px",
			}}>
			<LevelContext.Provider value={level + 1}>
				{children}
			</LevelContext.Provider>
		</section>
	);
};
export default SectionContext;
