<script>
  import { format } from "timeago.js";
  import Card from "./Card.svelte";
  import { blogs } from "../data.js";
</script>

<div class="container mx-auto px-4">
  <h1 class="text-3xl dark:text-white mb-4">Svelte Starter</h1>
  <p class="text-xl dark:text-white mb-6">Svelte + Vite + TailwindCSS + Flowbite-Svelte + Svelte-Spa-Router</p>
  
  {#each blogs as blog, i}
    <Card
      title={blog.title}
      description={blog.content}
      image={blog.image}
      publishDate={format(blog.publishDate)}
    />
  {/each}
</div>

