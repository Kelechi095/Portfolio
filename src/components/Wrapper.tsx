

interface WrapperProps {
  children: React.ReactNode;
}

const Wrapper = ({ children }: WrapperProps) => {

  return (
    <main className="main">
      {children}
    </main>
  );
};

export default Wrapper;
