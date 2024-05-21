import { A } from "@solidjs/router";

export default function NotFound() {
  return (
    <main class="text-center mx-auto text-gray-700 p-4">
      <h1 class="max-6-xs text-6xl text-blue-500 font-thin uppercase my-16">404</h1>
      <p class="mt-8">
        А всё, думал в сказку попал?
      </p>
      <p class="my-4">
        <A href="/" class="text-blue-500 hover:underline">
          На главную
        </A>
      </p>
    </main>
  );
}
