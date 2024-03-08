"use client"
import SubmitButton from '@/components/FormInputs/SubmitButton'
import TextareaInput from '@/components/FormInputs/TextAreaInput'
import TextInput from '@/components/FormInputs/TextInput'
import FormHeader from '@/components/backoffice/FormHeader'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { generateSlug } from '@/lib/generateSlug'
import ImageInput from '@/components/FormInputs/ImageInput'
import { makePostRequest } from '@/lib/apiRequest'
import { generateCouponCode } from '@/lib/generateCouponCode'
import { generateUserCode } from '@/lib/generateUserCode'
import ToggleInput from '@/components/FormInputs/ToggleInput'
/*dIoywuQN4sJ9QUGn*/ 

export default function NewStaff() {
  const [loading,setLoading] = useState(false)
  const [couponCode,setCouponCode]=useState()
  const {register,reset,watch,handleSubmit,formState:{errors},} = useForm({
    defaultValues: {
      isActive:true,
    },
  });
  const isActive = watch("isActive");
  async function onSubmit(data){
    const code = generateUserCode("LSM", data.name)
    data.code = code;
     console.log(data);
     makePostRequest(
     setLoading,
     "api/staffs",
      data,
      "Staff",
     reset
     )
  }
  return (
    <div>
      <FormHeader title="New Staff"/>
      <form onSubmit={handleSubmit(onSubmit)} className='w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3'>
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
        <TextInput label="Staff Full Name" name="name" register={register} errors={errors} />
        <TextInput label="NIN (Id Number)" name="nin" register={register} errors={errors} className='w-full' />
        <TextInput label="Date of Birth" name="dob" type='date' register={register} errors={errors} className='w-full' />
        <TextInput label="Password" name="password" type='password' register={register} errors={errors} className='w-full' />
        <TextInput label="Staff Email Address" name="email" register={register} errors={errors} className='w-full' />
        <TextInput label="Staff Phone" name="phone" type='tel' register={register} errors={errors} className='w-full' /> 
        <TextInput label="Staff Physical Address" name="physicalAddress" register={register} errors={errors} className='w-full' />  
        <TextareaInput label="Notes" name="notes" register={register} errors={errors} isRequired= {false} />
        <ToggleInput label="Staff Member status" name="isActive" trueTitle="Active" falseTitle="Draft" register={register}/>                   
      </div>
      <SubmitButton isLoading={loading} buttonTitle="Create Staff" LoadingButtonTitle="Creating Staff please wait..."/>
      </form>
    </div>
  )
}
