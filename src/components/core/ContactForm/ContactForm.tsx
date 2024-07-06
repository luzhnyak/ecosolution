import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "react-toastify";
import WhiteBtn from "../LearnMoreBtn/WhiteBtn";
import css from "./ContactForm.module.css";

const schema = yup
  .object({
    name: yup.string().required("Name is required"),
    email: yup
      .string()
      .email("Invalid email format")
      .required("Email is required"),
    phone: yup.string().required("Phone is required"),
    message: yup.string(),
  })
  .required();

type InputForm = {
  name: string;
  email: string;
  phone: string;
  message?: string;
};

const ContactForm = () => {
  const {
    reset,
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<InputForm>({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    const savedData = localStorage.getItem("contactFormData");
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      reset(parsedData);
    }
  }, [reset]);

  const formData = watch();
  useEffect(() => {
    localStorage.setItem("contactFormData", JSON.stringify(formData));
  }, [formData]);

  const onSubmit = (data: InputForm) => {
    console.log(data);
    toast.success("Message sent successfully");
    localStorage.removeItem("contactFormData");
    reset();
  };

  return (
    <div className={css.wrapper}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={css.inputWrapper}>
          <label className={css.label} htmlFor="name">
            * Full name:
          </label>
          <input
            id="name"
            {...register("name")}
            className={css.input}
            placeholder="John Rosie"
          />
          <p className={css.errorMessage}>{errors.name?.message}</p>
        </div>

        <div className={css.inputWrapper}>
          <label className={css.label} htmlFor="email">
            * E-mail:
          </label>
          <input
            id="email"
            {...register("email")}
            className={css.input}
            placeholder="johnrosie@gmail.com"
          />
          <p className={css.errorMessage}>{errors.email?.message}</p>
        </div>

        <div className={css.inputWrapper}>
          <label className={css.label} htmlFor="phone">
            * Phone:
          </label>
          <input
            id="phone"
            {...register("phone")}
            className={css.input}
            placeholder="380961234567"
          />
          <p className={css.errorMessage}>{errors.phone?.message}</p>
        </div>

        <div className={css.inputWrapper}>
          <label className={css.label} htmlFor="textarea">
            Message:
          </label>
          <textarea
            id="textarea"
            {...register("message")}
            className={css.input}
            placeholder="Your message"
          />
          <p className={css.errorMessage}>{errors.message?.message}</p>
        </div>
        <div className={css.btnWrapper}>
          <WhiteBtn title="Send" type="submit" />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
