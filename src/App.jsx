import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import "./App.css";
import CoffeeCard from "./CoffeeCard";
import Navbar from "./Navbar";

function App() {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees);

  return (
    <>
      <div className=" p-5
      ">
        <Navbar></Navbar>
        <h2>Welcome to coffee home</h2>

        <div className=" grid md:grid-cols-2 gap-4 mt-5">
        {
        coffees.map((coffee) => (
          <CoffeeCard key={coffee._id} coffee={coffee}
          coffees={coffees}
          setCoffees={setCoffees}
          ></CoffeeCard>
        ))}
        </div>
      </div>
    </>
  );
}

export default App;
