import { useState } from "react";
import { Link } from "react-router";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Student Portal - Course Enrollment" },
  ];
}

export default function Enrollment() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    studentName: "",
    email: "",
    course: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setFormData({
      studentName: "",
      email: "",
      course: "",
    });
    setSubmitted(false);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6 text-slate-800">
        <div className="bg-white border border-slate-200/80 rounded-2xl p-8 max-w-md w-full shadow-sm text-center">
          <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 border border-emerald-100">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-xl font-semibold text-slate-900 tracking-tight">Enrollment Submitted</h2>
          <p className="text-sm text-slate-500 mt-2">
            Your course enrollment request has been successfully recorded.
          </p>

          <div className="bg-slate-50 rounded-xl p-4 border border-slate-100 mt-6 text-left space-y-2.5 text-xs text-slate-600">
            <div className="flex justify-between border-b border-slate-200/50 pb-1.5">
              <span className="text-slate-400">Student Name</span>
              <span className="font-medium text-slate-800">{formData.studentName}</span>
            </div>
            <div className="flex justify-between border-b border-slate-200/50 pb-1.5">
              <span className="text-slate-400">Email Address</span>
              <span className="font-medium text-slate-800">{formData.email}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Selected Course</span>
              <span className="font-medium text-slate-800 capitalize">{formData.course}</span>
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-2">
            <button
              onClick={handleReset}
              className="w-full py-2.5 px-4 bg-slate-900 hover:bg-slate-800 text-white font-medium text-sm rounded-lg transition-colors cursor-pointer"
            >
              Enroll Another Student
            </button>
            <Link
              to="/"
              className="w-full py-2.5 px-4 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 font-medium text-sm rounded-lg transition-colors inline-block text-center cursor-pointer"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6 text-slate-800">
      <div className="bg-white border border-slate-200/80 rounded-2xl max-w-md w-full shadow-sm overflow-hidden my-8">
        
        {/* Header */}
        <div className="border-b border-slate-100 p-6 flex justify-between items-center">
          <div>
            <h1 className="text-lg font-semibold text-slate-900 tracking-tight">Course Enrollment</h1>
            <p className="text-xs text-slate-400 mt-0.5">Register for class catalogs</p>
          </div>
          <Link
            to="/"
            className="text-xs font-medium text-indigo-600 hover:text-indigo-700 flex items-center gap-1"
          >
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Back Home
          </Link>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-5">
          <div className="space-y-1.5">
            <label htmlFor="studentName" className="text-sm font-medium text-slate-700 block">
              Student Name
            </label>
            <input
              type="text"
              id="studentName"
              name="studentName"
              value={formData.studentName}
              onChange={handleChange}
              placeholder="e.g. Alex Carter"
              required
              className="w-full px-3.5 py-2 border border-slate-300 rounded-lg text-sm bg-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/10 focus:border-indigo-500 transition-all shadow-2xs"
            />
          </div>

          <div className="space-y-1.5">
            <label htmlFor="email" className="text-sm font-medium text-slate-700 block">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="name@example.com"
              required
              className="w-full px-3.5 py-2 border border-slate-300 rounded-lg text-sm bg-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/10 focus:border-indigo-500 transition-all shadow-2xs"
            />
          </div>

          <div className="space-y-1.5">
            <label htmlFor="course" className="text-sm font-medium text-slate-700 block">
              Target Course
            </label>
            <select
              id="course"
              name="course"
              value={formData.course}
              onChange={handleChange}
              required
              className="w-full px-3.5 py-2 border border-slate-300 rounded-lg text-sm bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500/10 focus:border-indigo-500 transition-all shadow-2xs cursor-pointer"
            >
              <option value="" disabled>Select a course</option>
              <option value="react">React Web Development</option>
              <option value="python">Python Programming</option>
              <option value="ux">UI/UX Design</option>
            </select>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-2.5 px-4 bg-slate-900 hover:bg-slate-800 text-white font-medium rounded-lg text-sm transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-500/20 cursor-pointer"
            >
              Submit Enrollment
            </button>
          </div>
        </form>

      </div>
    </div>
  );
}
