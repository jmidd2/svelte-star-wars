type Resident = string; // Assuming the residents are just URLs

type Film = string; // Assuming the films are just URLs

export type Planet = {
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
  residents: Resident[];
  films: Film[];
  created: string; // Consider using Date type if appropriate
  edited: string; // Consider using Date type if appropriate
  url: string;
};

export type ApiResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  results: Planet[];
};
