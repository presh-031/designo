import WhiteButton from "./WhiteButton";

const Cta = () => {
  return (
    <div className="relative top-[18.95rem] mx-[2.4rem] mt-[-6.85rem] rounded-[1.5rem] bg-peach bg-[url('../assets/shared/desktop/bg-pattern-call-to-action.svg')] bg-right px-[2.4rem]  py-[6.4rem] text-center text-white max-[300px]:mx-[1.8rem] sm:top-[8.6rem]  sm:mx-[4rem] sm:mt-[3.4rem] sm:py-[5.7rem] sm:px-[8.9rem] xl:mx-[16.5rem] xl:mt-[7.4rem]  xl:flex xl:items-center xl:justify-between xl:px-[9.5rem] xl:pt-[7.2rem] xl:pb-[4.6rem] xl:text-left">
      <div className="xl:w-[45.90rem]">
        <p className="mx-auto mb-[0.6rem] text-[3.2rem] font-medium leading-[3.6rem] sm:mb-[2rem] sm:w-[90%] sm:text-[4rem] sm:leading-[4rem] xl:mx-0  xl:w-[75%]">
          Let&apos;s talk about your project
        </p>
        <p className="mb-[3.2rem] text-[1.5rem] font-normal leading-[2.5rem] sm:text-[1.6rem] sm:leading-[2.6rem] ">
          Ready to take it to the next level? Contact us today and find out how
          out expertise can help your business grow.
        </p>
      </div>
      <WhiteButton text="get in touch" url="contact" />
    </div>
  );
};

export default Cta;
