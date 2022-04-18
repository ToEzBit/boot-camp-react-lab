const Lab1 = () => {
  const arr = ["John", "Jack", "Jane", "Joe"];
  return (
    <div>
      <ul>
        {arr.map((element, index) => (
          <li key={index}>{element}</li>
        ))}
      </ul>
    </div>
  );
};

export default Lab1;
