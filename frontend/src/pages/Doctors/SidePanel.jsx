import React from "react";
import { convertTime } from "../../utils/convertTime";
import { BASE_URL, token } from "../../config";
import { toast } from "react-toastify";

function SidePanel({ doctorId, ticketPrice, timeSlots }) {
  const bookingHandler = async function () {
    try {
      const response = await fetch(
        `${BASE_URL}/bookings/checkout-session/${doctorId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await response.json();
      console.log(response);
      if (!response.ok) {
        throw new Error(data.message + " Please try again");
      }

      if (data.session.url) {
        window.location.href = data.session.url;
      }
    } catch (err) {
      toast.error(err.message);
    }
  };
  return (
    <div className="shadow-panelShadow p-3 lg:p-5 rounded-md">
      <div className="flex items-center justify-between">
        <p className="text_para mt-0 font-semibold">Ticket Price</p>
        <span className="text-[16px] leading-7 lg:text-[22px] lg:leading-8 text-headingColor font-bold">
          &#8377;{ticketPrice || 500}{" "}
        </span>
      </div>
      <div className="mt-[30px]">
        <p className="text_para mt-0 font-semibold text-headingColor">
          Available Time Slots:
        </p>

        <ul className="mt-3">
          {timeSlots &&
            timeSlots.map((item, index) => {
              return (
                <li
                  className="flex items-center justify-between mb-2 "
                  key={index}
                >
                  <p className="text-[15px] leading-6 text-textColor font-semibold">
                    {item?.day.charAt(0).toUpperCase() + item?.day.slice(1)}
                  </p>
                  <p className="text-[15px] leading-6 text-textColor font-semibold">
                    {convertTime(item?.startingTime)} &mdash;{" "}
                    {convertTime(item?.startingTime)}
                  </p>
                </li>
              );
            })}
        </ul>
      </div>

      <button className="btn px-2 w-full rounded-md" onClick={bookingHandler}>
        Book Appointment
      </button>
    </div>
  );
}

export default SidePanel;
