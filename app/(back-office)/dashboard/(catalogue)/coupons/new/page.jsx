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

export default function NewCoupon() {
  const [loading,setLoading] = useState(false)
  const [couponCode,setCouponCode]=useState()
  const {register,reset,watch,handleSubmit,formState:{errors}} = useForm();

  async function onSubmit(data){
    const couponCode = generateCouponCode(data.title, data.expiryDate)
    // const slug = generateSlug(data.title)
    data.couponCode = couponCode
     console.log(data);
     makePostRequest(
     setLoading,
     "api/coupons",
      data,
      "Coupon",
     reset
     )
    // // setImageUrl("")
  }
  return (
    <div>
      <FormHeader title="New Coupon"/>
      <form onSubmit={handleSubmit(onSubmit)} className='w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3'>
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
        <TextInput label="Coupon Title" name="title" register={register} errors={errors} className='w-full' />

        <TextInput label="Coupon Expiry Date" name="expiryDate" type='date' register={register} errors={errors} className='w-full' />
      </div>
      <SubmitButton isLoading={loading} buttonTitle="Create Coupon" LoadingButtonTitle="Creating Coupon please wait..."/>
      </form>
    </div>
  )
}
