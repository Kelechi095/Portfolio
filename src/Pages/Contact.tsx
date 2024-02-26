import Input from "../components/inputs/Input";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";
import Button from "../components/Button";
import Wrapper from "../components/Wrapper";
import TextArea from "../components/TextArea";
import Subtitle from "../components/Subtitle";
import { MdOutlineEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

const RegisterForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    console.log(data);
  };

  return (
    <Wrapper>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
        <section>
          <Subtitle label="Talk to me" />

          <Input
            id="name"
            label="Name"
            disabled={isLoading}
            register={register}
            placeholder="What's your name?"
            errors={errors}
            required
          />
          <Input
            id="email"
            label="Email"
            disabled={isLoading}
            register={register}
            errors={errors}
            placeholder="What's your email"
            required
          />
          <TextArea
            id="message"
            label="Message"
            disabled={isLoading}
            register={register}
            errors={errors}
            placeholder="What do you have to tell me/offer me"
            required
          />
          <Button
            label={isLoading ? "submitting..." : "Message me"}
            onClick={handleSubmit(onSubmit)}
          />
        </section>
        <section className="md:p-4 pt-2 md:pt-8 md:pl-24">
          <p className="font-semibold text-white text-sm md:text-[17px] flex gap-2 items-center">
            <MdOutlineEmail className="text-lg" />
            <p>Email:</p>
            <p className="font-semibold text-blue-400">awomskelechi@gmail.com</p>
          </p>
          <p className="font-semibold text-white mt-2 text-sm md:text-[17px] flex gap-2 items-center">
            <FaPhoneAlt className="text-base" />
            <p>Phone:</p>
            <p className="font-semibold text-blue-400">08137031311</p>
          </p>
        </section>
      </div>
    </Wrapper>
  );
};

export default RegisterForm;
