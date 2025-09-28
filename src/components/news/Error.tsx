// components/Error.tsx
type ErrorProps = {
  message?: string;
};

const Error = ({ message = "Something went wrong!" }: ErrorProps) => {
  return (
    <div className="flex justify-center items-center py-20 text-red-600 text-lg font-medium">
      {message}
    </div>
  );
};

export default Error;
