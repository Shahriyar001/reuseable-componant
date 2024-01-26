import Container from "./componants/ui/Container";
import {
  Form,
  FormSection,
  FormSubmit,
  Input,
} from "./componants/ReuseableForm";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

function App() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<TTest>();
  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };
  const TeastScema = z.object({
    name: z.string(),
    email: z.string().email(),
  });
  type TTest = z.infer<typeof TeastScema>;
  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit) as SubmitHandler<FieldValues>}>
        <FormSection>
          <div className="w-full max-w-md">
            <label className="block" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              {...register("name", { required: true })}
            />
            {errors.name && (
              <span className="text-xs text-red-500">
                {errors.name.message}
              </span>
            )}
          </div>
          <Input
            type="email"
            register={register("email")}
            errors={errors}
            label="Email"
          />
        </FormSection>
        <FormSubmit />
      </Form>
    </Container>
  );
}

export default App;
