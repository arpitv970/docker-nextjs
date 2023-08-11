import UserInfoForm from './UserInfoForm'

const HomeContent = () => {
  return (
    <div className='flex flex-col justify-around items-center w-[100%]'>
      <h2 className='text-2xl'>Add User To Data-Base</h2>

      { /* Creat Simple Form to add info about User */ }
      <UserInfoForm />
      
    </div>
  )
}

export default HomeContent
