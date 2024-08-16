import Home from "./components/Home.svelte";
import Article from "./components/Article.svelte";
import About from "./components/About.svelte";
import NotFound from "./components/NotFound.svelte";
import SignIn from './components/SignIn.svelte';
import ForgotPassword from "./components/ForgotPassword.svelte";
import QuizPage from "./components/QuizPage.svelte";


export const routes = {
  // Exact path
  "/": Home,
  "/about": About,
  "/forgot-password": ForgotPassword,
  "/quizpage": QuizPage,
  // Exact path + parameter
  "/article/:title": Article,
  "/auth/login": SignIn,
  // Wildcard
  //"*": NotFound,
};



console.log('Routes object defined:', routes);