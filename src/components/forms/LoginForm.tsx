"use client"
import { useState } from "react";
import Link from "next/link";
import { toast } from 'react-toastify';
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import Image from "next/image"

import icon_1 from "@/assets/images/icon/icon_102.svg"

interface FormData {
   email: string;
   password: string;
}

const LoginForm = () => {

   const schema = yup
      .object({
         email: yup.string().required().email().label("Email"),
         password: yup.string().required().label("Password"),
      })
      .required();

   const { register, handleSubmit, reset, formState: { errors }, } = useForm<FormData>({ resolver: yupResolver(schema), });
   const onSubmit = () => {
      const notify = () => toast('Login successfully', { position: 'top-center' });
      notify();
      reset();
   };

   const [isPasswordVisible, setPasswordVisibility] = useState(false);

   const togglePasswordVisibility = () => {
      setPasswordVisibility(!isPasswordVisible);
   };

   return (
      <form onSubmit={handleSubmit(onSubmit)}>
         <div className="row">
            <div className="col-12">
               <div className="input-group-meta position-relative mb-30">
                  <label>Email*</label>
                  <input type="email" {...register("email")} placeholder="Youremail@gmail.com" />
                  <p className="form_error">{errors.email?.message}</p>
               </div>
            </div>
            <div className="col-12">
               <div className="input-group-meta position-relative mb-20">
                  <label>Password*</label>
                  <input {...register("password")} type={isPasswordVisible ? "text" : "password"} placeholder="Enter Password" className="pass_log_id" />
                  <span className="placeholder_icon">
                     {isPasswordVisible ? (
                        <span onClick={togglePasswordVisibility} className="passVicon eye-slash"><Image src={icon_1} alt="" /></span>
                     ) : (
                        <span onClick={togglePasswordVisibility} className="passVicon"><Image src={icon_1} alt="" /></span>
                     )}
                  </span>
                  <p className="form_error">{errors.password?.message}</p>
               </div>
            </div>
            <div className="col-12">
               <div className="agreement-checkbox d-flex justify-content-between align-items-center">
                  <div>
                     <input type="checkbox" id="remember" />
                     <label htmlFor="remember">Keep me logged in</label>
                  </div>
                  <Link href="#">Forget Password?</Link>
               </div>
            </div>
            <div className="col-12">
               <button className="btn-four w-100 tran3s d-block mt-20 mb-50">Login</button>
            </div>
         </div>
      </form>
   )
}

export default LoginForm
