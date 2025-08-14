/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { FiCalendar, FiChevronLeft, FiChevronRight } from "react-icons/fi";

export default function CalendarSidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [calendarRef, setCalendarRef] = useState<any>(null);

  const handlePrev = () => {
    if (calendarRef) {
      const api = calendarRef.getApi();
      api.prev();
    }
  };

  const handleNext = () => {
    if (calendarRef) {
      const api = calendarRef.getApi();
      api.next();
    }
  };

  return (
    <div>
      {/* Calendar icon button */}
      <button
        className="p-2 bg-gray-800 text-white rounded-full hover:bg-gray-700"
        onClick={() => setIsOpen(true)}
      >
        <FiCalendar size={20} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Sidebar */}
            <motion.div
              className="fixed right-0 top-0 h-full w-80 bg-black text-white shadow-lg flex flex-col"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {/* Custom Calendar Header */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-gray-800">
                <button
                  onClick={handlePrev}
                  className="p-1 text-gray-400 hover:text-white"
                >
                  <FiChevronLeft size={20} />
                </button>
                <h2
                  id="fc-month-label"
                  className="text-lg font-medium text-white"
                >
                  {/* FullCalendar sets this via datesSet */}
                </h2>
                <button
                  onClick={handleNext}
                  className="p-1 text-gray-400 hover:text-white"
                >
                  <FiChevronRight size={20} />
                </button>
              </div>

              {/* FullCalendar */}
              <div className="flex-1 fc-dark h-full">
                <FullCalendar
                  plugins={[dayGridPlugin]}
                  initialView="dayGridMonth"
                  height="100%"
                  //   className="fc-dark"
                  ref={(ref) => setCalendarRef(ref)}
                  headerToolbar={false}
                  fixedWeekCount={false}
                  //   dayCellDidMount={(args) => {
                  //     const dateStr = args.date.toISOString().split("T")[0];
                  //     if (dateStr === todayStr) {
                  //       args.el.classList.add("fc-today-highlight");
                  //     }
                  //   }}
                  dayCellDidMount={(args) => {
                    const today = new Date();
                    today.setHours(0, 0, 0, 0);

                    const cellDate = new Date(args.date);
                    cellDate.setHours(0, 0, 0, 0);

                    const isToday = cellDate.getTime() === today.getTime();

                    if (isToday) {
                      const inner = args.el.querySelector(
                        ".fc-daygrid-day-number"
                      ) as HTMLElement;
                      if (inner) {
                        inner.style.backgroundColor = "#3b82f6"; // blue
                        inner.style.color = "white";
                        inner.style.borderRadius = "50%";
                        inner.style.width = "24px";
                        inner.style.height = "24px";
                        inner.style.display = "flex";
                        inner.style.alignItems = "center";
                        inner.style.justifyContent = "center";
                        inner.style.margin = "0 auto";
                      }
                    }
                  }}
                  datesSet={(info) => {
                    const monthLabel =
                      document.getElementById("fc-month-label");
                    if (monthLabel) {
                      monthLabel.textContent = info.view.title;
                    }
                  }}
                />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
