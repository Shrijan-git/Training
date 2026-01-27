import React from "react";
import { useForm } from "react-hook-form";

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Submitted:", data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Name</label>
        <input
          id="name"
          className="form-control"
          {...register("name", { required: "Name is required" })}
        />
        {errors.name && <div className="text-danger">{errors.name.message}</div>}
      </div>

      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email</label>
        <input
          type="email"
          id="email"
          className="form-control"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Invalid email address",
            },
          })}
        />
        {errors.email && <div className="text-danger">{errors.email.message}</div>}
      </div>

      <div className="mb-3">
        <label htmlFor="message" className="form-label">Message</label>
        <textarea
          id="message"
          className="form-control"
          {...register("message", { required: "Message is required" })}
        />
        {errors.message && <div className="text-danger">{errors.message.message}</div>}
      </div>

      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
}
