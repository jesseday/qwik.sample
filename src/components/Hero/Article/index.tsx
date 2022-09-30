import { component$, Slot } from '@builder.io/qwik';

export const Heading = component$((props: { title?: string | null}) => {
  const title = props.title?.split('\\r') || null;
  if (!title) return null;

  return (
    <h1 class="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold">
      {title.map((line: any) => <>{line}<br/></>)}
    </h1>
  )
});

export const Image = component$((props: { image?: string | null }) => {
  if (!props.image) return null;

  return (
    <>
      <picture>
        <source srcSet="https://www.datocms-assets.com/37939/1662369693-yada.jpg?auto=format&amp;crop=focalpoint&amp;dpr=0.25&amp;fit=crop&amp;fm=webp&amp;h=700&amp;w=1440 360w,https://www.datocms-assets.com/37939/1662369693-yada.jpg?auto=format&amp;crop=focalpoint&amp;dpr=0.5&amp;fit=crop&amp;fm=webp&amp;h=700&amp;w=1440 720w,https://www.datocms-assets.com/37939/1662369693-yada.jpg?auto=format&amp;crop=focalpoint&amp;dpr=0.75&amp;fit=crop&amp;fm=webp&amp;h=700&amp;w=1440 1080w,https://www.datocms-assets.com/37939/1662369693-yada.jpg?auto=format&amp;crop=focalpoint&amp;fit=crop&amp;fm=webp&amp;h=700&amp;w=1440 1440w,https://www.datocms-assets.com/37939/1662369693-yada.jpg?auto=format&amp;crop=focalpoint&amp;dpr=1.5&amp;fit=crop&amp;fm=webp&amp;h=700&amp;w=1440 2160w,https://www.datocms-assets.com/37939/1662369693-yada.jpg?auto=format&amp;crop=focalpoint&amp;dpr=2&amp;fit=crop&amp;fm=webp&amp;h=700&amp;w=1440 2880w,https://www.datocms-assets.com/37939/1662369693-yada.jpg?auto=format&amp;crop=focalpoint&amp;dpr=3&amp;fit=crop&amp;fm=webp&amp;h=700&amp;w=1440 4320w,https://www.datocms-assets.com/37939/1662369693-yada.jpg?auto=format&amp;crop=focalpoint&amp;dpr=4&amp;fit=crop&amp;fm=webp&amp;h=700&amp;w=1440 5760w" sizes="(max-width: 1440px) 100vw, 1440px" type="image/webp" />
        <source srcSet="https://www.datocms-assets.com/37939/1662369693-yada.jpg?auto=format&amp;crop=focalpoint&amp;dpr=0.25&amp;fit=crop&amp;h=700&amp;w=1440 360w,https://www.datocms-assets.com/37939/1662369693-yada.jpg?auto=format&amp;crop=focalpoint&amp;dpr=0.5&amp;fit=crop&amp;h=700&amp;w=1440 720w,https://www.datocms-assets.com/37939/1662369693-yada.jpg?auto=format&amp;crop=focalpoint&amp;dpr=0.75&amp;fit=crop&amp;h=700&amp;w=1440 1080w,https://www.datocms-assets.com/37939/1662369693-yada.jpg?auto=format&amp;crop=focalpoint&amp;fit=crop&amp;h=700&amp;w=1440 1440w,https://www.datocms-assets.com/37939/1662369693-yada.jpg?auto=format&amp;crop=focalpoint&amp;dpr=1.5&amp;fit=crop&amp;h=700&amp;w=1440 2160w,https://www.datocms-assets.com/37939/1662369693-yada.jpg?auto=format&amp;crop=focalpoint&amp;dpr=2&amp;fit=crop&amp;h=700&amp;w=1440 2880w,https://www.datocms-assets.com/37939/1662369693-yada.jpg?auto=format&amp;crop=focalpoint&amp;dpr=3&amp;fit=crop&amp;h=700&amp;w=1440 4320w,https://www.datocms-assets.com/37939/1662369693-yada.jpg?auto=format&amp;crop=focalpoint&amp;dpr=4&amp;fit=crop&amp;h=700&amp;w=1440 5760w" sizes="(max-width: 1440px) 100vw, 1440px" />
        <img width="686px" height="333px" src="https://www.datocms-assets.com/37939/1662369693-yada.jpg?auto=format&amp;crop=focalpoint&amp;fit=crop&amp;h=700&amp;w=1440" alt="" />
      </picture>
    </>
  )
});


export const Container = component$(() => {
  return (
    <div class="max-w-screen-3xl mx-auto">
      <div class="flex flex-col gap-8 lg:flex-row lg:flex-nowrap px-12 py-16">
        <div class="order-1 w-full lg:w-1/2 flex flex-col justify-center">
          <div class="lg:px-12">
            <Slot name="title" />
          </div>
        </div>
        <div class="order-0 lg:order-2 lg:w-1/2 flex flex-col justify-center">
          <Slot name="image" />
        </div>
      </div>
    </div>
  )
});