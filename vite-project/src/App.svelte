<script lang="ts">
  import RequestContainer from './lib/request/RequestContainer.svelte';

  import RequestURLContainer from './lib/request/RequestURLContainer.svelte';
  import { setContext } from 'svelte';

  setContext('selectedMethod', 'GET');
  setContext('selectedTab', 'Params');
</script>

<main class="flex space-y-8 flex-col w-full">
  <RequestURLContainer />

  <RequestContainer />

  <p>
    Check out <a
      href="https://github.com/sveltejs/kit#readme"
      target="_blank"
      rel="noreferrer">SvelteKit</a
    >, the official Svelte app framework powered by Vite!
  </p>

  <p class="read-the-docs">Click on the Vite and Svelte logos to learn more</p>
</main>

<style>
  .read-the-docs {
    color: #888;
  }
</style>
