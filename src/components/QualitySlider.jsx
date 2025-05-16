import React from "react";

const QualitySlider = ({ value, handleRangeChange }) => {
  const intervals = [
    { value: 0, color: "#ff4d4f", label: "not recommended" },
    { value: 0.2, color: "#fadb14", label: "moderate" },
    { value: 0.4, color: "#fadb14", label: "moderate" },
    { value: 0.6, color: "#0fdd23", label: "recommended" },
    { value: 0.8, color: "#0fdd23", label: "recommended" },
    { value: 1, color: "#fadb14", label: "moderate" },
  ];

  const currentInterval = intervals.reduce((prev, curr) => {
    return Math.abs(curr.value - value / 100) <
      Math.abs(prev.value - value / 100)
      ? curr
      : prev;
  });

  return (
    <div>
      <label className="md:text-lg md:font-semibold font-medium">
        Image Quality: {value / 100}{" "}
        <span className={`text-[${currentInterval.color}]`}>
          ({currentInterval.label})
        </span>
      </label>
      <div className="relative mb-6 -mt-1.5">
        <input
          type="range"
          className="range w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer range-sm"
          value={value}
          min={1}
          max={99}
          onChange={handleRangeChange}
        />
        <span className="text-sm text-[#ff4d4f] absolute start-0 -bottom-5">
          0
        </span>
        <span className="text-sm text-[#fadb14] absolute start-[20%] -translate-x-1/2 -bottom-5">
          0.2
        </span>
        <span className="text-sm text-[#fadb14] absolute start-[40.0%] -translate-x-1/2 -bottom-5">
          0.4
        </span>
        <span className="text-sm text-[#0fdd23] absolute start-[60%] -translate-x-1/2 -bottom-5">
          0.6
        </span>
        <span className="text-sm text-[#0fdd23] absolute start-[80%] -translate-x-1/2 -bottom-5">
          0.8
        </span>
        <span className="text-sm text-[#fadb14] absolute end-0 -bottom-5">
          1
        </span>
      </div>
    </div>
  );
};

export default QualitySlider;
