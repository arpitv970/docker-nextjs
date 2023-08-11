import PageLayout from '@/components/PageLayout';
import AboutContent from '@/components/about/AboutContent';

const About = () => {
  return (
  <PageLayout pageHeading={'About Page'} pageDesc={'This is About Page'}>
      <AboutContent />
  </PageLayout>
  )
}

export default About
