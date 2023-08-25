const Llista = ({ data }) => (
  <div>
    <h3>Llista de todos</h3>
    <div>
      <ul>
        {data.map((element) => (
          <li key={element.id}>
            {element.id} - {element.title}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default Llista;
