<script>
  import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
  import { DarkMode } from "flowbite-svelte";
</script>

<!-- Full-width Navbar Background with Bottom Border -->
<div class="bg-white dark:bg-gray-900 w-full border-b border-gray-200 dark:border-gray-700">
  <!-- Navbar Content Container -->
  <div class="container mx-auto px-4 sm:px-6 lg:px-8">
    <Navbar>
      <NavBrand href="/">
        <img src="/images/flowbite-svelte-icon-logo.svg" class="me-3 h-6 sm:h-9" alt="Flowbite Logo" />
        <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Cyber Cert Online</span>
      </NavBrand>
      <NavHamburger />
      <NavUl>
        <NavLi href="/">Home</NavLi>
        <NavLi href="/about">About</NavLi>
        <NavLi href="/docs/components/navbar">Navbar</NavLi>
        <NavLi href="/pricing">Pricing</NavLi>
        <NavLi href="/contact">Contact</NavLi>
      </NavUl>
      <DarkMode /> 
    </Navbar>
  </div>
</div>

