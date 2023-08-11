'use client'

import { useState } from "react";
import { useRouter } from 'next/navigation';

const UserInfoForm = () => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [formInput, setFormInput] = useState({
    name: '',
    email: '',
    address: '',
    dob: '',
    phone: '',
  });

  const handleFormInput = (e) => {
    e.preventDefault();
    setFormInput({...formInput, [e.target.name]: e.target.value})
  }
  
  const submitForm = async(e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch('/api/user', {
	method: 'POST',
	body: JSON.stringify(formInput),
      }); 

      if(res.ok) {
	alert('Form submitted');
	router.push('/');
      }
    } catch (error) {
      console.log(error);
    }
    // console.log(formInput);
  }

  return (
  <>
  <form className='flex flex-col mt-5 outline-dashed outline-offset-[2px] rounded-2xl border-0 border-white px-5 py-3 w-[70%]'>
      <lable htmlFor='name'>Name:</lable>
      <input onChange={(e) => handleFormInput(e)} className='text-black px-4 py-2 rounded-xl mb-3' placeholder='Enter Full Name' type='text' name='name' id='name' value={formInput.name} required={true} />

      <lable htmlFor='email'>Email:</lable>
      <input onChange={(e) => handleFormInput(e)} className='text-black px-4 py-2 rounded-xl mb-3' placeholder='Enter Valid Email ID' type='email' name='email' id='email' value={formInput.email} required={true} />

      <lable htmlFor='address'>Address:</lable>
      <input onChange={(e) => handleFormInput(e)} className='text-black px-4 py-2 rounded-xl mb-3' placeholder='Enter Address' type='text' name='address' id='address' value={formInput.address} required={true} />
	
      <lable htmlFor='dob'>Date of Birth:</lable>
      <input onChange={(e) => handleFormInput(e)} className='text-black px-4 py-2 rounded-xl mb-3' placeholder='Enter DoB' type='date' name='dob' id='dob' value={formInput.dob} required={true} />
	
      <lable htmlFor='phone'>Phone Number:</lable>
      <input onChange={(e) => handleFormInput(e)} className='text-black px-4 py-2 rounded-xl mb-3' placeholder='Enter Valid Phone Number' type='text' name='phone' id='phone' value={formInput.phone} required={true} />
  </form>
  <button onClick={(e) => submitForm(e)} type='submit' className='mt-5 border border-white text-xl px-5 py-3 rounded-xl hover:bg-white hover:text-black hover:rounded-3xl transition-all duration-300 delay-0 easy-in-out'>Submit</button>
  </>
  )
}

export default UserInfoForm
