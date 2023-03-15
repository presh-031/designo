type OtherPagesHeroProps = {
  title: string;
  aboutTitle: string;
};
const OtherPagesHero = (props: OtherPagesHeroProps) => {
  return (
    <div className="mb-[9.6rem] bg-peach bg-[url('../assets/shared/desktop/bg-pattern-small-circle.svg')] bg-[length:292px] bg-[right_top]   bg-no-repeat py-[10.5rem] px-[2.4rem] text-center text-white sm:mx-[4rem]   sm:mb-[12rem] sm:rounded-2xl sm:py-[6.4rem]">
      <p className="mb-[2.4rem] text-[3.2rem] font-normal leading-[3.6rem] sm:text-[4.8rem]  sm:font-medium sm:leading-[4.8rem]">
        {props.title}
      </p>
      <p className="mx-auto text-[1.5rem] font-normal leading-[2.5rem] sm:w-[80%] md:w-[60%]">
        {props["aboutTitle"]}
      </p>
    </div>
  );
};

export default OtherPagesHero;
