import { useEffect, useMemo, useState } from "react";

const ComptadorUseEffect = () => {
  const [name, setName] = useState("");
  const [estat, setEstat] = useState({
    nameEstat: "",
    selected: false,
  });

  const { nameEstat, selected } = estat;
  const estatMemo = useMemo(() => ({
    nameMemo: nameEstat,
    selectedMemo: selected
  }), [nameEstat, selected]);
  

  const handleAdd = () => {
    setEstat((prev) => ({
      ...prev,
      nameEstat: name,
    }));
  };

  const handleSelect = () => {
    setEstat((prev) => ({
      ...prev,
      selected: true,
    }));
  };

  useEffect(() => {
    // console.log("useEffect runs");
  }, [estatMemo]);

  return (
    <div>
      <h3>Comptador UseEffect</h3>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleAdd}>Add Name</button>
      <button onClick={handleSelect}>Select</button>
      <div>
        {`name: ${nameEstat},
					estat: ${selected.toString()}`}
        {/* estat: ${JSON.stringify(selected) */}
      </div>
    </div>
  );
};

export default ComptadorUseEffect;
