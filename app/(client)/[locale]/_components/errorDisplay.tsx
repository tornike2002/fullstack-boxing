function ErrorDisplay({ errorMsg }: { errorMsg: string }) {
  return (
    <div className="bg-black text-white p-4 shadow-lg flex items-center justify-center space-x-3">
      <div className="text-xl font-semibold text-red-500">Error :</div>
      <div className="text-sm text-red-400">{errorMsg}</div>
    </div>
  );
}

export default ErrorDisplay;
