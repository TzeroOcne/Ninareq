<script lang="ts">
  import { createEventDispatcher, getContext, setContext } from 'svelte';
  import { indexUpdateList } from './map-stote';

  export let section;
  export let index;
  export let isactive = false;
  const sectionName = `map-${section}-${index}`;
  const dispatch = createEventDispatcher();

  let fieldMap = getContext<string[]>(sectionName);
  let fieldKey = fieldMap?.[0] ?? '';
  let fieldVal = fieldMap?.[1] ?? '';

  $: {
    setContext(sectionName, [fieldKey, fieldVal]);
    indexUpdateList.update((value) => {
      console.error({ isactive, index });

      value[index] = isactive;
      console.error(value);

      return value;
    });
    dispatch('updated');
  }
</script>

<tr>
  <td>
    <input type="checkbox" name="" id="" bind:checked="{isactive}" />
  </td>
  <td>
    <input
      bind:value="{fieldKey}"
      type="text"
      class="bg-transparent w-full focus:outline-none"
    />
  </td>
  <td>
    <input
      bind:value="{fieldVal}"
      type="text"
      class="bg-transparent w-full focus:outline-none"
    />
  </td>
  <td>
    <input type="text" class="bg-transparent w-full focus:outline-none" />
  </td>
</tr>
