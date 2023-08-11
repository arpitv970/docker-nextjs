const PageLayout = ({ pageHeading, pageDesc, children }) => {
  return (
    <section>
      <h1>{pageHeading}</h1>
      <p>{pageDesc}</p>
      <section>{children}</section>
    </section>
  )
}

export default PageLayout
