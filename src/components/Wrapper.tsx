

interface WrapperProps {
  children: React.ReactNode;
}

const Wrapper = ({ children }: WrapperProps) => {

  return (
    <main className="px-4 md:px-44 py-4 min-h-screen">
      {children}
    </main>
  );
};

export default Wrapper;
