<script>
  import { Footer, FooterCopyright, FooterLinkGroup, FooterLink, FooterBrand, FooterIcon } from 'flowbite-svelte';
  // @ts-ignore
  import { FacebookSolid, GithubSolid, DiscordSolid, TwitterSolid } from 'flowbite-svelte-icons';
  // @ts-ignore
  import Dribble from '../utils/icons/Dribble.svelte';
</script>

<!-- Full-width Footer Background -->
<div class="w-full bg-white dark:bg-gray-900">
  <!-- Footer Content Container -->
  <Footer footerType="socialmedia" class="px-6 py-4">
    <div class="container mx-auto md:flex md:justify-between px-6">
      <div class="mb-6 md:mb-0">
        <FooterBrand href="https://flowbite.com" src="/images/flowbite-svelte-icon-logo.svg" alt="Flowbite Logo" name="Flowbite" />
      </div>
      <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
        <div>
          <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
          <FooterLinkGroup>
            <FooterLink liClass="mb-4" href="/">Flowbite</FooterLink>
            <FooterLink liClass="mb-4" href="/">Tailwind CSS</FooterLink>
          </FooterLinkGroup>
        </div>
        <div>
          <h2 class="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">Follow us</h2>
          <FooterLinkGroup>
            <FooterLink liClass="mb-4" href="/">GitHub</FooterLink>
            <FooterLink liClass="mb-4" href="/">Discord</FooterLink>
          </FooterLinkGroup>
        </div>
        <div>
          <h2 class="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">Legal</h2>
          <FooterLinkGroup>
            <FooterLink liClass="mb-4" href="/">Privacy Policy</FooterLink>
            <FooterLink liClass="mb-4" href="/">Terms & Conditions</FooterLink>
          </FooterLinkGroup>
        </div>
      </div>
    </div>
    <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
    <div class="container mx-auto sm:flex sm:items-center sm:justify-between px-6">
      <FooterCopyright href="/" by="Flowbite™" />
      <div class="flex mt-4 space-x-6 rtl:space-x-reverse sm:justify-center sm:mt-0">
        <FooterIcon href="/">
          <FacebookSolid class="w-5 h-5 text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white" />
        </FooterIcon>
        <FooterIcon href="/">
          <DiscordSolid class="w-5 h-5 text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white" />
        </FooterIcon>
        <FooterIcon href="/">
          <TwitterSolid class="w-5 h-5 text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white" />
        </FooterIcon>
        <FooterIcon href="/">
          <GithubSolid class="w-5 h-5 text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover=text-white" />
        </FooterIcon>
        <FooterIcon href="/">
          <Dribble />
        </FooterIcon>
      </div>
    </div>
  </Footer>
</div>
