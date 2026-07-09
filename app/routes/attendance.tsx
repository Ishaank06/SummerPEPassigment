import { useState } from "react";
import { Link } from "react-router";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Student Portal - Daily Attendance" },
  ];
}

const DEMO_STUDENTS = [
  { id: "STU-001", name: "Alex Carter" },
  { id: "STU-002", name: "Jane Doe" },
  { id: "STU-003", name: "Michael Smith" },
  { id: "STU-004", name: "Emily Watson" },
  { id: "STU-005", name: "David Kim" },
];

export default function Attendance() {
  const [submitted, setSubmitted] = useState(false);
  const [attendanceDate, setAttendanceDate] = useState(new Date().toISOString().split("T")[0]);
  
  // Track attendance status for each student (studentId -> "present" | "absent")
  const [attendanceRecords, setAttendanceRecords] = useState<Record<string, "present" | "absent">>(
    DEMO_STUDENTS.reduce((acc, student) => ({ ...acc, [student.id]: "present" }), {})
  );

  const handleStatusChange = (studentId: string, status: "present" | "absent") => {
    setAttendanceRecords((prev) => ({ ...prev, [studentId]: status }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setAttendanceDate(new Date().toISOString().split("T")[0]);
    setAttendanceRecords(
      DEMO_STUDENTS.reduce((acc, student) => ({ ...acc, [student.id]: "present" }), {})
    );
    setSubmitted(false);
  };

  // Calculate totals
  const totalPresent = Object.values(attendanceRecords).filter((s) => s === "present").length;
  const totalAbsent = Object.values(attendanceRecords).filter((s) => s === "absent").length;

  if (submitted) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6 text-slate-800">
        <div className="bg-white border border-slate-200/80 rounded-2xl p-8 max-w-md w-full shadow-sm text-center">
          <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 border border-emerald-100">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-xl font-semibold text-slate-900 tracking-tight">Attendance Submitted</h2>
          <p className="text-sm text-slate-500 mt-2">
            Daily class attendance log has been successfully saved.
          </p>

          {/* Totals Summary */}
          <div className="grid grid-cols-2 gap-3 mt-5">
            <div className="bg-slate-50 border border-slate-100 rounded-xl p-3">
              <span className="text-xs text-slate-400 block">Present</span>
              <span className="text-lg font-bold text-emerald-600">{totalPresent}</span>
            </div>
            <div className="bg-slate-50 border border-slate-100 rounded-xl p-3">
              <span className="text-xs text-slate-400 block">Absent</span>
              <span className="text-lg font-bold text-rose-600">{totalAbsent}</span>
            </div>
          </div>

          {/* Student Status Summary List */}
          <div className="bg-slate-50 rounded-xl p-4 border border-slate-100 mt-4 text-left space-y-2 text-xs text-slate-600">
            <div className="text-slate-400 font-medium border-b border-slate-200/50 pb-1.5 mb-2">
              Log Date: {attendanceDate}
            </div>
            {DEMO_STUDENTS.map((student) => {
              const isPresent = attendanceRecords[student.id] === "present";
              return (
                <div key={student.id} className="flex justify-between items-center py-0.5">
                  <span className="text-slate-800">{student.name}</span>
                  <span className={`font-semibold capitalize ${isPresent ? "text-emerald-600" : "text-rose-600"}`}>
                    {attendanceRecords[student.id]}
                  </span>
                </div>
              );
            })}
          </div>

          <div className="mt-6 flex flex-col gap-2">
            <button
              onClick={handleReset}
              className="w-full py-2.5 px-4 bg-slate-900 hover:bg-slate-800 text-white font-medium text-sm rounded-lg transition-colors cursor-pointer"
            >
              Log Another Day
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
      <div className="bg-white border border-slate-200/80 rounded-2xl max-w-lg w-full shadow-sm overflow-hidden my-8">
        
        {/* Header */}
        <div className="border-b border-slate-100 p-6 flex justify-between items-center">
          <div>
            <h1 className="text-lg font-semibold text-slate-900 tracking-tight">Attendance Logger</h1>
            <p className="text-xs text-slate-400 mt-0.5">Mark daily status for demo students</p>
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
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          
          {/* Date Picker Input */}
          <div className="space-y-1.5 max-w-xs">
            <label htmlFor="attendanceDate" className="text-sm font-medium text-slate-700 block">
              Attendance Date
            </label>
            <input
              type="date"
              id="attendanceDate"
              name="attendanceDate"
              value={attendanceDate}
              onChange={(e) => setAttendanceDate(e.target.value)}
              required
              className="w-full px-3.5 py-2 border border-slate-300 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/10 focus:border-indigo-500 transition-all shadow-2xs"
            />
          </div>

          {/* Student Status List */}
          <div className="space-y-3">
            <span className="text-sm font-semibold uppercase tracking-wider text-slate-400 block mb-1">
              Student Attendance List
            </span>
            
            <div className="border border-slate-150 rounded-xl divide-y divide-slate-100 overflow-hidden bg-white">
              {DEMO_STUDENTS.map((student) => {
                const status = attendanceRecords[student.id];
                return (
                  <div key={student.id} className="p-4 flex items-center justify-between gap-4">
                    <div>
                      <p className="text-sm font-medium text-slate-900">{student.name}</p>
                      <p className="text-xs text-slate-400">{student.id}</p>
                    </div>

                    <div className="flex gap-2">
                      <button
                        type="button"
                        onClick={() => handleStatusChange(student.id, "present")}
                        className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all cursor-pointer ${
                          status === "present"
                            ? "bg-emerald-500 border-emerald-500 text-white shadow-2xs"
                            : "border-slate-200 text-slate-600 hover:bg-slate-50"
                        }`}
                      >
                        Present
                      </button>
                      <button
                        type="button"
                        onClick={() => handleStatusChange(student.id, "absent")}
                        className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all cursor-pointer ${
                          status === "absent"
                            ? "bg-rose-500 border-rose-500 text-white shadow-2xs"
                            : "border-slate-200 text-slate-600 hover:bg-slate-50"
                        }`}
                      >
                        Absent
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-2.5 px-4 bg-slate-900 hover:bg-slate-800 text-white font-medium rounded-lg text-sm transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-500/20 cursor-pointer"
            >
              Submit Attendance Log
            </button>
          </div>
        </form>

      </div>
    </div>
  );
}
