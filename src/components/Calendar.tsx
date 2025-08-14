import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { DayPicker } from "react-day-picker";
import type { NavProps } from "react-day-picker"; // type-only import
import { FiCalendar, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { format } from "date-fns";
import "react-day-picker/dist/style.css";

export default function CalendarSidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<Date | undefined>(new Date());
  const [month, setMonth] = useState(new Date());

  // Custom Nav for month switching
  const CustomNav = (props: NavProps & { displayMonths?: Date[] }) => {
    const { onPreviousClick, onNextClick, displayMonths = [] } = props;
    const currentMonth = displayMonths[0] ?? new Date();

    return (
      <div className="flex items-center justify-between px-2 mb-2">
        <button
          className="text-gray-400 hover:text-white"
          onClick={onPreviousClick}
        >
          <FiChevronLeft size={20} />
        </button>
        <span className="text-white font-medium">
          {format(currentMonth, "MMMM yyyy")}
        </span>
        <button
          className="text-gray-400 hover:text-white"
          onClick={onNextClick}
        >
          <FiChevronRight size={20} />
        </button>
      </div>
    );
  };

  return (
    <div>
      {/* Icon Button */}
      <button
        className="p-2 bg-gray-800 text-white rounded-full hover:bg-gray-700"
        onClick={() => setIsOpen(true)}
      >
        <FiCalendar size={20} />
      </button>

      {/* Sidebar */}
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

            {/* Drawer */}
            <motion.div
              className="fixed right-0 top-0 h-full w-80 bg-black text-white shadow-lg flex flex-col"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {/* Header */}
              <div className="flex justify-between items-center p-4 border-b border-gray-800">
                <h2 className="text-lg font-semibold">Calendar</h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-400 hover:text-white"
                >
                  ✕
                </button>
              </div>

              {/* Calendar */}
              <div className="p-2">
                <DayPicker
                  mode="single"
                  selected={selected}
                  onSelect={setSelected}
                  month={month}
                  onMonthChange={setMonth}
                  components={{
                    Nav: CustomNav,
                  }}
                  styles={{
                    head: { color: "#aaa" },
                    head_cell: {
                      color: "#aaa",
                      fontWeight: "normal",
                      fontSize: "0.875rem",
                      padding: "6px 0",
                    },
                    row: { height: "40px" },
                    cell: { textAlign: "center", padding: "0" },
                    day: {
                      margin: "0 auto",
                      width: "36px",
                      height: "36px",
                      lineHeight: "36px",
                      borderRadius: "50%",
                      color: "white",
                    },
                    day_selected: {
                      backgroundColor: "#2563eb",
                      color: "white",
                    },
                    day_today: {
                      border: "1px solid #2563eb",
                    },
                  }}
                  className="bg-black"
                />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
