type OtherPagesHeroProps = {
  title: string;
  aboutTitle: string;
};
const OtherPagesHero = (props: OtherPagesHeroProps) => {
  return (
    <div className="bg-peach py-[10.5rem] px-[2.4rem]  text-center text-white">
      <p className="mb-[2.4rem] font-normal text-[3.2rem] leading-[3.6rem]">
        {props.title}
      </p>
      <p className="text-[1.5rem] leading-[2.5rem] font-normal">
        {props["aboutTitle"]}
      </p>
    </div>
  );
};

export default OtherPagesHero;
