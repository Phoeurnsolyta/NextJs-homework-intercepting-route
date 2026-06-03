// "use client"; // Error boundaries must be Client Components

// import { useEffect } from "react";

// export default function Error({
//   error,
//   unstable_retry,
// }: {
//   error: Error & { digest?: string };
//   unstable_retry: () => void;
// }) {
//   useEffect(() => {
//     // Log the error to an error reporting service
//     console.error(error);
//   }, [error]);

//   return (
//     <>
//       <div className="container mx-auto px-4 py-16 flex-1 flex flex-col items-center justify-center">
//         <div className="max-w-md w-full text-center">
//           <div className="mb-8">
//             {/*?xml version="1.0" encoding="utf-8"?*/}
           
//           </div>
//           <h1 className="text-5xl font-bold mb-4 text-[#6366f1] dark:text-[#818cf8]">
//             404
//           </h1>
//           <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
//           <p className="mb-8 text-gray-600 dark:text-gray-400">
//             Oops! The page you're looking for doesn't exist or has been moved.
//           </p>
//           <div className="flex flex-col sm:flex-row justify-center gap-4">
//             <a
//               href="#"
//               className="px-6 py-3 bg-[#6366f1] dark:bg-[#818cf8] text-white rounded-lg font-medium hover:opacity-90 transition-opacity"
//             >
//               Go Back Home
//             </a>
//             <a
//               href="#"
//               className="px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-lg font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
//             >
//               Button
//             </a>
//           </div>
//         </div>
//       </div>
//       <footer className="py-6 text-center text-gray-500 dark:text-gray-400 text-sm">
//         © 2025 Your Company. All rights reserved.
//       </footer>
//     </>
//   );
// }

"use client";


export default function ErrorDashboard() {
  return (
    <div className='text-red-500 h-screen grid place-content-center font-bold text-[200px]'>error</div>
  )
}
