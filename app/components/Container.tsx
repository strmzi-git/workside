interface ContainerProps {
  children: React.ReactElement;
}

const Container: React.FC<ContainerProps> = function ({ children }) {
  return <div className="px-0 sm:px-10 md:px-24 py-10">{children}</div>;
};

export default Container;
