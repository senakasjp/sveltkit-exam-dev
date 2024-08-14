<script>
  import Router, { link } from "svelte-spa-router";
  import { routes } from "./routes.js";
  import { onMount } from "svelte";
  import Navbar from "./components/Navbar.svelte";
  import Footer from "./components/Footer.svelte";
  import Body from "./components/Body.svelte";

  let data;
  if (import.meta.env.VITE_API_ENDPOINT) {
    async function fetchData() {
      const response = await fetch(import.meta.env.VITE_API_ENDPOINT);
      data = await response.json();
    }
    onMount(fetchData);
  }


</script>

<div class="flex flex-col min-h-screen">
  <!-- Navbar remains at the top -->
  <Navbar />
  
  <!-- Router or main content will take up all available space -->
  <div class="flex-grow">
    <Router {routes} />
  </div>
  
  <!-- Footer is placed at the bottom -->
  <Footer />
</div>
