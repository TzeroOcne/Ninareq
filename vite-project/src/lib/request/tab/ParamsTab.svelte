<script lang="ts">
  import { getContext, setContext } from 'svelte';
  import InputRow from './InputRow.svelte';
  import { indexUpdateList } from './map-stote';
  let lastIndex = 0;
  let updatedIndex = [false];
  indexUpdateList.update((val) => {
    updatedIndex = val;
    return val;
  });
  console.error({ index: getContext('params-index-list') });

  function updateIndex(index: number) {
    return function () {
      if (lastIndex == index) {
        lastIndex++;
        indexUpdateList.update((value) => {
          value[index] = true;
          return [...value, false];
        });
      }
    };
  }

  indexUpdateList.subscribe((value) => {
    updatedIndex = value;
  });
</script>

<div class="w-full">
  <table class="w-full request-table">
    <thead>
      <tr>
        <td class="request-cell w-12">&nbsp;</td>
        <td class="request-cell"> Key </td>
        <td class="request-cell"> Value </td>
        <td class="request-cell">Description</td>
      </tr>
    </thead>
    <tbody>
      {#each updatedIndex as key, index}
        <InputRow
          on:updated="{updateIndex(index)}"
          section="params"
          index="{index}"
          isactive="{updatedIndex[index]}"
        />
      {/each}
    </tbody>
  </table>
</div>
