
import { Link } from "react-router-dom";

const Usuaris = () => (
		<div>
		<h3>Usuaris</h3>
		<button>
			<Link to="/fetch">Fetch usuaris</Link>
		</button>
		<button>
			<Link to="/axios">Fetch usuaris axios</Link>
		</button>
		</div>
	);

export default Usuaris;

