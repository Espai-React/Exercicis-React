import { forwardRef } from "react";

const Bloc = forwardRef(({ handleClicḱ }, refInput) => (
	<>
		<input type="text" placeholder="Name. . ." ref={refInput} />
		<button onClick={handleClicḱ}>Change Name</button>
	</>
));

export default Bloc;

