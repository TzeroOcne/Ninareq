<script lang="ts">
  import { getContext, onMount, setContext } from 'svelte';
  import './request.css';
  const containerTabList = ['Params', 'Headers', 'Body'];
  let selectedTab = getContext('selectedTab');

  $: {
    setContext('selectedTab', selectedTab);
  }

  function selectTabHandler(tabName: string) {
    return function () {
      selectedTab = tabName;
    };
  }
</script>

<ul
  class="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400"
>
  {#each containerTabList as tabName}
    <li class="mr-2">
      <a
        on:click="{selectTabHandler(tabName)}"
        href="{`#${tabName}`}"
        class="{`${(tabName == selectedTab && 'tab-active') || 'tab-item'}`}"
        >{tabName}</a
      >
    </li>
  {/each}
</ul>
