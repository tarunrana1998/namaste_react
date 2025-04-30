// const heading = React.createElement("h1", { data: "xyz" }, "Hello World again");
// const heading = React.createElement("div", { data: "xyz" }, [
//   React.createElement("h1", { data: "xyz" }, "Hello World again"),
//   React.createElement("h1", { data: "xyz" }, "Hello World again"),
// ]);


const heading = () => {
    <h1>Hello World</h1>
  }
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  
  root.render(<heading/>);