import Link from 'next/link';

const Navbar = () => {
  return (
  	<section className='border-2 border-white w-[40vw] flex items-center justify-around mx-auto my-5 px-5 py-3 rounded-2xl sticky top-5 bg-blue-900 backdrop-filter backdrop-blur-lg bg-opacity-10'>
		<span className='mx-3 my-0 cursor-pointer'><Link href='/'>Home</Link></span>
		<span className='mx-3 my-0 cursor-pointer'><Link href='/about'>About</Link></span>
		<span className='mx-3 my-0 cursor-pointer'><Link href='/contact'>Contact</Link></span>
  	</section>
  )
}

export default Navbar
