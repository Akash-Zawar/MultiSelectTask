import React from "react";

const UserTile = ({ name, selection, id, onClick }) => {
  return (
    <div className="p-2 bg-blue-200 text-blue-900 flex flex-row gap-2 items-center justify-center  w-44 rounded-full border-blue-900">
      <p>{name}</p>
      {selection && (
        <svg
          width="16"
          height="16"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={() => onClick(id)}
          className="cursor-pointer">
          <g clipPath="url(#clip0_0_1763)">
            <path
              d="M14.25 4.8075L13.1925 3.75L9 7.9425L4.8075 3.75L3.75 4.8075L7.9425 9L3.75 13.1925L4.8075 14.25L9 10.0575L13.1925 14.25L14.25 13.1925L10.0575 9L14.25 4.8075Z"
              fill="#1C4980"
            />
          </g>
          <defs>
            <clipPath id="clip0_0_1763">
              <rect width="18" height="18" rx="9" fill="white" />
            </clipPath>
          </defs>
        </svg>
      )}
    </div>
  );
};

export default UserTile;
