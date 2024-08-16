"use client";

import React, { useState } from "react";
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { useToast } from "@/components/ui/use-toast";

const items = [
  {
    id: "vektreduskjon",
    label: "Vektreduksjon",
  },
  {
    id: "muskelvekst",
    label: "Muskelvekst",
  },
  {
    id: "styrke",
    label: "Styrke",
  },
  {
    id: "kondisjon",
    label: "Kondisjon",
  },
  {
    id: "annet -",
    label: "Annet",
  },
] as const;

const FormSchema = z.object({
  items: z.array(z.string()).optional(), // Items can be an array of strings or undefined
  otherInfo: z.string().optional(),
  name: z.string().nonempty("Name is required"), // Name is required
  phone: z.string().nonempty("Phone is required"), // Phone is required
  email: z.string().email("Invalid email address"), // Valid email required
  age: z.string().optional(),
  height: z.string().optional(),
  weight: z.string().optional(),
  sovn: z.string().optional(),
  metode: z.string().optional(),
  tidspunkt: z.string().optional(),
  sted: z.string().optional(),
});

type FormData = z.infer<typeof FormSchema>;

const MultiStepDialog = ({ setOpen }: { setOpen: (open: boolean) => void }) => {
  const [page, setPage] = useState(1);
  const [showOtherInput, setShowOtherInput] = useState(false);
  const [formData, setFormData] = useState<FormData | null>(null);
  const [showError, setShowError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      items: [],
      otherInfo: "",
      name: "",
      phone: "",
      email: "",
      age: "",
      height: "",
      weight: "",
      sovn: "",
      metode: "",
      tidspunkt: "",
      sted: "",
    },
  });

  const {
    control,
    handleSubmit,
    setValue,
    getValues,
    reset,
    formState: { errors },
  } = form;

  const isFormComplete =
    getValues("name") && getValues("phone") && getValues("email");

  const handleFormSubmit = (data: FormData) => {
    const selectedItemsWithLabels = data.items
      ? data.items.map((id) => ({ id, label: id }))
      : [];

    const formData = { ...data, selectedItemsWithLabels };
    setFormData(formData);

    try {
      handleFullførClick(formData);
    } catch (error: any) {
      console.error("Error sending email:", error);
      alert("An error occurred while sending the email.");
    }
  };

  const handleFullførClick = async (formData: FormData) => {
    if (isFormComplete) {
      console.log("Sending form data:", formData);
      try {
        setIsSubmitting(true);
        const response = await fetch("/api/sendEmail", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          reset();
          setFormData(null);

          // Close the dialog after success
          setOpen(false);

          // Trigger the toast notification
          toast({
            title: "Emailen ble sendt!",
            description:
              "Takk for at du tok deg tid til å fylle ut skjemaet. Jeg vil kontakte deg så snart som mulig.",
          });
        } else {
          const errorData = await response.json();
          alert(
            `Failed to send email: ${errorData.message || "Unknown error"}`
          );
        }
      } catch (error) {
        console.error("Error sending email:", error);
        alert("An error occurred while sending the email.");
      } finally {
        setIsSubmitting(false);
      }
    } else {
      setShowError(true);
    }
  };

  // Function to handle checkbox change
  const handleCheckboxChange = (id: string) => {
    const currentValues = getValues("items") ?? [];
    const checked = currentValues.includes(id);

    if (checked) {
      setValue(
        "items",
        currentValues.filter((item) => item !== id)
      );
    } else {
      setValue("items", [...currentValues, id]);
    }

    // Show or hide the input field based on the "Annet" checkbox
    if (id === "annet -") {
      setShowOtherInput(!checked);
    }
  };

  return (
    <div>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          {page === 1 && (
            <>
              <DialogTitle className="text-white font-poppins font-semibold text-[30px] w-full">
                Hva er dine mål?
              </DialogTitle>
              <DialogDescription className="font-poppins text-dimWhite font-normal text-[15px]">
                Jeg vil gjerne vite mer om deg og målene dine, slik at jeg kan
                gi deg best mulig hjelp.
              </DialogDescription>
            </>
          )}
          {page === 2 && (
            <>
              <DialogTitle className="text-white font-poppins font-semibold text-[30px] w-full">
                Helse og livsstil
              </DialogTitle>
              <DialogDescription className="font-poppins text-dimWhite font-normal text-[15px]">
                For å kunne gi deg et tilpasset trenings- og kostholdsprogram,
                trenger jeg litt mer informasjon om deg.
              </DialogDescription>
            </>
          )}
          {page === 3 && (
            <>
              <DialogTitle className="text-white font-poppins font-semibold text-[30px] w-full">
                Preferanser og Tilgjengelighet
              </DialogTitle>
              <DialogDescription className="font-poppins text-dimWhite font-normal text-[15px]">
                Fortell meg litt om hva du liker og hva som passer best for deg,
                så kan vi skreddersy programmet ditt
              </DialogDescription>
            </>
          )}
          {page === 4 && (
            <>
              <DialogTitle className="text-white font-poppins font-semibold text-[30px] w-full">
                Personlig informasjon
              </DialogTitle>
              <DialogDescription className="font-poppins text-dimWhite font-normal text-[15px]">
                La oss ta det siste steget og fullføre registreringen din.
              </DialogDescription>
            </>
          )}
        </DialogHeader>
        <div className="grid gap-4 py-4">
          {page === 1 && (
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(handleFormSubmit)}
                className="space-y-8"
              >
                <FormField
                  control={form.control}
                  name="items"
                  render={({ field }) => (
                    <FormItem>
                      {items.map((item) => (
                        <FormItem
                          key={item.id}
                          className="flex flex-row items-center space-x-3 space-y-0"
                        >
                          <FormControl>
                            <label className="relative flex items-center cursor-pointer">
                              <input
                                type="checkbox"
                                checked={(field.value ?? []).includes(item.id)}
                                onChange={() => handleCheckboxChange(item.id)}
                                className="sr-only"
                              />
                              <div
                                className={`w-5 h-5 border border-dimWhite rounded-md flex items-center justify-center ${
                                  (field.value ?? []).includes(item.id)
                                    ? "bg-black"
                                    : "bg-white"
                                } relative`}
                              >
                                {(field.value ?? []).includes(item.id) && (
                                  <svg
                                    className="w-4 h-4 text-white absolute"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  >
                                    <path d="M5 13l4 4L19 7" />
                                  </svg>
                                )}
                              </div>
                            </label>
                          </FormControl>
                          <FormLabel className="font-medium font-poppins text-white text-[15px]">
                            {item.label}
                          </FormLabel>
                        </FormItem>
                      ))}
                      {showOtherInput && (
                        <FormItem className="mt-4">
                          <FormControl>
                            <Input
                              id="other-info"
                              className="font-poppins text-white font-normal shadow-none outline-none text-[15px] bg-black border border-dimWhite rounded-md focus:border-3 focus:border-white"
                              placeholder="Utdyp her..."
                              {...form.register("otherInfo")}
                            />
                          </FormControl>
                        </FormItem>
                      )}
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </form>
            </Form>
          )}
          {page === 2 && (
            <>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label
                  htmlFor="age"
                  className="text-right text-white font-poppins font-medium text-[15px]"
                >
                  Alder
                </Label>
                <Controller
                  name="age"
                  control={control}
                  render={({ field }) => (
                    <Input
                      {...field}
                      className="col-span-3 font-poppins text-white font-normal shadow-none outline-none text-[15px] bg-black border border-dimWhite rounded-md focus:border-3 focus:border-white"
                      style={{ outline: "none", boxShadow: "none" }}
                    />
                  )}
                />
              </div>

              <div className="grid grid-cols-4 items-center gap-4">
                <Label
                  htmlFor="height"
                  className="text-right text-white font-poppins font-medium text-[15px]"
                >
                  Høyde
                </Label>
                <Controller
                  name="height"
                  control={control}
                  render={({ field }) => (
                    <Input
                      {...field}
                      className="col-span-3 font-poppins text-white font-normal shadow-none outline-none text-[15px] bg-black border border-dimWhite rounded-md focus:border-3 focus:border-white"
                      style={{ outline: "none", boxShadow: "none" }}
                    />
                  )}
                />
              </div>

              <div className="grid grid-cols-4 items-center gap-4">
                <Label
                  htmlFor="weight"
                  className="text-right text-white font-poppins font-medium text-[15px]"
                >
                  Vekt
                </Label>
                <Controller
                  name="weight"
                  control={control}
                  render={({ field }) => (
                    <Input
                      {...field}
                      className="col-span-3 font-poppins text-white font-normal shadow-none outline-none text-[15px] bg-black border border-dimWhite rounded-md focus:border-3 focus:border-white"
                      style={{ outline: "none", boxShadow: "none" }}
                    />
                  )}
                />
              </div>

              <div className="grid grid-cols-4 items-center gap-4">
                <Label
                  htmlFor="sovn"
                  className="text-right text-white font-poppins font-medium text-[15px]"
                >
                  Timer søvn om natta
                </Label>
                <div className="col-span-3">
                  <Controller
                    name="sovn"
                    control={control}
                    render={({ field }) => (
                      <Select
                        value={field.value}
                        onValueChange={(value) => field.onChange(value)}
                      >
                        <SelectTrigger
                          className="w-full text-white font-poppins text-[15px] font-normal shadow-none outline-none bg-black border border-dimWhite rounded-md focus:border-3 focus:border-white"
                          style={{ outline: "none", boxShadow: "none" }}
                        >
                          <SelectValue placeholder="Select..." />
                        </SelectTrigger>
                        <SelectContent
                          className="text-white font-poppins text-[15px] font-normal shadow-none outline-none bg-black border border-dimWhite rounded-md focus:border-3 focus:border-white"
                          style={{ outline: "none", boxShadow: "none" }}
                        >
                          <SelectItem
                            value="0-4 timer"
                            className="hover:bg-gray-900"
                          >
                            0-4 timer
                          </SelectItem>
                          <SelectItem
                            value="4-6 timer"
                            className="hover:bg-gray-900"
                          >
                            4-6 timer
                          </SelectItem>
                          <SelectItem
                            value="6-8 timer"
                            className="hover:bg-gray-900"
                          >
                            6-8 timer
                          </SelectItem>
                          <SelectItem
                            value="8-10 timer"
                            className="hover:bg-gray-900"
                          >
                            8-10 timer
                          </SelectItem>
                          <SelectItem
                            value="10+ timer"
                            className="hover:bg-gray-900"
                          >
                            10+ timer
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    )}
                  />
                </div>
              </div>
            </>
          )}
          {page === 3 && (
            <>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label
                  htmlFor="sovn"
                  className="text-right text-white font-poppins font-medium text-[15px]"
                >
                  Metoder
                </Label>
                <div className="col-span-3">
                  <Controller
                    name="metode"
                    control={control}
                    render={({ field }) => (
                      <Select
                        value={field.value}
                        onValueChange={(value) => field.onChange(value)}
                      >
                        <SelectTrigger
                          className="w-full text-white font-poppins text-[15px] font-normal shadow-none outline-none bg-black border border-dimWhite rounded-md focus:border-3 focus:border-white"
                          style={{ outline: "none", boxShadow: "none" }}
                        >
                          <SelectValue placeholder="Hva foretrekker du å trene?" />
                        </SelectTrigger>
                        <SelectContent
                          className="text-white font-poppins text-[15px] font-normal shadow-none outline-none bg-black border border-dimWhite rounded-md focus:border-3 focus:border-white"
                          style={{ outline: "none", boxShadow: "none" }}
                        >
                          <SelectItem
                            value="styrketrening"
                            className="hover:bg-gray-900"
                          >
                            Styrketrening
                          </SelectItem>
                          <SelectItem
                            value="løping"
                            className="hover:bg-gray-900"
                          >
                            Løping
                          </SelectItem>
                          <SelectItem
                            value="svømming"
                            className="hover:bg-gray-900"
                          >
                            Svømming
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    )}
                  />
                </div>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label
                  htmlFor="sovn"
                  className="text-right text-white font-poppins font-medium text-[15px]"
                >
                  Tider
                </Label>
                <div className="col-span-3">
                  <Controller
                    name="tidspunkt"
                    control={control}
                    render={({ field }) => (
                      <Select
                        value={field.value}
                        onValueChange={(value) => field.onChange(value)}
                      >
                        <SelectTrigger
                          className="w-full text-white font-poppins text-[15px] font-normal shadow-none outline-none bg-black border border-dimWhite rounded-md focus:border-3 focus:border-white"
                          style={{ outline: "none", boxShadow: "none" }}
                        >
                          <SelectValue placeholder="Når er du mest tilgjengelig?" />
                        </SelectTrigger>
                        <SelectContent
                          className="text-white font-poppins text-[15px] font-normal shadow-none outline-none bg-black border border-dimWhite rounded-md focus:border-3 focus:border-white"
                          style={{ outline: "none", boxShadow: "none" }}
                        >
                          <SelectItem
                            value="morgen"
                            className="hover:bg-gray-900"
                          >
                            Morgen
                          </SelectItem>
                          <SelectItem
                            value="ettermiddag"
                            className="hover:bg-gray-900"
                          >
                            Ettermiddag
                          </SelectItem>
                          <SelectItem
                            value="kveld"
                            className="hover:bg-gray-900"
                          >
                            Kveld
                          </SelectItem>
                          <SelectItem
                            value="natt"
                            className="hover:bg-gray-900"
                          >
                            Natt
                          </SelectItem>
                          <SelectItem
                            value="når som helst"
                            className="hover:bg-gray-900"
                          >
                            Når som helst
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    )}
                  />
                </div>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label
                  htmlFor="sovn"
                  className="text-right text-white font-poppins font-medium text-[15px]"
                >
                  Sted
                </Label>
                <div className="col-span-3">
                  <Controller
                    name="sted"
                    control={control}
                    render={({ field }) => (
                      <Select
                        value={field.value}
                        onValueChange={(value) => field.onChange(value)}
                      >
                        <SelectTrigger
                          className="w-full text-white font-poppins text-[15px] font-normal shadow-none outline-none bg-black border border-dimWhite rounded-md focus:border-3 focus:border-white"
                          style={{ outline: "none", boxShadow: "none" }}
                        >
                          <SelectValue placeholder="Hvor foretrekker du å trene?" />
                        </SelectTrigger>
                        <SelectContent
                          className="text-white font-poppins text-[15px] font-normal shadow-none outline-none bg-black border border-dimWhite rounded-md focus:border-3 focus:border-white"
                          style={{ outline: "none", boxShadow: "none" }}
                        >
                          <SelectItem
                            value="hjemme"
                            className="hover:bg-gray-900"
                          >
                            Hjemme
                          </SelectItem>
                          <SelectItem
                            value="treningssenter"
                            className="hover:bg-gray-900"
                          >
                            Treningssenter
                          </SelectItem>
                          <SelectItem value="ute" className="hover:bg-gray-900">
                            Ute
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    )}
                  />
                </div>
              </div>
            </>
          )}
          {page === 4 && (
            <>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label
                  htmlFor="name"
                  className="text-right text-white font-poppins font-medium text-[15px]"
                >
                  Navn
                </Label>
                <Controller
                  name="name"
                  control={control}
                  render={({ field }) => (
                    <Input
                      id="name"
                      value={field.value}
                      onChange={(e) => field.onChange(e.target.value)}
                      className="col-span-3 font-poppins text-white font-normal shadow-none outline-none text-[15px] bg-black border border-dimWhite rounded-md focus:border-3 focus:border-white"
                      style={{ outline: "none", boxShadow: "none" }}
                    />
                  )}
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label
                  htmlFor="phone"
                  className="text-right text-white font-poppins font-medium text-[15px]"
                >
                  Telefon
                </Label>
                <Controller
                  name="phone"
                  control={control}
                  render={({ field }) => (
                    <Input
                      id="phone"
                      value={field.value}
                      onChange={(e) => field.onChange(e.target.value)}
                      className="col-span-3 font-poppins text-white font-normal shadow-none outline-none text-[15px] bg-black border border-dimWhite rounded-md focus:border-3 focus:border-white"
                      style={{ outline: "none", boxShadow: "none" }}
                    />
                  )}
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label
                  htmlFor="email"
                  className="text-right text-white font-poppins font-medium text-[15px]"
                >
                  Email
                </Label>
                <Controller
                  name="email"
                  control={control}
                  render={({ field }) => (
                    <Input
                      id="email"
                      value={field.value}
                      onChange={(e) => field.onChange(e.target.value)}
                      className="col-span-3 font-poppins text-white font-normal shadow-none outline-none text-[15px] bg-black border border-dimWhite rounded-md focus:border-3 focus:border-white"
                      style={{ outline: "none", boxShadow: "none" }}
                    />
                  )}
                />
              </div>
              {showError && !isFormComplete && (
                <p className="text-red-500 text-sm mt-2">
                  Please fill out all fields.
                </p>
              )}
            </>
          )}
        </div>
        <DialogFooter className="flex items-center justify-between w-full flex-row">
          {page !== 1 && (
            <Button
              onClick={() => setPage(page - 1)}
              type="button"
              className="font-poppins text-black font-medium text-[15px] bg-white hover:bg-dimWhite"
            >
              Tilbake
            </Button>
          )}

          {/* Spacer */}
          <div className="flex-grow"></div>

          {/* Conditional button rendering */}
          <div>
            {page !== 4 && (
              <Button
                onClick={() => setPage(page + 1)}
                type="button"
                className="font-poppins text-black font-medium text-[15px] bg-white hover:bg-dimWhite"
              >
                Neste
              </Button>
            )}
            {page === 4 && (
              <>
                <DialogClose asChild>
                  <button
                    className={`font-poppins font-medium text-[15px] bg-slate-800 no-underline group relative shadow-2xl shadow-zinc-900 rounded-full p-px leading-6 text-white inline-block ${
                      !isFormComplete ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                    onClick={handleSubmit(handleFormSubmit)}
                    onTouchStart={handleSubmit(handleFormSubmit)}
                    disabled={!isFormComplete}
                  >
                    <span className="absolute inset-0 overflow-hidden rounded-full">
                      <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    </span>
                    <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-2 px-6 ring-1 ring-white/10">
                      <span>{isSubmitting ? "Sender..." : "Fullfør!"}</span>
                      <svg
                        fill="none"
                        height="16"
                        viewBox="0 0 24 24"
                        width="16"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.75 8.75L14.25 12L10.75 15.25"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                        />
                      </svg>
                    </div>
                    <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
                  </button>
                </DialogClose>
              </>
            )}
          </div>
        </DialogFooter>
      </DialogContent>
    </div>
  );
};

export default MultiStepDialog;
