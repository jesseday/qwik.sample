import { component$, Slot } from '@builder.io/qwik';

export const Heading = component$((props: { title?: string | null}) => {
  const title = props.title?.split('\\r') || null;
  if (!title) return null;

  return (
    <h1 class="text-4xl sm:text-5xl lg:text-8xl xl:text-10xl">
      {title.map((line: any) => <>{line}<br/></>)}
    </h1>
  )
});

export const Subtitle = component$((props: { subtitle?: string | null }) => {
  if (!props.subtitle) return null;

  return (
    <p class="text-lg">{props.subtitle}</p>
  );
})


export const Container = component$(() => {
  return (
    <div class="max-w-screen-3xl mx-auto">
      <div class="py-12 px-8">
        <Slot name="title" />
        <Slot name="subtitle" />
      </div>
    </div>
  )
});