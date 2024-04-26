import TestimonialMessage from "../reuseables/TestimonialMessage";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      message:
        "Your company goes above and beyond what we expect and the employees  are very very nice!",
      name: "Jodi R.",
      country: "Melbourne , Australia",
    },
    {
      id: 2,
      message:
        "I loved coming home  to a clean, fresh smelling  home and being able to  relax and spend time with my family instead of  worrying about cobwebs.  Thank you so much!",
      name: "Raul Mendez",
      country: "Melbourne , Australia",
    },
    {
      id: 3,
      message:
        "Your attention to detail is impressive! Thanks for making our home sparkle.",
      name: "Liam Cooper",
      country: "Melbourne , Australia",
    },
  ];
  return (
    <div className="p-[1.5rem] md:p-[6.5rem] flex flex-col items-center gap-[6.25rem] bg-[#F7F5F5]">
      <h2 className=" text-[#800080] text-4xl text-center not-italic font-bold leading-[normal] default-font">
        Hear From Our Clients
      </h2>
      <div className="flex flex-col lg:flex-row items-start justify-between gap-[30px]">
        {testimonials.map((item, index) => (
          <TestimonialMessage key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
