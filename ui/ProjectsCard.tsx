type ProjectsCardProps = {
  children: React.ReactNode;
};

const ProjectsCard = ({ children }: ProjectsCardProps) => {
  return (
    <div className="mb-[9.6rem] grid grid-cols-1 gap-[4rem]  sm:mb-[12rem] sm:gap-[3.2rem] sm:px-[3.9rem] xl:mb-[16rem] xl:grid-cols-3  xl:gap-[3rem] xl:px-[16.5rem]">
      {children}
    </div>
  );
};

export default ProjectsCard;
