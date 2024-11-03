import { useEffect, useState } from "react";
import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";
import "../App.css";

function App() {
  const [summary, setSummary] = useState({ content: null });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          //"http://0.0.0.0:8000/summary?video_url=mqv74vBnVu0",
        );
        const data = await response.json();
        console.log(data);
        setSummary(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  });

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        count is {summary["content"]}
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
