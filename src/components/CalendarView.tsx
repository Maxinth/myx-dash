/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import CalendarArrow from "../assets/calendar-arrow.svg";
import CalendarCloseIcon from "../assets/calendar-close.svg";
import CalenderNavLeftIcon from "../assets/calendar-nav-left.svg";
import CalenderNavRightIcon from "../assets/calendar-nav-right.svg";

interface Props {
  isOpen: boolean;
  setIsOpen: (val: boolean) => void;
}
export default function CalendarView({ isOpen, setIsOpen }: Props) {
  // const [isOpen, setIsOpen] = useState(false);
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
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className=""
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Sidebar */}
            <motion.div
              className="fixed right-0 z-50 w-[400px] top-[98px] h-full max-h-[818px]  bg-black text-[#969696] shadow-lg flex flex-col"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <CalendarNav closeView={() => setIsOpen(false)} />
              <div className="flex items-center justify-between px-12 py-3  border-b border-gray-800">
                <button
                  onClick={handlePrev}
                  className="p-1 text-gray-400 hover:text-white"
                >
                  <img
                    src={CalenderNavLeftIcon}
                    alt="nav-left"
                    className="cursor-pointer"
                  />
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
                  <img
                    src={CalenderNavRightIcon}
                    alt="nav-right"
                    className="cursor-pointer"
                  />
                </button>
              </div>
              <div className="h-full max-h-[600px] overflow-y-auto">
                {/* Custom Calendar Header */}

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
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

const CalendarNav = ({ closeView }: { closeView: () => void }) => {
  return (
    <div className="bg-[#171717] py-4 px-4 flex items-center justify-between">
      <p className="flex items-center gap-2">
        <img
          src={CalendarArrow}
          alt="back arrow"
          onClick={closeView}
          className="cursor-pointer"
        />
        <span className="font-semibold text-white">Calendar</span>
      </p>
      <img
        src={CalendarCloseIcon}
        alt="close"
        onClick={closeView}
        className="cursor-pointer"
      />
    </div>
  );
};
