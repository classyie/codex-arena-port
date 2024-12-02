import React from 'react';

const Teammmember = ({ profileImage, name, role, tags, profileLink }) => {
  return (
    <div className="max-w-sm w-[350px] mx-auto bg-white rounded-lg shadow-lg transition-transform duration-300 ease-out hover:transform hover:scale-105 hover:rotate-[2deg] ">
      <div className="relative">
        <video
          className="object-cover w-full h-48 transition-transform duration-300 ease-out rounded-t-lg hover:scale-110"
          src={profileImage}
          autoPlay
          loop
          muted
          playsInline
        />
      </div>
      <div className="px-6 py-4">
        <div className="text-xl font-semibold text-gray-800">{name}</div>
        <p className="text-gray-600">{role}</p>
      </div>
      <div className="px-6 py-4">
        {tags.map((tag, index) => (
          <span
            key={index}
            className={`inline-block px-2 mt-2 ml-2 py-1 font-semibold rounded-full ${tag.color}`}
          >
            {tag.label}
          </span>
        ))}
      </div>
      <div className="px-6 py-4">
        <a href={profileLink} className="text-blue-500 hover:underline">
          View Profile
        </a>
      </div>
    </div>
  );
};

export default Teammmember;
