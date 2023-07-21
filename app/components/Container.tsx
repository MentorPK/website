interface ContainerProps {
  children: React.ReactNode;
  addStyles?: string;
}
const Container = ({ children, addStyles = '' }: ContainerProps) => {
  return (
    <div className={`flex justify-center ${addStyles}`}>
      <div className="lg:w-3/6 md:w-3/6 sm:w-5/6 sm:px-3 px-1">
        <div className="flex flex-col justify-center items-center">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Container;
