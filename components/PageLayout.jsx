const PageLayout = ({ pageHeading, pageDesc, children }) => {
  return (
    <section className='w-[80vw] mx-auto grid grid-rows-[1fr_1fr_100] gap-5 p-5'>
      <h1 className='text-4xl font-black text-center'>{pageHeading}</h1>
      <p className='text-xl font-light italic text-center'>{pageDesc}</p>
      <section className='flex flex-col justify-between items-center mx-auto w-[100%]'>{children}</section>
    </section>
  )
}

export default PageLayout
