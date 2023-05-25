<script lang="ts">
  import ParamsTab from './tab/ParamsTab.svelte';

  import { getContext, setContext } from 'svelte';
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

<div>
  <div>
    <ul
      class="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b
      border-gray-200 dark:border-gray-700 dark:text-gray-400 mb-8"
    >
      {#each containerTabList as tabName}
        <li class="mr-2">
          <a
            on:click="{selectTabHandler(tabName)}"
            href="{`#${tabName}`}"
            class="{`${
              (tabName == selectedTab && 'tab-active') || 'tab-item'
            }`}">{tabName}</a
          >
        </li>
      {/each}
    </ul>
  </div>
  {#if selectedTab == 'Params'}
    <ParamsTab />
  {/if}
</div>
