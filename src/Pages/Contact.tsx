import Input from "../components/inputs/Input";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";
import Button from "../components/Button";
import Wrapper from "../components/Wrapper";
import Subtitle from "../components/Subtitle";
import { MdOutlineEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import toast from "react-hot-toast";
import EmailInput from "../components/inputs/EmailInput";
import TextAreaInput from "../components/inputs/TextAreaInput";

const RegisterForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = () => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      toast.success("Message delivered")
      reset()
    }, 3000)
  };

  return (
    <Wrapper>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
        <section className="flex flex-col gap-3">
          <Subtitle label="Talk to me" />

          <Input
            id="name"
            label="Name"
            disabled={isLoading}
            register={register}
            errors={errors}
            required
          />
          <EmailInput
            id="email"
            label="Email"
            disabled={isLoading}
            register={register}
            errors={errors}
            type="email"
            required
          />
          <TextAreaInput
            id="message"
            label="Message"
            disabled={isLoading}
            register={register}
            errors={errors}
          />
          <Button
            label={isLoading ? "Submitting..." : "Message me"}
            onClick={handleSubmit(onSubmit)}
          />
        </section>
        <section className="md:p-4 pt-6 md:pt-8 md:pl-24">
          <p className="font-semibold text-white md:text-[17px] flex gap-2 items-center">
            <MdOutlineEmail className="text-lg" />
            <p>Email:</p>
            <p className="font-semibold text-blue-400">awomskelechi@gmail.com</p>
          </p>
          <p className="font-semibold text-white mt-2 md:text-[17px] flex gap-2 items-center">
            <FaPhoneAlt className="text-base" />
            <p>Phone:</p>
            <p className="font-semibold text-blue-400">+2348137031311</p>
          </p>
        </section>
      </div>
    </Wrapper>
  );
};

export default RegisterForm;
