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

  console.log("App loaded with routes:", routes);
</script>

<div class="flex flex-col min-h-screen">
  <Navbar />

  <div class="flex-grow">
    <Router {routes} />
  </div>

  <Footer />
</div>
