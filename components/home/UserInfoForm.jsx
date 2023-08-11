const UserInfoForm = () => {
  return (
  <>
  <form className='flex flex-col mt-5 outline-dashed outline-offset-[2px] rounded-2xl border-0 border-white px-5 py-3 w-[70%]'>
      <lable for='name'>Name:</lable>
      <input className='text-black px-4 py-2 rounded-xl mb-3' placeholder='Enter Full Name' type='text' name='name' id='name' requried />
      <lable for='email'>Email:</lable>
      <input className='text-black px-4 py-2 rounded-xl mb-3' placeholder='Enter Valid Email ID' type='email' name='email' id='email' requried />
      <lable for='address'>Address:</lable>
      <input className='text-black px-4 py-2 rounded-xl mb-3' placeholder='Enter Address' type='text' name='address' id='address' requried />
  </form>
  <button type='submit' className='mt-5 border border-white text-xl px-5 py-3 rounded-xl hover:bg-white hover:text-black hover:rounded-3xl transition-all duration-300 delay-0 easy-in-out'>Submit</button>
  </>
  )
}

export default UserInfoForm
