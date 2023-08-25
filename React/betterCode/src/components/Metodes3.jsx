const Metodes3 = () => {
  const array = [1, 2, 3];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submit", new FormData(e.target).get("text"));
  };

  const print = (number) => {
    console.log("Print", number);
  };

  const doubler = (number) => {
    return () => {
      console.log("Doubler", number * 2);
    };
  };

  return (
    <>
      <h3>3 Mètodes</h3>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" name="text" defaultValue="Initial" />
        <button>Submit</button>
      </form>
      <div>
				{array.map((number) => (
					<button key={number} onClick={() => print(number)}>
						Print {number}
					</button>
				))}
			</div>
      <div>
				{array.map((number) => (
					<button key={number} onClick={doubler(number)}>
						Doubler {number}
					</button>
				))}
			</div>
    </>
  );
};

export default Metodes3;
