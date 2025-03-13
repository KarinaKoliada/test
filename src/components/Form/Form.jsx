import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { inputFields, radioOptions } from "./formSetting";
import FormSlice from "../../assets/slice.svg?react";
import Button from "../../Button/Button";
import useLocalStorage from "./LocalStorage";
import Schema from "./Schema";

const Form = () => {
  const [action, setAction] = useState("Say Hi");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue, 
    watch, 
  } = useForm({ resolver: yupResolver(Schema) });

  const { addData } = useLocalStorage("data");

  const formValues = watch();

  useEffect(() => {
    const savedFormData = localStorage.getItem("formData");
    if (savedFormData) {
      const parsedData = JSON.parse(savedFormData);
      Object.keys(parsedData).forEach((key) => {
        setValue(key, parsedData[key]); 
      });
    }
  }, [setValue]);

  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formValues));
  }, [formValues]);

  const onSubmit = (data) => {
    console.log("Form submitted:", data);
    addData(data);
    reset();
    localStorage.removeItem("formData");
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 w-full rounded-[45px] bg-[#f3f3f3] items-start py-[40px]">
      <div className="flex flex-col">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col px-[30px] items-center lg:items-start w-full gap-6"
        >
          <div className="flex flex-col w-full items-start gap-6">
            <div className="flex w-full items-start gap-9 mb-4">
              {radioOptions.map(({ label, id }) => (
                <div key={id}>
                  <span
                    className="flex items-center gap-3 cursor-pointer"
                    onClick={() => setAction(label)}
                  >
                    <div className="w-7 h-7 flex items-center justify-center rounded-full border border-black bg-white">
                      <div
                        className={`w-4 h-4 rounded-full ${
                          action === label ? "bg-[#B9FF66]" : ""
                        }`}
                      />
                    </div>
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {inputFields.map(({ name, type, label, placeholder }) => (
            <div key={name} className="flex flex-col w-full">
              <label className="text-[16px] mt-[3px] mb-[5px]" htmlFor={name}>
                {label}
              </label>

              {type === "textarea" ? (
                <textarea
                  className={`flex py-[18px] px-[30px] resize-none items-start gap-3 rounded-[14px] border 
          bg-[#fff] transition-all duration-300 outline-none
          ${
            errors[name]
              ? "border-red-500 focus:border-red-500 shadow-[0px_0px_5px_#ff4d4d]"
              : "border-black focus:border-[#B9FF66] focus:shadow-[0px_0px_5px_#B9FF66]"
          }`}
                  placeholder={placeholder}
                  {...register(name)}
                />
              ) : (
                <input
                  className={`flex py-[18px] px-[30px] items-start gap-3 rounded-[14px] border 
          bg-[#fff] transition-all duration-300 outline-none
          ${
            errors[name]
              ? "border-red-500 focus:border-red-500 shadow-[0px_0px_5px_#ff4d4d]"
              : "border-black focus:border-[#B9FF66] focus:shadow-[0px_0px_5px_#B9FF66]"
          }`}
                  type={type}
                  placeholder={placeholder}
                  {...register(name)}
                />
              )}

              {errors[name] && (
                <p className="text-red-500 text-[14px]">
                  {errors[name]?.message}
                </p>
              )}
            </div>
          ))}

          <Button mode="primary">Send Message</Button>
        </form>
      </div>

      <div className="hidden lg:flex justify-end self-stretch w-full">
        <FormSlice className="h-full object-cover" />
      </div>
    </div>
  );
};

export default Form;
