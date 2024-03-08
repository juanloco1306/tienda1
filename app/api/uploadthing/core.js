import { createUploadthing } from "uploadthing/next";

const f = createUploadthing();

export const ourFileRouter = {
    categoryImageUploader: f({ image: { maxFileSize: "1MB" } })

    .onUploadComplete(async ({ metadata,file }) => {
        console.log("file url", file.url, metadata);
        return { uploadedBy: "Juan"};
    }),
    bannerImageUploader: f({ image: { maxFileSize: "2MB" } })

    .onUploadComplete(async ({ metadata,file }) => {
        console.log("file url", file.url, metadata);
        return { uploadedBy: "Juan"};
    }),
    marketLogoUploader: f({ image: { maxFileSize: "1MB" } })

    .onUploadComplete(async ({ metadata,file }) => {
        console.log("file url", file.url, metadata);
        return { uploadedBy: "Juan"};
    }),
    productImageUploader: f({ image: { maxFileSize: "1MB" } })

    .onUploadComplete(async ({ metadata,file }) => {
        console.log("file url", file.url, metadata);
        return { uploadedBy: "Juan"};
    }),
    trainingImageUploader: f({ image: { maxFileSize: "1MB" } })

    .onUploadComplete(async ({ metadata,file }) => {
        console.log("file url", file.url, metadata);
        return { uploadedBy: "Juan"};
    }),
    farmerProfileUploader: f({ image: { maxFileSize: "1MB" } })

    .onUploadComplete(async ({ metadata,file }) => {
        console.log("file url", file.url, metadata);
        return { uploadedBy: "Juan"};
    }),
};