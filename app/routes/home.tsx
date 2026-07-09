import { Link } from "react-router";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Student Portal - Welcome" },
  ];
}

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6 text-slate-800">
      <div className="bg-white border border-slate-200/80 rounded-2xl max-w-xl w-full shadow-sm p-8 space-y-6">
        
        {/* Portal Header */}
        <div className="text-center pb-4 border-b border-slate-100">
          <h1 className="text-2xl font-semibold text-slate-900 tracking-tight">Student Action Portal</h1>
          <p className="text-sm text-slate-500 mt-1.5">
            Select one of the forms below to register, log daily attendance, or submit class feedback.
          </p>
        </div>

        {/* Navigation Grid */}
        <div className="space-y-4">
          <Link
            to="/enrollment"
            className="group block p-5 border border-slate-200 rounded-xl hover:border-slate-400 hover:bg-slate-50/50 transition-all text-left"
          >
            <div className="flex justify-between items-center">
              <h3 className="font-semibold text-slate-900 group-hover:text-indigo-600 transition-colors">Course Enrollment Form</h3>
              <svg className="w-5 h-5 text-slate-400 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </div>
            <p className="text-sm text-slate-500 mt-1.5">
              Register for upcoming classes, semesters, and select academic paths.
            </p>
          </Link>

          <Link
            to="/attendance"
            className="group block p-5 border border-slate-200 rounded-xl hover:border-slate-400 hover:bg-slate-50/50 transition-all text-left"
          >
            <div className="flex justify-between items-center">
              <h3 className="font-semibold text-slate-900 group-hover:text-indigo-600 transition-colors">Daily Attendance Logger</h3>
              <svg className="w-5 h-5 text-slate-400 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </div>
            <p className="text-sm text-slate-500 mt-1.5">
              Log daily presence, indicate excuses, or specify late check-in remarks.
            </p>
          </Link>

          <Link
            to="/feedback"
            className="group block p-5 border border-slate-200 rounded-xl hover:border-slate-400 hover:bg-slate-50/50 transition-all text-left"
          >
            <div className="flex justify-between items-center">
              <h3 className="font-semibold text-slate-900 group-hover:text-indigo-600 transition-colors">Instructor & Course Feedback</h3>
              <svg className="w-5 h-5 text-slate-400 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </div>
            <p className="text-sm text-slate-500 mt-1.5">
              Submit class rating evaluations, instructor reviews, and lesson suggestions.
            </p>
          </Link>
        </div>

        <div className="text-center pt-2">
          <p className="text-xs text-slate-400">EduSphere Student Administration Services</p>
        </div>

      </div>
    </div>
  );
}
