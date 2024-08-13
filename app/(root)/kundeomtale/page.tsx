// Your form component (e.g., page.tsx)
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useWatch } from "react-hook-form";
import { z } from "zod";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import axios from "axios";
import { useEffect } from "react";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  anonym: z.boolean(), // Include this field in the schema
  tid: z.object({
    months: z.string().nonempty({ message: "Please select a month." }),
    years: z.string().nonempty({ message: "Please select a year." }),
  }),
  kundeomtale: z.string().min(10, {
    message: "Bio must be at least 10 characters.",
  }),
});

const Page = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      anonym: false,
      tid: {
        months: "",
        years: "",
      },
      kundeomtale: "",
    },
  });

  // Watch for changes in the anonym switch
  const isAnonym = useWatch({
    control: form.control,
    name: "anonym",
  });

  // Set the username to "anonym" if the anonym switch is true
  useEffect(() => {
    if (isAnonym) {
      form.setValue("username", "Anonym");
    } else if (form.getValues("username") === "Anonym") {
      form.setValue("username", "");
    }
  }, [isAnonym, form]);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Ensure the username is "anonym" if the anonym switch is true
    const submissionData = {
      ...values,
      username: values.anonym ? "Anonym" : values.username,
    };
  
    try {
      const response = await axios.post("/api/submit-form", submissionData);
      console.log(response.data.message);
    } catch (error) {
      console.error("There was an error submitting the form", error);
    }
  }

  return (
<section className="bg-primary min-h-screen flex flex-col items-center p-8">
  <h2 className="font-poppins font-semibold text-white text-4xl leading-[53px] mb-6">
    Kundeomtale
  </h2>
  <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 max-w-3xl w-full">
      <FormField
        control={form.control}
        name="username"
        render={({ field }) => (
          <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-4">
            <FormItem className="col-span-1 md:col-span-1">
              <FormLabel className="text-white font-poppins">Navn</FormLabel>
            </FormItem>
            <FormItem className="col-span-3 md:col-span-3">
              <FormControl>
                <Input
                  placeholder="ditt navn"
                  className="font-poppins text-white font-normal shadow-none outline-none text-[15px] bg-black border border-dimWhite rounded-md focus:border-3 focus:border-white w-full"
                  {...field}
                />
              </FormControl>
              <FormDescription className="text-dimWhite font-poppins">
                Dette er navnet ditt som vil vises offentlig.
              </FormDescription>
              <FormMessage className="text-red-500 font-poppins font-medium text-[15px]"/>
            </FormItem>
            <div className="col-span-1 md:col-span-4 flex items-center space-x-2">
              <FormField
                control={form.control}
                name="anonym"
                render={({ field }) => (
                  <>
                    <Switch
                      id="anonym"
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      className="shadow-none outline-none"
                    />
                    <Label htmlFor="Anonym" className="text-white font-poppins">
                      Anonym
                    </Label>
                  </>
                )}
              />
            </div>
          </div>
        )}
      />

      <FormField
        control={form.control}
        name="tid.months"
        render={({ field }) => (
          <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-4">
            <FormItem className="col-span-1 md:col-span-1">
              <FormLabel className="text-white font-poppins">Coaching tid (måneder)</FormLabel>
            </FormItem>
            <FormItem className="col-span-3 md:col-span-3">
              <FormControl>
                <div className="flex items-center space-x-2">
                  <Select
                    value={field.value}
                    onValueChange={field.onChange}
                  >
                    <SelectTrigger
                      className="text-white font-poppins text-[15px] font-normal shadow-none outline-none bg-black border border-dimWhite rounded-md focus:border-3 focus:border-white"
                      style={{ outline: 'none', boxShadow: 'none' }}
                    >
                      <SelectValue placeholder="måneder" />
                    </SelectTrigger>
                    <SelectContent className="text-white font-poppins text-[15px] font-normal shadow-none outline-none bg-black border border-dimWhite rounded-md focus:border-3 focus:border-white">
                      <SelectItem value="1 måned" className="hover:bg-gray-800">1 måned</SelectItem>
                      <SelectItem value="2 måneder" className="hover:bg-gray-800">2 måneder</SelectItem>
                      <SelectItem value="3 måneder" className="hover:bg-gray-800">3 måneder</SelectItem>
                      <SelectItem value="4 måneder" className="hover:bg-gray-800">4 måneder</SelectItem>
                      <SelectItem value="5 måneder" className="hover:bg-gray-800">5 måneder</SelectItem>
                      <SelectItem value="6 måneder" className="hover:bg-gray-800">6 måneder</SelectItem>
                      <SelectItem value="7 måneder" className="hover:bg-gray-800">7 måneder</SelectItem>
                      <SelectItem value="8 måneder" className="hover:bg-gray-800">8 måneder</SelectItem>
                      <SelectItem value="9 måneder" className="hover:bg-gray-800">9 måneder</SelectItem>
                      <SelectItem value="10 måneder" className="hover:bg-gray-800">10 måneder</SelectItem>
                      <SelectItem value="11 måneder" className="hover:bg-gray-800">11 måneder</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </FormControl>
              <FormDescription className="text-dimWhite font-poppins">
                Hvor lenge du har blitt coachet av meg i måneder.
              </FormDescription>
              <FormMessage  className="text-red-500 font-poppins font-medium text-[15px]"/>
            </FormItem>
          </div>
        )}
      />

      <FormField
        control={form.control}
        name="tid.years"
        render={({ field }) => (
          <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-4">
            <FormItem className="col-span-1 md:col-span-1">
              <FormLabel className="text-white font-poppins">Coaching tid (år)</FormLabel>
            </FormItem>
            <FormItem className="col-span-3 md:col-span-3">
              <FormControl>
                <div className="flex items-center space-x-2">
                  <Select
                    value={field.value}
                    onValueChange={field.onChange}
                  >
                    <SelectTrigger
                      className="text-white font-poppins text-[15px] font-normal shadow-none outline-none bg-black border border-dimWhite rounded-md focus:border-3 focus:border-white"
                      style={{ outline: 'none', boxShadow: 'none' }}
                    >
                      <SelectValue placeholder="år" />
                    </SelectTrigger>
                    <SelectContent className="text-white font-poppins text-[15px] font-normal shadow-none outline-none bg-black border border-dimWhite rounded-md focus:border-3 focus:border-white">
                      <SelectItem value="0 år" className="hover:bg-gray-800">0 år</SelectItem>
                      <SelectItem value="1 år" className="hover:bg-gray-800">1 år</SelectItem>
                      <SelectItem value="2 år" className="hover:bg-gray-800">2 år</SelectItem>
                      <SelectItem value="3 år" className="hover:bg-gray-800">3 år</SelectItem>
                      <SelectItem value="4 år" className="hover:bg-gray-800">4 år</SelectItem>
                      <SelectItem value="5 år" className="hover:bg-gray-800">5 år</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </FormControl>
              <FormDescription className="text-dimWhite font-poppins">
                Hvor lenge du har blitt coachet av meg i år.
              </FormDescription>
              <FormMessage  className="text-red-500 font-poppins font-medium text-[15px]"/>
            </FormItem>
          </div>
        )}
      />

      <FormField
        control={form.control}
        name="kundeomtale"
        render={({ field }) => (
          <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-4">
            <FormItem className="col-span-1 md:col-span-1">
              <FormLabel className="text-white font-poppins">Kundeomtale</FormLabel>
            </FormItem>
            <FormItem className="col-span-3 md:col-span-3">
              <FormControl>
                <Textarea
                  placeholder="Skriv din kundeomtale her"
                  className="font-poppins text-white font-normal shadow-none outline-none text-[15px] bg-black border border-dimWhite rounded-md focus:border-3 focus:border-white w-full"
                  {...field}
                />
              </FormControl>
              <FormDescription className="text-dimWhite font-poppins">
                Dette er din offentlige kundeomtale.
              </FormDescription>
              <FormMessage  className="text-red-500 font-poppins font-medium text-[15px]"/>
            </FormItem>
          </div>
        )}
      />
      <Button
        type="submit"
        className="font-poppins text-black font-medium text-[15px] bg-white hover:bg-dimWhite"
      >
        Send inn
      </Button>
    </form>
  </Form>
</section>


  );
};

export default Page;
