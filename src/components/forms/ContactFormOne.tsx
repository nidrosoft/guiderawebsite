"use client";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';

interface FormData {
   user_name: string;
   user_email: string;
   message: string;
}

const schema = yup
   .object({
      user_name: yup.string().required().label("Name"),
      user_email: yup.string().required().email().label("Email"),
      message: yup.string().required().label("Message"),
   })
   .required();

const ContactFormOne = () => {

   const { register, handleSubmit, reset, formState: { errors }, } = useForm<FormData>({ resolver: yupResolver(schema) });

   const form = useRef<HTMLFormElement>(null);

   const sendEmail = () => {
      if (form.current) {
         emailjs.sendForm('service_070078r', 'template_lojvsvb', form.current, 'mtLgOuG25NnIwGeKm')
            .then((result) => {
               toast('Message sent successfully', { position: 'top-center' });
               reset();
               console.log(result.text);
            }, (error) => {
               console.log(error.text);
            });
      } else {
         console.error("Form reference is null");
      }
   };

   return (
      <form ref={form} onSubmit={handleSubmit(sendEmail)} id="contact-form">
         <div className="messages"></div>
         <div className="row controls">
            <div className="col-sm-6">
               <div className="input-group-meta form-group mb-30">
                  <label htmlFor="">Name*</label>
                  <input type="text" {...register("user_name")} placeholder="Full Name*" name="user_name" />
                  <p className="form_error">{errors.user_name?.message}</p>
               </div>
            </div>
            <div className="col-sm-6">
               <div className="input-group-meta form-group mb-30">
                  <label htmlFor="">Email*</label>
                  <input type="email" {...register("user_email")} placeholder="Email Address*" name="user_email" />
                  <p className="form_error">{errors.user_email?.message}</p>
               </div>
            </div>
            <div className="col-12">
               <div className="input-group-meta form-group mb-35">
                  <label htmlFor="">Subject (optional)</label>
                  <input type="text" placeholder="Write your subject..." name="subject" />
               </div>
            </div>
            <div className="col-12">
               <div className="input-group-meta form-group mb-35">
                  <textarea {...register("message")} placeholder="Write Message here.." name="message" ></textarea>
                  <p className="form_error">{errors.message?.message}</p>
               </div>
            </div>
            <div className="col-12 mt-20"><button className="btn-five tran3s m-auto">Send Message</button></div>
         </div>
      </form>
   );
}

export default ContactFormOne;
