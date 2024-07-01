const ErrorPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-4xl font-bold text-center mb-4">
          404: Page Not Found
        </h1>
        <p className="text-gray-700 text-center">
          The page you requested could not be found. It might be unavailable or
          you might have entered the wrong URL.
        </p>
        <a
          href="/"
          className="inline-flex items-center px-4 py-2 mt-8 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none"
        >
          <svg
            className="w-4 h-4 mr-2 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10.707 17.707a1 1 0 0 1-1.414-1.414l-3-3a1 1 0 0 1 0-1.414l4-4a1 1 0 0 1 1.414 1.414l-3 3a1 1 0 0 1-1.414zM0 11a11 11 0 1 1 22 0 11 11 0 0 1-22 0z" />
          </svg>
          Back to Home
        </a>
      </div>
    </div>
  );
};

export default ErrorPage;
