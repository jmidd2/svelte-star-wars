<script lang="ts">
  import Generator from './lib/Generator.svelte';
</script>

<div class="header body-container">
  <div class="header-container">
    <h1>Random Planet Thingy</h1>
    <p>Use this to grab a random Star Wars planet to use as a name in the Tailnet.</p>
  </div>
</div>
<main class="body-container">
  <Generator />
  <p class="mt-10">The next step is to give it a memory, so that it can remember what Planets I've used for devices.</p>
</main>

<style>
  .body-container {
    @apply px-5 md:px-0;
  }

  .header {
    @apply bg-zinc-500;
  }

  .header-container {
    @apply container mx-auto py-10;
  }

  main {
    @apply container mx-auto py-10;
  }

  h1 {
    @apply text-3xl font-extrabold;
  }
</style>
