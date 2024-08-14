<script>
  import { format } from "timeago.js";
  import { blogs } from "../data.js";
  import { Card, Button, Toggle } from 'flowbite-svelte';

  let hCard = false;
</script>

<div class="container mx-auto px-4 flex flex-col items-center space-y-4">
  <div class="flex space-x-4">
    <a href="/" class="bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400 rounded-lg border border-gray-200 dark:border-gray-700 shadow-md flex max-w-lg flex-col md:flex-row md:max-w-xl hover:bg-gray-100 dark:hover:bg-gray-700 flex-1">
      <img class="rounded-t-lg object-cover w-full h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="/images/image-1.webp" alt="">
      <div class="p-4 sm:p-6">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
      </div>
    </a>
    
    <a href="/" class="bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400 rounded-lg border border-gray-200 dark:border-gray-700 shadow-md flex max-w-lg flex-col md:flex-row md:max-w-xl hover:bg-gray-100 dark:hover:bg-gray-700 flex-1">
      <img class="rounded-t-lg object-cover w-full h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="/images/image-1.webp" alt="">
      <div class="p-4 sm:p-6">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
      </div>
    </a>
  </div>

  <div class="flex space-x-4">
    <a href="/" class="bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400 rounded-lg border border-gray-200 dark:border-gray-700 shadow-md flex max-w-lg flex-col md:flex-row md:max-w-xl hover:bg-gray-100 dark:hover:bg-gray-700 flex-1">
      <img class="rounded-t-lg object-cover w-full h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="/images/image-1.webp" alt="">
      <div class="p-4 sm:p-6">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
      </div>
    </a>
    
    <a href="/" class="bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400 rounded-lg border border-gray-200 dark:border-gray-700 shadow-md flex max-w-lg flex-col md:flex-row md:max-w-xl hover:bg-gray-100 dark:hover:bg-gray-700 flex-1">
      <img class="rounded-t-lg object-cover w-full h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="/images/image-1.webp" alt="">
      <div class="p-4 sm:p-6">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
      </div>
    </a>
  </div>
</div>
