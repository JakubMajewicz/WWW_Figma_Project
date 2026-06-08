import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useInView } from "../hooks/useInView";
import { Button } from "./ui/Button";
import { useCharacterCount } from "../hooks/useCharacterCount";

const MAX_LENGTH = 500;

const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters long")
    .max(50, "Name cannot exceed 50 characters"),

  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email address"),

  phone: z
    .string()
    .min(9, "Phone number must contain at least 9 digits")
    .regex(/^[+\d\s()-]+$/, "Please enter a valid phone number"),

  message: z
    .string()
    .min(10, "Message must be at least 10 characters long")
    .max(MAX_LENGTH, `Message cannot exceed ${MAX_LENGTH} characters`),
});

type ContactFormData = z.infer<typeof contactSchema>;

interface FieldProps {
  label: string;
  error?: string;
  children: React.ReactNode;
}

function Field({ label, error, children }: FieldProps) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-white text-sm">{label}</label>
      {children}
      {error && (
        <p role="alert" className="text-red-400 text-sm mt-1">
          {error}
        </p>
      )}
    </div>
  );
}

export default function Contact() {
  const { ref: leftRef, inView: leftVisible } = useInView();
  const { ref: formRef, inView: formVisible } = useInView();

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const watchMessage = watch("message");

  const { remaining, isWarning, isError } = useCharacterCount(
    watchMessage,
    MAX_LENGTH,
  );

  const onSubmit = async (data: ContactFormData) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Dane formularza:", data);
    reset();
  };

  const inputBase =
    "bg-transparent border border-white/30 text-white placeholder:text-white/40 px-4 py-3 focus:outline-none focus:border-white transition-colors duration-200";

  return (
    <section
      id="contact"
      aria-label="Formularz kontaktowy"
      className="bg-black py-20 lg:py-40"
    >
      <div className="max-w-7xl mx-auto px-8 lg:flex lg:gap-20 lg:items-start">
        <div
          ref={leftRef as React.RefObject<HTMLDivElement>}
          className={`lg:w-1/3 mb-16 lg:mb-0 transition-all duration-700 ${
            leftVisible
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-8"
          }`}
        >
          <h2 className="text-white mb-6">Have Dream House to Build?</h2>
          <p className="text-white">
            Ready to start your dream project?
            <br />
            Fill in the form and we will get back to you within 24 hours.
          </p>
        </div>

        <div
          ref={formRef as React.RefObject<HTMLDivElement>}
          className={`lg:w-2/3 transition-all duration-700 delay-200 ${
            formVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          {isSubmitSuccessful ? (
            <div
              role="status"
              className="border border-white/30 p-10 text-center flex flex-col gap-4"
            >
              <p className="text-white text-2xl font-bold">Thank You! ✓</p>
              <p className="text-white/70">We will contact you soon.</p>
              <button
                onClick={() => reset()}
                className="text-white underline underline-offset-4 hover:text-primary transition-colors mt-4"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              className="flex flex-col gap-6"
            >
              <Field label="Name & Surname" error={errors.name?.message}>
                <input
                  {...register("name")}
                  type="text"
                  placeholder="Jan Kowalski"
                  autoComplete="name"
                  aria-invalid={!!errors.name}
                  className={`${inputBase} rounded-full`}
                />
              </Field>

              <Field label="Email" error={errors.email?.message}>
                <input
                  {...register("email")}
                  type="email"
                  placeholder="jan@example.com"
                  autoComplete="email"
                  aria-invalid={!!errors.email}
                  className={`${inputBase} rounded-full`}
                />
              </Field>

              <Field label="Phone number" error={errors.phone?.message}>
                <input
                  {...register("phone")}
                  type="tel"
                  placeholder="+48 000 000 000"
                  autoComplete="tel"
                  aria-invalid={!!errors.phone}
                  className={`${inputBase} rounded-full`}
                />
              </Field>

              <Field label="Message" error={errors.message?.message}>
                <textarea
                  {...register("message")}
                  rows={4}
                  placeholder="Send a message..."
                  aria-invalid={!!errors.message}
                  className={`${inputBase} rounded-2xl resize-none`}
                />
                <p
                  className={`text-sm text-right mt-1 ${
                    isError
                      ? "text-red-600 font-bold"
                      : isWarning
                        ? "text-red-400"
                        : "text-gray-400"
                  }`}
                >
                  Remaining: {remaining} / {MAX_LENGTH} symbols
                </p>
              </Field>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="mt-4 self-start gap-3"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>Send message</>
                )}
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
