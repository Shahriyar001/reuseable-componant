import { FieldValues, useForm, FormProvider } from "react-hook-form";
import cn from "../../utils/cn";
import Button from "../ui/Button";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignUpScema, TNormalForm } from "./validation";

const NormalForm = () => {
  const methods = useForm<TNormalForm>({
    resolver: zodResolver(SignUpScema),
  });

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = methods;

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };
  console.log(watch("name"));
  const double = true;
  return (
    <FormProvider>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={cn(
          "border border-gray-500 rounded-lg shadow-sm w-full p-5 mx-auto",
          {
            "max-w-5xl": double,
            "max-w-md": !double,
          }
        )}
      >
        <div
          className={cn(" grid grid-cols-1 justify-items-center  gap-5", {
            "md:grid-cols-2": double,
          })}
        >
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
          <div className="w-full max-w-md">
            <label className="block" htmlFor="name">
              email
            </label>
            <input
              className="w-full"
              type="email"
              id="email"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="text-xs text-red-500">
                "{errors.email.message}
              </span>
            )}
          </div>
          <div className="w-full max-w-md">
            <label className="block" htmlFor="name">
              password
            </label>
            <input
              className="w-full"
              type="password"
              id="password"
              {...register("password", { minLength: 8 })}
            />
            {errors.password && (
              <span className="text-xs text-red-500">
                {errors.password.message}
              </span>
            )}
          </div>
        </div>
        <div
          className={cn("grid grid-cols-1 justify-items-center  gap-5 my-8", {
            "md:grid-cols-2": double,
          })}
        >
          <div className="w-full max-w-md col-start-1 md:col-start-2 flex justify-end">
            <Button className="w-full  md:w-fit" type="submit">
              Submit
            </Button>
          </div>
        </div>
      </form>
    </FormProvider>
  );
};

export default NormalForm;
