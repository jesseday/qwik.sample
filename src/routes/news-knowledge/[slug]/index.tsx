import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { ArticleHero } from '~/components/Hero';


export default component$(() => {
  return (
    <div>
      <ArticleHero.Container>
        <ArticleHero.Heading 
          q:slot="title" 
          title="Ways to increase your digital sustainability"
        />
        <ArticleHero.Image 
          q:slot="image"
          image="test"
        />
      </ArticleHero.Container>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'We are digital. Above all.',
};
