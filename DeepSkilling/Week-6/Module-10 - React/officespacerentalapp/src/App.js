import office from "./office.jpg";;

function App() {

  const officeSpaces = [
    {
      Name: "DBS",
      Rent: 50000,
      Address: "Chennai",
      Image: office
    },
    {
      Name: "Regus",
      Rent: 70000,
      Address: "Hyderabad",
      Image: office
    },
    {
      Name: "WeWork",
      Rent: 55000,
      Address: "Bangalore",
      Image: office
    }
  ];

  return (
    <div style={{ marginLeft: "20px" }}>
      <h1>Office Space, at Affordable Range</h1>

      {officeSpaces.map((item, index) => (
        <div key={index}>
          <img
            src={item.Image}
            width="25%"
            height="25%"
            alt="Office Space"
          />

          <h1>Name: {item.Name}</h1>

          <h3
            style={{
              color: item.Rent <= 60000 ? "red" : "green"
            }}
          >
            Rent: Rs. {item.Rent}
          </h3>

          <h3>Address: {item.Address}</h3>

          <hr />
        </div>
      ))}
    </div>
  );
}

export default App;