<script>
  import Router, { link } from "svelte-spa-router";
  import { routes } from "./routes.js";
  import { onMount } from "svelte";
  import Navbar from "./components/Navbar.svelte";
  import Footer from "./components/Footer.svelte";


  let data;
  if (import.meta.env.VITE_API_ENDPOINT) {
    async function fetchData() {
      const response = await fetch(import.meta.env.VITE_API_ENDPOINT);
      data = await response.json();
    }
    onMount(fetchData);
  }
</script>

<div class="container">

  <div class="p-8 overflow-hidden bg-gray-50 dark:bg-gray-900">
    <Navbar />
    <Router {routes} />

    {#if data}
      <p>Data:</p>
      <ul>
        {#each Object.entries(data) as [key, value]}
          <li>{key}: {value}</li>
        {/each}
      </ul>
    {/if}
    <Footer />
  </div>
</div>

<style>
  .container {
    max-width: 1200px;
    margin: 0 auto;
    border-radius: 8px; /* Optional rounded corners */
  }
</style>
