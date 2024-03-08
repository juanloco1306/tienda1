"use client";
import SubmitButton from "@/components/FormInputs/SubmitButton";
import TextareaInput from "@/components/FormInputs/TextAreaInput";
import TextInput from "@/components/FormInputs/TextInput";
import FormHeader from "@/components/backoffice/FormHeader";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { generateSlug } from "@/lib/generateSlug";
import ImageInput from "@/components/FormInputs/ImageInput";
import { makePostRequest } from "@/lib/apiRequest";
import SelectInput from "@/components/FormInputs/SelectInput";
import { Plus, X } from "lucide-react";
import ArrayItemsInput from "@/components/FormInputs/ArrayItemsInput";
import ToggleInput from "@/components/FormInputs/ToggleInput";

export default function NewProduct() {
  const [imageUrl, setImageUrl] = useState("");
  const categories = [
    {
      id: 1,
      title: "Category 1",
    },
    {
      id: 2,
      title: "Category 2",
    },
    {
      id: 3,
      title: "Category 3",
    },
    {
      id: 4,
      title: "Category 4",
    },
  ];
  const farmers = [
    {
      id: 1,
      title: "Farmer 1",
    },
    {
      id: 2,
      title: "Farmer 2",
    },
    {
      id: 3,
      title: "Farmer 3",
    },
    {
      id: 4,
      title: "Farmer 4",
    },
  ];
  const [tags,setTags] = useState([]);
  const [loading, setLoading] = useState(false);
  const {
    register,
    reset,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      isActive: true,
    },
  });
  const isActive = watch("isActive");
  async function onSubmit(data) {
    const slug = generateSlug(data.title);
    data.slug = slug;
    data.imageUrl = imageUrl;
    data.tags = tags;
    console.log(data);
    makePostRequest(setLoading, "api/products", data, "Product", reset);
    setImageUrl("");
  }
  return (
    <div>
      <FormHeader title="New product" />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3"
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput
            label="Product Title"
            name="title"
            register={register}
            errors={errors}
          />
          <TextInput
            label="Product SKU"
            name="sku"
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextInput
            label="Product Barcode"
            name="barcode"
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextInput
            label="Product Price (Before Discount)"
            name="produtPrice"
            type="number"
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextInput
            label="Product Sale Price(Discounted)"
            name="salePrice"
            type="number"
            register={register}
            errors={errors}
            className="w-full"
          />
          <SelectInput
            label="Select Category"
            name="categoryId"
            register={register}
            errors={errors}
            className="w-full"
            options={categories}
          />
          <SelectInput
            label="Select Farmer"
            name="farmerId"
            register={register}
            errors={errors}
            className="w-full"
            options={farmers}
          />
          <ImageInput
            imageUrl={imageUrl}
            setImageUrl={setImageUrl}
            endpoint="productImageUploader"
            label="Product Image"
          />
          <ArrayItemsInput setItems={setTags} items={tags} itemTitle="Tag"/>
          <TextareaInput
            label="Product Description"
            name="description"
            register={register}
            errors={errors}
          />
          <ToggleInput label="Publish your Product" name="isActive" trueTitle="Active" falseTitle="Draft" register={register}/>
        </div>
        <SubmitButton
          isLoading={loading}
          buttonTitle="Create Product"
          LoadingButtonTitle="Creating Product please wait..."
        />
      </form>
    </div>
  );
}
