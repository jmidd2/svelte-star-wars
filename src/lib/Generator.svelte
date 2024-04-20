<script lang="ts">
  import type { ApiResponse, Planet } from '../index';

  async function fetchPlanetCount() {
      const response = await fetch( 'https://swapi.py4e.com/api/planets/?format=json' );

      const data: ApiResponse = await response.json();

      if ( response.ok ) {
        const numOfPlanets = data?.count;
        if ( numOfPlanets ) {
          return numOfPlanets;
        } else {
          return Promise.reject( new Error( `No planets were found.` ) );
        }
      }
      const msg = 'There was an error contacting the API.'
      return Promise.reject( new Error(msg) );
  }

  async function fetchPlanet() {
      const id = Math.floor(Math.random() * (await fetchPlanetCount())) + 1;
      const response = await fetch( `https://swapi.py4e.com/api/planets/${id}?format=json` );

      const data: Planet = await response.json();

      console.log(data)

      if ( response.ok ) {
        if ( data ) {
          return data;
        } else {
          return Promise.reject( new Error( `No planet with id "${id}" was found.` ) );
        }
      }

      return Promise.reject( new Error( 'There was an error fetching the planet data.' ) );
  }

  let planetPromise = fetchPlanet();

  function handleClick() {
    planetPromise = fetchPlanet();
  }
</script>

<div class="py-5 text-xl mb-7">
    {#await planetPromise}
        Loading...
    {:then { name }}
        <p>{name}</p>
    {/await}
</div>
<button class="bg-star-wars-400 text-zinc-900 rounded py-2 px-3 hover:bg-star-wars-200" on:click={handleClick}>Get Another</button>

<style></style>
