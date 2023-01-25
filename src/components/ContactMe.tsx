import React from 'react';
import { PhoneIcon, MapPinIcon,EnvelopeIcon } from '@heroicons/react/24/solid';
import { useForm } from "react-hook-form"; 

type Inputs = {
    name: string,
    email: string,
    message: string,
}


type Props = {}

function ContactMe({}: Props) {
    const { handleSubmit, register, formState: { errors } } = useForm();
    
    const onSubmit: SubmitHandler<Input> = formData => {
      window.location.href = `mailto:minhalshanjer.gmail.com?subject=New Message from ${formData.name}&body=Hi my name is ${formData.name}. ${formData.message} (${formData.email})`  
    };

  return (
    <div className="h-screen relative flex overflow-hidden flex-col md:text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
        <h3 className="absolute top-24 text-2xl uppercase tracking-[20px] text-gray-500">
            Contact
        </h3>

        <div className="flex flex-col space-y-10">
            <h4 className="text-xl font-semibold text-center">
                Send Me a Message {" "}
            </h4>

            <div className="flex flex-col space-y-2">
                <div className="flex items-center space-x-5 justify-center"> 
                    <PhoneIcon className="text-green-300 h-5 w-5 animate-pulse" />
                    <p className="text-l">+123456789</p>
                </div>
                
                <div className="flex items-center space-x-5 justify-center"> 
                    <EnvelopeIcon className="text-green-300 h-5 w-5 animate-pulse" />
                    <p className="text-l">mashanje@uwaterloo.ca</p>
                </div>

                <div className="flex items-center space-x-5 justify-center"> 
                    <MapPinIcon className="text-green-300 h-5 w-5 animate-pulse" />
                    <p className="text-l">Waterloo, ON</p>
                </div>
            </div>

            <form
                onSubmit={handleSubmit(onSubmit)} 
                className="flex flex-col space-y-2 w-9/10 mr-4 ml-4 md:mx-auto 
                justify-center items-center"
            >
                <div className="flex space-x-2">
                  <input 
                  
                    placeholder="Name"
                    className="contactInput"
                    type="text" 
                    {...register("name", {
                      required: "Required",
                    })}
                  />
                  
                  
                  <input 
                    placeholder="Email" 
                    className="contactInput" 
                    type="email" 
                    {...register("email", {
                        required: "Required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "invalid email address"
                        }
                      })}
                  />
                </div>

                <textarea className="contactInput"
                    placeholder="Message"
                    name=""
                    id="" 
                    cols="" 
                    rows="10"
                    {...register("message", {
                      required: true
                    })}
                  />
                  <p className="text-red-500 block self-start">
                    {errors.name && `Name: Required`}
                  </p>

                  <p className="text-red-500 block self-start">
                  {errors.email && `Email: Required`}
                  </p>

                  <p className="text-red-500 block self-start">
                    {errors.message && `Message: Required`}
                  </p>


                <button className="bg-green-500 py-3 px-7 rounded-md text-black font-bold text-lg w-full">
                    Submit
                </button>
                    
            </form>


        </div>
    </div>
  )
}

export default ContactMe