<script>
  import { Radio } from 'flowbite-svelte';
  import LeftColumn from './LeftColumn.svelte';

  export let rightTitle = "Right Column Title";
  export let rightContent = "Right Column Content";
  
  let question = "What is the capital of Uruguay?";
  let options = [
    { id: 'option1', text: "Monterey" },
    { id: 'option2', text: "New Uruguay" },
    { id: 'option3', text: "Montevideo" },
    { id: 'option4', text: "Panama City" }
  ];
  let selectedOption = '';

  const handleSubmit = () => {
    console.log('Selected option:', selectedOption);
    // Handle submission logic here
  };
</script>

<div class="container mx-auto px-4 sm:px-6 lg:px-8 mt-8">
  <div class="grid grid-cols-12 gap-4">
    <!-- Left Column -->
    <div class="col-span-12 md:col-span-3 bg-white dark:bg-gray-800 p-6 rounded-lg">
      <LeftColumn title="Left Column Title" content="This is the content for the left column." />
    </div>
    
    <!-- Right Column -->
    <div class="col-span-12 md:col-span-9 bg-white dark:bg-gray-800 p-6 rounded-lg">
      <!-- Question -->
      <h2 class="font-semibold mb-8 text-gray-900 dark:text-white">{question}</h2>

      <!-- Options -->
      {#each options as option}
        <label class="flex items-center mb-6 p-4 border border-gray-300 dark:border-gray-700 rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700">
          <div class="flex-grow text-gray-900 dark:text-white">{option.text}</div>
          <Radio name="capital" id={option.id} bind:group={selectedOption} value={option.id} class="ml-4"/>
        </label>
      {/each}

      <!-- Submit Button -->
      <div class="mt-8 flex justify-end">
        <button on:click={handleSubmit} class="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Submit
        </button>
      </div>
    </div>
  </div>
</div>
