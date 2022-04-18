const Lab2 = () => {
  const arr = [
    { id: 1, message: "1 lorem", date: "1/1/2022", name: "John" },
    { id: 2, message: "2 lorem", date: "2/2/2022", name: "Jack" },
    { id: 3, message: "3 lorem", date: "3/3/2022", name: "Jane" },
    { id: 4, message: "4 lorem", date: "4/4/2022", name: "Joe" },
  ];
  return (
    <div>
      <ul>
        {arr.map((element, index) => (
          <li key={index}>
            {element.id} {element.message} {element.date} {element.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Lab2;
