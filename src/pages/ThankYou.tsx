import React from "react";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const ThankYou = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-white px-4">
      <CheckCircle size={48} className="text-green-500 mb-4" />
      <h1 className="text-3xl font-bold mb-2">Thank You!</h1>
      <p className="text-lg text-slate-600 dark:text-slate-400 mb-6 text-center">
        Your message has been sent successfully. I’ll get back to you shortly.
      </p>
      <Link
        to="/"
        className="bg-indigo-600 text-white px-6 py-3 rounded-xl hover:scale-105 transition-transform"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default ThankYou;
