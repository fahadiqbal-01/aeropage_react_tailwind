import { useState } from "react";
import Header from "./components/header/Header";
import Banner from "./components/banner/Banner";
import Group from "./components/groups/Group";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header/>
      <Banner/>
      <Group/>
    </>
  );
}

export default App;
