import { useEffect, useState } from "react";
import StarshipCard from "./StarshipCard";

function Starships() {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("https://swapi.py4e.com/api/starships/");
        const data = await response.json();
        setData(data.results);
      } catch (error) {
        console.error(error);
        setError("Error al cargar los datos");
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  // Loading
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 text-white p-4 md:p-8">
        <div className="flex justify-center items-center h-screen">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-yellow-400"></div>
        </div>
      </div>
    );
  }
  // Error
  if (error) {
    return (
      <div className="min-h-screen bg-gray-900 text-white p-4 md:p-8">
        <div className="flex justify-center items-center h-screen">
          <div className="flex flex-col gap-2 text-yellow-400 text-xl font-bold">
            <span className="text-3xl mb-4">{error}</span>{" "}
            <button>
              <a
                href="/"
                className="bg-yellow-400 text-black rounded-md py-3 px-5"
              >
                Recargar
              </a>
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4 md:p-8">
      <h1 className="text-3xl font-bold mb-8 text-yellow-400 text-center">
        Naves de Star Wars
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((ship) => (
          <StarshipCard key={ship.model} ship={ship} />
        ))}
      </div>

      <footer className="text-center text-gray-400 mt-8">
        Made with Vite (React.js) and Tailwind CSS by Daniel Reyes
      </footer>
    </div>
  );
}
export default Starships;
