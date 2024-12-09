import Teammmember from './Teammember';
import  '../css/animation.css'
import { initScrollAnimations } from '../js/scrollAnimation';
import { useEffect } from 'react';

const Ourteam = () => {
  useEffect(() => {
    initScrollAnimations();
  }, []);
  const users = [
    {
      profileImage:
        'assets/videos/tarun1.mp4',
      name: 'Parth Upadhyay',
      role: 'Front-end Developer',
      tags: [
        { label: 'Three JS', color: 'text-teal-900 bg-teal-200' },
        { label: 'React JS', color: 'text-indigo-900 bg-indigo-200' },
        { label: 'Tailwind', color: 'text-purple-900 bg-purple-200' },
        { label: 'GSAP', color: 'text-red-900 bg-red-200' },
        { label: 'Bootstrap', color: 'text-green-900 bg-green-200' },
      ],
      profileLink: 'https://www.linkedin.com/in/parth-upadhyay-21b66627a/',
    },
    {
      profileImage:
        'assets/videos/10.mp4',
      name: 'Tarun Vaishnav',
      role: 'Back-end Developer',
      tags: [
        { label: 'Node JS', color: 'text-teal-900 bg-teal-200' },
        { label: 'MySQL', color: 'text-indigo-900 bg-indigo-200' },
        { label: 'Python-DJango', color: 'text-purple-900 bg-purple-200' },
        { label: 'Express', color: 'text-green-900 bg-green-200' },
      ],
      profileLink: 'https://www.linkedin.com/in/tarunvdev/',
    },
    {
      profileImage:
        'assets/videos/21.mp4',
      name: 'Harshit Pandey',
      role: 'Fullstack Developer',
      tags: [
        { label: 'Node JS', color: 'text-teal-900 bg-teal-200' },
        { label: 'MySQL', color: 'text-indigo-900 bg-indigo-200' },
        { label: 'Version Control', color: 'text-purple-900 bg-purple-200' },
        { label: 'Server Management', color: 'text-orange-900 bg-orange-200' },
      ],
      profileLink: 'https://www.linkedin.com/in/thepandey/',
    },
  ];

  return (
    <div className='scroll-animate'>
    <h1
      className="flex items-center justify-center h-12 mt-10 text-3xl text-center md:text-4xl lg:text-5xl xl:text-6xl"
      style={{ fontFamily: 'Parkinsans, sans-serif' }}
    >
      Our Team Members
    </h1>

    <div className="flex flex-wrap justify-center p-1">
      
      {users.map((user, index) => (
        <Teammmember
          key={index}
          profileImage={user.profileImage}
          name={user.name}
          role={user.role}
          tags={user.tags}
          profileLink={user.profileLink}
        />
      ))}
    </div>
    </div>
  );
};

export default Ourteam;
