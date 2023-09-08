import { zodResolver } from "@hookform/resolvers/zod";
import Input from "./Input";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Email } from "@/utils/smtp";

const validationSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().min(1, { message: "Email is required" }).email({
    message: "Must be a valid email",
  }),
  mobile: z.string().min(1, { message: "Mobile is required" }),
  company_website: z
    .string()
    .min(1, { message: "Company/Brand Website is required" }),
  city: z.string().min(1, { message: "City is required" }),
});

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(validationSchema),
  });

  const onSubmit = handleSubmit((data) => {
    // console.log("Submitting:", data);
    try {
      Email.send({
        Host: "smtp.elasticemail.com",
        Username: "stefan@socialaviator.co",
        Password: "F06F10D58543ABDBB4BAEEA6CA9FB044C534",
        To: "stefan@socialaviator.co",
        From: "greatfortune125@gmail.com",
        Subject: "Testing js - office",
        Body: "Hola mundo del email port 578asdf",
        Port: 2525
      });
    }catch(err) {
      console.log(err)
    }
  });

  return (
    <form className="z-10 relative" onSubmit={onSubmit}>
      <div className="grid xl:grid-cols-3 lg:grid-cols-2 2xl:gap-x-[200px] xl:gap-x-[50px] lg:gap-x-[120px] lg:gap-y-12 gap-y-8 mt-20">
        <Input
          {...register("name")}
          className="col-span-1"
          title="Name"
          error={errors.name?.message as string | undefined}
        />
        <Input
          {...register("email")}
          className="col-span-1"
          title="Email"
          error={errors.email?.message as string | undefined}
        />
        <Input
          {...register("mobile")}
          className="col-span-1"
          title="Mobile"
          error={errors.mobile?.message as string | undefined}
        />
        <Input
          {...register("company_website")}
          className="col-span-1"
          title="Company/Brand Website"
          error={errors.company_website?.message as string | undefined}
        />
        <Input
          {...register("city")}
          className="col-span-1"
          title="City"
          error={errors.city?.message as string | undefined}
        />
      </div>

      <button
        type="submit"
        className="bg-secondary mt-20 w-[200px] h-[44px] text-white font-semibold uppercase tracking-widest md:text-base text-sm"
      >
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
