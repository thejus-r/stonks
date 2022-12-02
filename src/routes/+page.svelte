<script lang="ts">
  import type {PageData} from "./$types"

  export let data: PageData

  console.log(data.items)
</script>



{#each data.items as item}
<li>{item.name}</li>
{/each}