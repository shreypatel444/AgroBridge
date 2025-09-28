// components/Loading.tsx
const Loading = () => {
  return (
    <div className="flex justify-center items-center py-20">
      <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-green-600"></div>
    </div>
  );
};

export default Loading;
