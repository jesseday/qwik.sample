import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { HomepageHero } from '~/components/Hero';


export default component$(() => {
  return (
    <div>
      <HomepageHero.Container>
        <HomepageHero.Heading
          q:slot="title"
          title="Human Centered.\rForward Thinking."
        />
        <HomepageHero.Subtitle 
          q:slot="subtitle"
          subtitle="Aenean viverra sed tellus aptent accumsan quisque vel dignissim adipiscing senectus duis"
        />
      </HomepageHero.Container>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Welcome to Qwik',
};
