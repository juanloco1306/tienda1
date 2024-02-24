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

export default function NewFarmer() {
  const [loading,setLoading] = useState(false)
  const [couponCode,setCouponCode]=useState()
  const {register,reset,watch,handleSubmit,formState:{errors}} = useForm();

  async function onSubmit(data){
    const code = generateUserCode("LFF", data.name)
    data.code = code;
     console.log(data);
     makePostRequest(
     setLoading,
     "api/farmers",
      data,
      "Farmer",
     reset
     )
  }
  return (
    <div>
      <FormHeader title="New Farmer"/>
      <form onSubmit={handleSubmit(onSubmit)} className='w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3'>
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
        <TextInput label="Farmer´s Full Name" name="name" register={register} errors={errors} className='w-full' />
        <TextInput label="Farmer´s Phone" name="phone" type='tel' register={register} errors={errors} className='w-full' />
        <TextInput label="Farmer´s Email Address" name="email" register={register} errors={errors} className='w-full' /> 
        <TextInput label="Farmer´s Physical Address" name="physicalAddress" register={register} errors={errors} className='w-full' />  
        <TextInput label="Farmer´s Contact Person" name="contactPerson" register={register} errors={errors} className='w-full' />
        <TextInput label="Farmer´s Contact Person Phone" name="contactPersonPhone" type='tel' register={register} errors={errors} className='w-full' /> 
        <TextareaInput label="Farmer´s Payment Terms" name="terms" register={register} errors={errors} />
        <TextareaInput label="Notes" name="notes" register={register} errors={errors} isRequired= {false} />                     
      </div>
      <SubmitButton isLoading={loading} buttonTitle="Create Farmer" LoadingButtonTitle="Creating Farmer please wait..."/>
      </form>
    </div>
  )
}
