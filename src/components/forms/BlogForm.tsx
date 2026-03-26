"use client"
import { toast } from 'react-toastify';
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import Link from "next/link"

interface FormData {
   name: string;
   email: string;
   message: string;
}

const schema = yup
   .object({
      name: yup.string().required().label("Name"),
      email: yup.string().required().email().label("Email"),
      message: yup.string().required().label("Message"),
   })
   .required();

const BlogForm = () => {

   const { register, handleSubmit, reset, formState: { errors }, } = useForm<FormData>({ resolver: yupResolver(schema), });
   const onSubmit = () => {
      const notify = () => toast('Comment submit successfully', { position: 'top-center' });
      notify();
      reset();
   };

   return (
      <div className="blog-comment-form">
         <h3 className="blog-inner-title text-center">Leave A Reply</h3>
         <p className="text-center"><Link href="/">Login</Link> to post your comment or <Link href="/">signup</Link> if you dont have any account</p>
         <form onSubmit={handleSubmit(onSubmit)} className="mt-50 md-mt-30">
            <div className="input-wrapper mb-35">
               <label>Name*</label>
               <input type="text" {...register("name")} placeholder="Full Name" />
               <p className="form_error">{errors.name?.message}</p>
            </div>
            <div className="input-wrapper mb-40">
               <label>Email*</label>
               <input type="email" {...register("email")} placeholder="Email Address" />
               <p className="form_error">{errors.email?.message}</p>
            </div>
            <div className="input-wrapper mb-30">
               <textarea {...register("message")} placeholder="Write Message here.."></textarea>
               <p className="form_error">{errors.message?.message}</p>
            </div>
            <div className="text-center mt-50"><button className="btn-two xl m-auto">Post Comment</button></div>
         </form>
      </div>
   )
}

export default BlogForm
