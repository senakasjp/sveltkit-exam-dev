<script>
  import { Radio } from "flowbite-svelte";
  import LeftColumn from "./LeftColumn.svelte";
  import { onMount } from "svelte";

  export let rightTitle = "Right Column Title";
  export let rightContent = "Right Column Content";

  let selectedOption = "";
  let currentQuestionIndex = 0;

  let quizData = null;

  // API endpoint and parameters
  const apiUrl = "http://localhost:444/svelteapi/api.php";
  const apiKey = "sdsdsdf34frsf3dddfe33";
  const quizId = 2;

  // Fetch quiz data on component mount
  async function fetchQuizData() {
    try {
      const response = await fetch(
        `${apiUrl}?api_key=${apiKey}&quizid=${quizId}`
      );
      const data = await response.json();
      quizData = data;
      console.log("Quiz data:", data);
    } catch (error) {
      console.error("Error fetching quiz data:", error);
    }
  }

  const handleSubmit = () => {
    console.log(
      `Selected option for question ${quizData.questions[currentQuestionIndex].name}:`,
      selectedOption
    );
    // Handle submission logic here, like storing the answer or moving to the next question
    if (currentQuestionIndex < quizData.questions.length - 1) {
      currentQuestionIndex++;
      selectedOption = ""; // Reset the selected option for the next question
    } else {
      alert("You have completed the quiz!");
    }
  };

  onMount(fetchQuizData);
</script>

<div class="container mx-auto px-4 sm:px-6 lg:px-8 mt-8">
  <div class="grid grid-cols-12 gap-4">
    <!-- Left Column -->
    <div
      class="col-span-12 md:col-span-3 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
    >
      <LeftColumn
        title="Left Column Title"
        content="This is the content for the left column."
      />
    </div>

    <!-- Right Column -->
    <div
      class="col-span-12 md:col-span-9 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
    >
      {#if quizData}
        <h1 class="text-2xl font-bold mb-4">{quizData.name}</h1>
        <p class="mb-8">{quizData.intro}</p>

        <!-- Display current question -->
        <div>
          <h2 class="font-semibold mb-4 text-gray-900 dark:text-white">
            {quizData.questions[currentQuestionIndex].name}: {@html quizData.questions[currentQuestionIndex].questiontext}
          </h2>

          <!-- Options -->
          {#each quizData.questions[currentQuestionIndex].answers as answer}
            <label
              style="display: flex; align-items: center; margin-bottom: 10px;"
            >
              <Radio
                name="options"
                id={answer.id}
                bind:group={selectedOption}
                value={answer.id}
              />
              <div style="margin-left: 8px; display: inline-block;">
                {@html answer.answertext}
              </div>
            </label>
          {/each}
        </div>
      {:else}
        <p>Loading quiz data...</p>
      {/if}

      <!-- Submit Button -->
      <div class="mt-8 flex justify-end">
        <button
          on:click={handleSubmit}
          class="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          {#if currentQuestionIndex < quizData?.questions.length - 1}
            Next
          {:else}
            Submit
          {/if}
        </button>
      </div>
    </div>
  </div>
</div>
