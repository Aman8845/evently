import EventForm from "@/components/shared/EventForm";
import { auth } from "@clerk/nextjs/server";
// import { redirect } from "next/navigation";
import React from "react";

const CreateEvent = async () => {
  const { sessionClaims } = await auth();

  const userId = sessionClaims?.userId as string;
// console.log(userId);

  // if (!userId) {
  //   // If user is not authenticated, redirect to sign-in
  //   redirect("/sign-in");
  // }

  return (
    <>
      <section className="bg-gray-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
        <h3 className="max-w-7xl lg:mx-auto p-5 md:px-10 xl:px-0 w-full font-bold text-[28px] leading-9 md:text-[36px] md:leading-11 text-center sm:text-left">
          Create Event
        </h3>
      </section>

      <div className="my-8 max-w-7xl lg:mx-auto p-5 md:px-10 xl:px-0 w-full">
        <EventForm userId={userId} type="Create" />
      </div>
    </>
  );
};

export default CreateEvent;
