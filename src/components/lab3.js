const Lab3 = () => {
  const arr = [
    { id: 1, message: "Happy new year", date: "1/1/2022", name: "John" },
    { id: 2, message: "Programing is fun", date: "2/2/2022", name: "Jack" },
    { id: 3, message: "Oh Amazing!!!", date: "3/3/2022", name: "Jane" },
  ];
  return (
    <div>
      <ul style={{ margin: "0 auto", width: "50%", listStyle: "none" }}>
        {arr.map((el, idx) => (
          <li
            key={idx}
            style={{
              border: "1px solid black",
              padding: "1rem",
              marginTop: "1rem",
            }}
          >
            <div>
              <h3>{el.message}</h3>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <p>Author : {el.name}</p>
                <p>Date : {el.date}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Lab3;
