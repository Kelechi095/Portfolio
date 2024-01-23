import Input from "../components/inputs/Input";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";
import Button from "../components/Button";
import Wrapper from "../components/Wrapper";
import TextArea from "../components/TextArea";
import Subtitle from "../components/Subtitle";

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
    </Wrapper>
  );
};

export default RegisterForm;
