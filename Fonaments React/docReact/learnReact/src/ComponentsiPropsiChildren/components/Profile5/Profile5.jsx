import Card5 from "../Card5/index";

const Profile5 = () => (
	<div>
		<Card5>
				<h1>Photo</h1>
				<img
					className="avatar"
					src="https://i.imgur.com/OKS67lhm.jpg"
					alt="Aklilu Lemma"
					width={70}
					height={70}
				/>
		</Card5>
		<Card5>
				<h1>About</h1>
				<p>
					Aklilu Lemma was a distinguished Ethiopian scientist who discovered a
					natural treatment to schistosomiasis.
				</p>
		</Card5>
	</div>
);

export default Profile5;
