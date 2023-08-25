interface GraellaUsuarisProps<T> {
	elements: T[];
}

interface ItemambId {
	id: number;
}

const GraellaUsuaris = <T extends ItemambId>({
	elements,
}: GraellaUsuarisProps<T>) => (  
	<ul>
		{elements.map((item) => (
			<li key={item.id}>{JSON.stringify(item)}</li>
		))}
	</ul>
);

export default GraellaUsuaris;
