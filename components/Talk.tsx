import WhiteButton from "./WhiteButton";

const Talk = () => {
  return (
    <div className="mx-[2.4rem] mt-[12.2rem] rounded-2xl bg-peach py-[6.4rem] text-center text-white">
      <p className="mb-[0.6rem] text-[3.2rem] font-medium leading-[3.6rem]">
        Let's talk about your project
      </p>
      <p className="mb-[3.2rem] text-[1.5rem] font-normal leading-[2.5rem] ">
        Ready to take it to the next level? Contact us today and find out how
        out expertise can help your business grow.
      </p>
      <WhiteButton text="get in touch" url="contact" />
    </div>
  );
};

export default Talk;
