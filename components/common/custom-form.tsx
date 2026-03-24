import { Button } from "../ui/button";
import { FieldGroup, FieldSet } from "../ui/field";
import CustomInput from "./custom-input";

const CustomForm = () => {
  return (
    <form className="mx-auto max-w-4xl">
      <FieldSet>
        <FieldGroup>
          <div data-aos="fade-up" data-aos-delay="100">
            <CustomInput name="name" type="text" placeholder="Name" />
          </div>
          <div data-aos="fade-up" data-aos-delay="200">
            <CustomInput name="email" type="email" placeholder="Email" />
          </div>
          <div data-aos="fade-up" data-aos-delay="300">
            <CustomInput name="message" type="textarea" placeholder="Message" />
          </div>
        </FieldGroup>

        <div data-aos="fade-up" data-aos-delay="400">
          <Button
            type="submit"
            className="bg-secondary h-auto w-full cursor-pointer rounded-sm py-3 text-sm transition-all duration-200 hover:scale-[1.02] hover:opacity-90 active:scale-[0.98] sm:text-base"
          >
            Send Message
          </Button>
        </div>
      </FieldSet>
    </form>
  );
};

export default CustomForm;
