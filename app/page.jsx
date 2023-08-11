import PageLayout from '@/components/PageLayout';
import HomeContent from '@/components/home/HomeContent';

const page = () => {
  return (
  <PageLayout pageHeading={'Home Page'} pageDesc={'This is a homepage!'}>
      <HomeContent />
  </PageLayout>
  )
}

export default page
