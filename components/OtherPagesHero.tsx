type OtherPagesHeroProps = {
  title: string;
  aboutTitle: string;
};
const OtherPagesHero = (props: OtherPagesHeroProps) => {
  return (
    <div className="bg-peach bg-[url('../assets/shared/desktop/bg-pattern-small-circle.svg')] bg-contain bg-[right_-2rem_-3.5rem] bg-no-repeat py-[10.5rem] px-[2.4rem]  text-center text-white">
      <p className="mb-[2.4rem] text-[3.2rem] font-normal leading-[3.6rem]">
        {props.title}
      </p>
      <p className="text-[1.5rem] font-normal leading-[2.5rem]">
        {props["aboutTitle"]}
      </p>
    </div>
  );
};

export default OtherPagesHero;
