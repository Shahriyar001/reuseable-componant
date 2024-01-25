import { useForm } from "react-hook-form";
import cn from "../../utils/cn";
import Button from "../ui/Button";

const NormalForm = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  const double = true;
  return (
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
          <input type="text" id="name" {...register("name")} />
        </div>
        <div className="w-full max-w-md">
          <label className="block" htmlFor="name">
            email
          </label>
          <input
            className="w-full"
            type="email"
            id="email"
            {...register("email")}
          />
        </div>
        <div className="w-full max-w-md">
          <label className="block" htmlFor="name">
            password
          </label>
          <input
            className="w-full"
            type="password"
            id="password"
            {...register("password")}
          />
        </div>
        <div className="w-full max-w-md">
          <label className="block" htmlFor="name">
            select
          </label>
          <select>
            <option>M</option>
            <option>L</option>
            <option>XL</option>
            <option>XXL</option>
          </select>
        </div>
        <div className="w-full max-w-md">
          <label className="block" htmlFor="name">
            select
          </label>
          <textarea name="" id=""></textarea>
        </div>
        <div className="w-full max-w-md">
          <label className="block" htmlFor="name">
            select
          </label>
          <input type="checkbox" />
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
  );
};

export default NormalForm;
