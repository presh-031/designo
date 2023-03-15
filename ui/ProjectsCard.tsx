type ProjectsCardProps = {
  children: React.ReactNode;
};

const ProjectsCard = ({ children }: ProjectsCardProps) => {
  return (
    <div className="mb-[9.6rem] grid grid-cols-1 gap-[4rem] border border-red-800 sm:mb-[12rem] sm:gap-[3.2rem]  sm:px-[3.9rem]">
      {children}
    </div>
  );
};

export default ProjectsCard;
