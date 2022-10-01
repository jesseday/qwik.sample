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
});

type AspectRatioProps = {
  withGradient?: boolean
  customGradient?: string | null
};

export function AspectRatio({withGradient = false, customGradient = null}: AspectRatioProps ) {
  let gradient = '';
  if (withGradient && !customGradient) {
    gradient = 'bg-gradient-to-br from-brand-blue-400 to-brand-purple-500';
  }
  if (withGradient && customGradient) {
    gradient = customGradient;
  }

  // The img is a 16 x 9 transparent image that sets the aspect ratio.
  // As the css aspect-ratio property is more widely supported,
  // we can transition over to that.
  return (
    <>
      <img class={`${gradient} block w-full h-auto`} aria-hidden='true' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAJCAQAAACRI2S5AAAAEElEQVR42mNkIAAYRxWAAQAG9gAKqv6+AwAAAABJRU5ErkJggg==" />
    </>
  );
}

// TODO: Setup graphql type generator for CMS
type BackgroundProps = {
  image?: string | null
};

export const Background = component$((props: BackgroundProps) => {
  if (!props.image) {
    return (
      <AspectRatio withGradient={true} />
    );
  }

  // TODO: Actually use the background image prop.
  // The img is a 16 x 9 transparent image that sets the aspect ratio.
  // As the css aspect-ratio property is more widely supported,
  // we can transition over to that.
  return (
    <>
      <AspectRatio />
      <picture class="absolute top-0 left-0 w-full ">
        <source srcSet="https://www.datocms-assets.com/44234/1642521802-homepage-backup-image.jpg?auto=format&amp;crop=focalpoint&amp;dpr=0.25&amp;fit=crop&amp;fm=webp&amp;h=970&amp;w=1725 431w,https://www.datocms-assets.com/44234/1642521802-homepage-backup-image.jpg?auto=format&amp;crop=focalpoint&amp;dpr=0.5&amp;fit=crop&amp;fm=webp&amp;h=970&amp;w=1725 862w,https://www.datocms-assets.com/44234/1642521802-homepage-backup-image.jpg?auto=format&amp;crop=focalpoint&amp;dpr=0.75&amp;fit=crop&amp;fm=webp&amp;h=970&amp;w=1725 1293w,https://www.datocms-assets.com/44234/1642521802-homepage-backup-image.jpg?auto=format&amp;crop=focalpoint&amp;fit=crop&amp;fm=webp&amp;h=970&amp;w=1725 1725w" sizes="(max-width: 1725px) 100vw, 1725px" type="image/webp" />
        <source srcSet="https://www.datocms-assets.com/44234/1642521802-homepage-backup-image.jpg?auto=format&amp;crop=focalpoint&amp;dpr=0.25&amp;fit=crop&amp;h=970&amp;w=1725 431w,https://www.datocms-assets.com/44234/1642521802-homepage-backup-image.jpg?auto=format&amp;crop=focalpoint&amp;dpr=0.5&amp;fit=crop&amp;h=970&amp;w=1725 862w,https://www.datocms-assets.com/44234/1642521802-homepage-backup-image.jpg?auto=format&amp;crop=focalpoint&amp;dpr=0.75&amp;fit=crop&amp;h=970&amp;w=1725 1293w,https://www.datocms-assets.com/44234/1642521802-homepage-backup-image.jpg?auto=format&amp;crop=focalpoint&amp;fit=crop&amp;h=970&amp;w=1725 1725w" sizes="(max-width: 1725px) 100vw, 1725px" />
        <img class="h-full w-full top-0 left-0" src="https://www.datocms-assets.com/44234/1642521802-homepage-backup-image.jpg?auto=format&amp;crop=focalpoint&amp;fit=crop&amp;h=970&amp;w=1725" alt="Landscape" title="Adapt" />
      </picture>
    </>
  )
});


export const Container = component$(() => {
  return (
    <div class="relative max-w-screen-3xl mx-auto text-white">
      <div class="absolute top-1/2 left-0 transform -translate-y-1/2 px-12 w-full z-10 ">
        <Slot name="title" />
        <Slot name="subtitle" />
      </div>
      <div class="relative overflow-hidden h-full w-full z-0">
          <Slot name="background" />
        </div>
    </div>
  )
});