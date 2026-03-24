import { Button } from "../ui/button";
import { FieldGroup, FieldSet } from "../ui/field";
import CustomInput from "./custom-input";

const CustomForm = () => {
  return (
    <form className="mx-auto max-w-4xl">
      <FieldSet>
        <FieldGroup>
          <CustomInput name="name" type="text" placeholder="Name" />
          <CustomInput name="email" type="email" placeholder="Email" />
          <CustomInput name="message" type="textarea" placeholder="Message" />
        </FieldGroup>

        <Button
          type="submit"
          className="bg-secondary h-auto w-full cursor-pointer rounded-sm py-3 text-sm transition hover:opacity-90 sm:text-base"
        >
          Send Message
        </Button>
      </FieldSet>
    </form>
  );
};

export default CustomForm;
