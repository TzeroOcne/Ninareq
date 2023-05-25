<script lang="ts">
  import { setContext, getContext } from 'svelte';

  const methodOptionList = ['GET', 'POST', 'PATCH', 'DELETE'];
  let selectedMethod = getContext('selectedMethod');

  $: {
    setContext('selectedMethod', selectedMethod);
  }

  let showMethodOptions = false;
  function bodyClick() {
    document.removeEventListener('click', bodyClick);
    showMethodOptions = false;
  }

  function selectMethodHandler(e: MouseEvent) {
    showMethodOptions = !showMethodOptions;
    if (showMethodOptions) {
      document.addEventListener('click', bodyClick);
    } else {
      document.removeEventListener('click', bodyClick);
    }
    e.stopPropagation();
  }
</script>

<div class="flex border-white border-2 rounded-lg">
  <button
    class="{`rounded-l-lg rounded-r-none w-28 py-2 px-0 relative bg-transparent
      focus:outline-none ${showMethodOptions && 'bg-neutral-600'}`}"
    on:click="{selectMethodHandler}"
    >{selectedMethod}
    <div
      hidden="{!showMethodOptions}"
      class="absolute top-full translate-y-2 z-10 w-full rounded-lg bg-neutral-800 border-white
        border-2 drop-down-button"
    >
      {#each methodOptionList as method}
        <button
          on:click="{() => {
            selectedMethod = method;
          }}"
          class="bg-transparent hover:bg-neutral-500 w-full rounded-none first:rounded-t-lg last:rounded-b-lg"
        >
          {method}
        </button>
      {/each}
    </div>
  </button>
  <div class="bg-none outline outline-white w-0 outline-1 my-2">&nbsp;</div>
  <input
    type="text"
    name="url"
    id="url"
    class="w-full rounded-r-md bg-transparent pl-4 focus:outline-none"
  />
</div>

<style>
  .read-the-docs {
    color: #888;
  }
</style>
