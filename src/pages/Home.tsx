import Hero from '../components/sections/Hero';
import Services from '../components/sections/Services';
import Process from '../components/sections/Process';
import Trust from '../components/sections/Trust';
import CTA from '../components/sections/CTA';

export default function Home() {
  return (
    <main>
      <Hero />
      <Trust />
      <Services />
      <Process />
      <CTA />
    </main>
  );
}
