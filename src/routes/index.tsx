import { component$, useSignal } from "@builder.io/qwik";
import { server$, type DocumentHead } from "@builder.io/qwik-city";

const sendEmailToJedeer = server$(async (message: string) => {
  console.log("Sending email to Jedeer", message);
  return message;
});

export default component$(() => {
  const message = useSignal("");
  return (
    <div class="flex flex-col justify-center gap-4 items-center h-screen w-screen">
      <h1>Hangout Application</h1>
      <input bind:value={message} class="border-2 rounded px-2 py-1 border-black" type="text" />
      <button
        onClick$={async () => {
          const result = await sendEmailToJedeer(message.value);
          console.log(result);
        }}
        class="bg-purple-100 px-4 py-2 rounded"
      >
        Send
      </button>
      <p>Click to send an email to send an email to jedsen</p>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Hangout",
  meta: [
    {
      name: "description",
      content: "Lets hangout",
    },
  ],
};
