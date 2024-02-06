import {useState} from 'react'
import {useFormContext} from '../../contexts/FormContext';
import logo from "../../assets/logo.png";






const MessageForm = () => {
  const currentYear = new Date().getFullYear();

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };


  const {formIsActive,toggleForm} = useFormContext();
    console.log(formIsActive);

const handleSubmit =() =>{
    
    toggleForm(false);
}


// handle close form
const handleClose =() =>{
    
    toggleForm(false);
}




if(!formIsActive){
    return null;
}
   return(
   <div className='fixed z-[190] top-0 w-full left-0 right-0 h-screen flex justify-center  bg-[rgba(0,0,0,0.8)]'>
<form onSubmit={handleSubmit} className='max-w-[472px] p-[20px] w-[472px] rounded-xl  bg-white self-center'>
    <div className='flex justify-between items-center'>

<img src={logo} alt="logo" className="h-[70px] self-center" />
<button onClick={handleClose} className='bg-red-800 font-bold text-white py-2 px-3 rounded-md'>Close</button>
    </div>

    <p>Call us Directly  <b className='ml-[50px]'>+233 45 878 57589</b></p>
    <div className="flex justify-between gap-[30px] mt-3 items-start">

    <p className='w-[160px]'>Locate Us</p>
    <p> <b className='ml-[30px]'>9 Pearce Way,  Weir Views 
Melbourne, Victoria 3338</b></p>
    </div>
    <h3 className='font-bold mt-[20px]'>Leave us a message</h3>
<div className='flex flex-col gap-2 mb-4' >
        <label htmlFor="fullName">Full Name</label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          required
          className='p-[10px] border-[1px] border-[#ccc] rounded-md'
        />
      </div>
      <div className='flex flex-col gap-2 mb-4' >
        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className='p-[10px] border-[1px] border-[#ccc] rounded-md'

        />
      </div>
      <div className='flex flex-col gap-2 mb-4' >
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="4"
          required
          className='p-[10px] border-[1px] border-[#ccc] rounded-md'

        ></textarea>
      </div>
      <button type="submit" className='bg-[#3956f0] rounded-md text-white hover:bg-[#3957f0b6]  py-2 px-4' >Send Message</button>

</form>
   </div> 
    )
}

export default MessageForm