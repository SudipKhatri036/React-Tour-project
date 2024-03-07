import Loading from "./Loading";
import Tours from "./Tours";
import { useState, useEffect } from "react";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tours-project";

function App() {
  const [tourData, setTourData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const removeItem = (id) => {
    let newUserData = tourData.filter((data) => data.id !== id);
    setTourData(newUserData);
  };

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setIsLoading(false);
      setTourData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return (
      <main>
        <Loading />;
      </main>
    );
  }

  if (tourData.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>no tours left</h2>
          <button
            className="btn"
            onClick={() => fetchData()}
            style={{ marginTop: "2rem" }}
          >
            refresh
          </button>
        </div>
      </main>
    );
  }

  return (
    <main>
      <Tours tourData={tourData} removeItem={removeItem} />;
    </main>
  );
}

export default App;
