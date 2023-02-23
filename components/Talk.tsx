import WhiteButton from "./WhiteButton";

const Talk = () => {
  return (
    <div className="py-[6.4rem] mt-[12.2rem] rounded-2xl mx-[2.4rem] bg-peach text-white text-center">
      <p className="font-medium mb-[0.6rem] text-[3.2rem] leading-[3.6rem]">
        Let's talk about your project
      </p>
      <p className="font-normal mb-[3.2rem] text-[1.5rem] leading-[2.5rem] ">
        Ready to take it to the next level? Contact us today and find out how
        out expertise can help your business grow.
      </p>
      <WhiteButton text="get in touch" />
    </div>
  );
};

export default Talk;
