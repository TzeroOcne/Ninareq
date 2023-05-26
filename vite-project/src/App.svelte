<script lang="ts">
  import { filesystem } from '@neutralinojs/lib';
  import RequestContainer from './lib/request/RequestContainer.svelte';

  import RequestURLContainer from './lib/request/RequestURLContainer.svelte';
  import { setContext } from 'svelte';
  filesystem
    .readDirectory('./')
    .then((data) => {
      console.error({ data });
    })
    .catch((err) => {
      console.error({ err });
    });

  setContext('selectedMethod', 'GET');
  setContext('selectedTab', 'Params');
</script>

<main class="flex space-y-8 flex-col w-full">
  <RequestURLContainer />

  <RequestContainer />

  <p>
    Chek out <a
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
