<script>
  import { derived, writable } from "svelte/store";
const count = writable(2);
const multiplier = writable(1);
let countValue;
let multiplierValue;
let result;
count.subscribe((value) => {
  countValue = value;
});
multiplier.subscribe((value) => {
multiplierValue = value;
});
const product = derived([count, multiplier], ([$count, $multiplier]) => {
  return $count * $multiplier;
});
product.subscribe((value) => {
  result = value;
});
</script>
<div>
  <h1>
    {countValue} * {multiplierValue} = {result}
  </h1>
  <button on:click={() => count.update((n) => n + 1)}>Increament count</button>
  <button on:click={() => multiplier.update((n) => n + 1)}>Increament multiplier</button>
</div>
