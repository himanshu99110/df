"use client"

import { useState } from "react"

export default function BookingPage() {
  const [selectedDate, setSelectedDate] = useState<number | null>(6)
  const [timeFormat, setTimeFormat] = useState<"12h" | "24h">("12h")

  // Mock days for May 2026 (Starts on a Friday)
  const daysInMonth = 31
  const emptyDaysAtStart = 5 // Sun, Mon, Tue, Wed, Thu
  const calendarDays = Array.from({ length: daysInMonth }, (_, i) => i + 1)

  const timeSlots = [
    "2:30pm",
    "3:00pm",
    "3:30pm",
    "4:00pm",
    "4:30pm",
    "5:00pm",
    "5:30pm",
    "6:00pm",
    "6:30pm",
    "7:00pm",
  ]

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#111111] p-4 font-sans text-white sm:p-8">
      {/* Top right toggle (Mock) */}
      <div className="mb-4 flex w-full max-w-262.5 justify-end">
        <div className="flex items-center gap-3 text-sm text-gray-300">
          <div className="flex items-center gap-2">
            <div className="relative h-6 w-10 rounded-full border border-gray-700 bg-gray-800">
              <div className="absolute top-1 left-1 h-4 w-4 rounded-full bg-gray-500"></div>
            </div>
            <span>Overlay my calendar</span>
          </div>
          <div className="ml-4 flex gap-1">
            <button className="rounded-md border border-gray-700 bg-gray-800 p-2 hover:bg-gray-700">
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect>
                <line x1="16" x2="16" y1="2" y2="6"></line>
                <line x1="8" x2="8" y1="2" y2="6"></line>
                <line x1="3" x2="21" y1="10" y2="10"></line>
              </svg>
            </button>
            <button className="rounded-md border border-transparent p-2 hover:bg-gray-800">
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
                <path d="M3 9h18M9 21V9"></path>
              </svg>
            </button>
            <button className="rounded-md border border-transparent p-2 hover:bg-gray-800">
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
                <path d="M3 9h18M9 21V9M15 21V9"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Main Booking Card */}
      <div className="relative grid w-full max-w-262.5 grid-cols-1 overflow-hidden rounded-xl border border-[#2a2a2a] bg-[#1a1a1a] shadow-2xl md:grid-cols-[300px_1fr_300px]">
        {/* Scroll indicator mock */}
        <div className="absolute top-[40%] left-73.75 hidden h-12 w-1.5 rounded-full bg-gray-400 md:block"></div>

        {/* Left Column: Event Details */}
        <div className="flex h-full flex-col border-b border-[#2a2a2a] p-8 md:border-r md:border-b-0">
          <div className="mb-4 flex h-8 w-8 items-center justify-center rounded-full bg-[#3f2fee] text-sm font-bold">
            w
          </div>
          <p className="mb-2 text-sm font-medium text-gray-400">
            Wavespace Digital Agency LLC
          </p>
          <h1 className="mb-4 text-2xl leading-tight font-semibold">
            Project Discussion – Wavespace
          </h1>

          <div className="mb-6 flex-1 space-y-2 text-[15px] text-gray-300">
            <p>• How we collaborate on UX/UI projects and deliver results</p>
            <p>• Next steps to move forward if we&apos;re the right fit</p>
            <p className="mt-4">-</p>
            <p className="flex items-center gap-2 font-semibold text-gray-200">
              <span>💼</span> Trusted by 500+ companies
            </p>
          </div>

          <div className="space-y-4 text-sm font-medium text-gray-300">
            <div className="flex items-center gap-3">
              <svg
                className="h-5 w-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
              <span>30m</span>
            </div>
            <div className="flex items-center gap-3">
              <svg
                className="h-5 w-5 text-gray-400"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14v-4z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <rect
                  x="3"
                  y="6"
                  width="12"
                  height="12"
                  rx="2"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>Google Meet</span>
            </div>
            <div className="flex items-center gap-3">
              <svg
                className="h-5 w-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" y1="12" x2="22" y2="12"></line>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
              </svg>
              <span>
                Asia/Kolkata <span className="ml-1 text-xs">▼</span>
              </span>
            </div>
          </div>
        </div>

        {/* Middle Column: Calendar */}
        <div className="border-b border-[#2a2a2a] p-8 md:border-r md:border-b-0">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-[17px] font-semibold">
              May <span className="font-normal text-gray-400">2026</span>
            </h2>
            <div className="flex gap-4 text-gray-500">
              <button className="cursor-not-allowed transition-colors hover:text-white">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </button>
              <button className="transition-colors hover:text-white">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-7 gap-x-2 gap-y-4 text-center">
            {/* Days Header */}
            {["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"].map((day) => (
              <div
                key={day}
                className="mb-2 text-xs font-semibold text-gray-400"
              >
                {day}
              </div>
            ))}

            {/* Empty grid spaces before 1st of month */}
            {Array.from({ length: emptyDaysAtStart }).map((_, i) => (
              <div key={`empty-${i}`} />
            ))}

            {/* Calendar Days */}
            {calendarDays.map((day) => {
              const isSelected = day === selectedDate
              const isPast = day < 3 // Assuming today is around the 3rd or it's just styling
              const isToday = day === 1 // The dot indicator on the 1st

              return (
                <button
                  key={day}
                  onClick={() => setSelectedDate(day)}
                  disabled={isPast}
                  className={`relative mx-auto flex h-12 w-12 flex-col items-center justify-center rounded-lg text-sm font-medium transition-all ${isSelected ? "bg-white text-black" : "bg-[#2a2a2a] text-white hover:border hover:border-gray-500"} ${isPast ? "cursor-not-allowed bg-transparent opacity-30" : ""} `}
                >
                  {day}
                  {isToday && !isSelected && (
                    <span className="absolute bottom-1.5 h-1 w-1 rounded-full bg-white"></span>
                  )}
                </button>
              )
            })}
          </div>
        </div>

        {/* Right Column: Time Slots */}
        <div className="flex h-full flex-col p-8 md:h-150">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-[17px] font-semibold">
              Wed <span className="font-normal text-gray-400">06</span>
            </h2>
            <div className="flex rounded-lg border border-[#2a2a2a] bg-[#111111] p-0.5">
              <button
                onClick={() => setTimeFormat("12h")}
                className={`rounded-md px-3 py-1 text-sm transition-colors ${timeFormat === "12h" ? "bg-[#2a2a2a] text-white" : "text-gray-400 hover:text-white"}`}
              >
                12h
              </button>
              <button
                onClick={() => setTimeFormat("24h")}
                className={`rounded-md px-3 py-1 text-sm transition-colors ${timeFormat === "24h" ? "bg-[#2a2a2a] text-white" : "text-gray-400 hover:text-white"}`}
              >
                24h
              </button>
            </div>
          </div>

          <div className="custom-scrollbar -mr-2 flex-1 space-y-2 overflow-y-auto pr-2">
            {timeSlots.map((time) => (
              <button
                key={time}
                className="w-full rounded-lg border border-[#2a2a2a] py-3.5 text-center text-[15px] font-medium text-gray-200 transition-colors hover:border-white"
              >
                {time}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 text-lg font-semibold text-white">Cal.com</div>

      {/* Add a little custom style for the scrollbar to match the sleek dark theme */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #333;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #555;
        }
      `,
        }}
      />
    </div>
  )
}
