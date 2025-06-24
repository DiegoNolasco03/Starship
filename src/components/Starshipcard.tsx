interface Starship {
  name: string;
  model: string;
  manufacturer: string;
  starship_class: string;
  max_atmosphering_speed: string;
  crew: string;
  passengers: string;
  cargo_capacity: string;
  hyperdrive_rating: string;
}

interface Props {
  ship: Starship;
}

export default function StarshipCard({ ship }: Props) {
  return (
    <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-yellow-400 transition-colors">
      <h2 className="text-xl font-bold mb-2 text-yellow-400">{ship.name}</h2>
      <div className="space-y-2 text-sm">
        <p>
          <span className="font-semibold text-gray-400">Modelo:</span>{" "}
          {ship.model}
        </p>
        <p>
          <span className="font-semibold text-gray-400">Fabricante:</span>{" "}
          {ship.manufacturer}
        </p>
        <p>
          <span className="font-semibold text-gray-400">Clase:</span>{" "}
          {ship.starship_class}
        </p>
        <p>
          <span className="font-semibold text-gray-400">Velocidad:</span>{" "}
          {ship.max_atmosphering_speed}
        </p>
        <p>
          <span className="font-semibold text-gray-400">Tripulación:</span>{" "}
          {ship.crew}
        </p>
        <p>
          <span className="font-semibold text-gray-400">Pasajeros:</span>{" "}
          {ship.passengers}
        </p>
        <p>
          <span className="font-semibold text-gray-400">
            Capacidad de carga:
          </span>{" "}
          {ship.cargo_capacity}
        </p>
        <p>
          <span className="font-semibold text-gray-400">
            Clasificación del hiperimpulsor:
          </span>{" "}
          {ship.hyperdrive_rating}
        </p>
      </div>
    </div>
  );
}
