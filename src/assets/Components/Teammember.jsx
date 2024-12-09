import React from 'react';

const Teammmember = ({ profileImage, name, role, tags, profileLink }) => {
  return (
    <div className="relative flex-shrink-0 max-w-sm m-6 overflow-hidden bg-white rounded-lg shadow-lg ">
      <div className="relative">
        <video
          className="object-cover w-full transition-transform duration-300 ease-out rounded-t-lg h-52 "
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
        <a href={profileLink} target='_blank' className="text-blue-500 hover:underline">
          View Profile
        </a>
      </div>
    </div>
  );
};

export default Teammmember;
