import { useParams, useNavigate } from 'react-router-dom';
import './ClientPage.css';
import { useEffect, useState } from 'react';

const people = [
  {
    id: 1,
    name: 'Leslie Alexander',
    role: 'Co-Founder / CEO',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    bio: `Leslie Alexander is a visionary leader with a passion for technology and innovation. As the Co-Founder and CEO of TechRise Inc., Leslie has played a pivotal role in transforming the company into a leading SaaS provider. With over 15 years of experience in the tech industry, Leslie is known for driving strategic growth, fostering a culture of creativity, and championing sustainable business practices.`,
    company: 'TechRise Inc.',
    companyLocation: 'San Francisco, CA',
    established: 2015,
    website: 'https://www.techrise.com',
    email: 'leslie.alexander@techrise.com',
    phone: '(555) 123-4567',
    specialties: ['SaaS', 'Cloud Solutions', 'Enterprise Software'],
    achievements: [
      'Featured in Forbes 30 Under 30',
      'TechCrunch Startup of the Year 2020',
      'Successfully raised $10M in Series A funding',
    ],
  },
  {
    id: 2,
    name: 'Human 1',
    role: 'Co-Founder / CEO',
    imageUrl:
      'https://plus.unsplash.com/premium_photo-1669879825881-6d4e4bde67d5?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    bio: `Human 1 is a dynamic leader committed to revolutionizing technology in today's fast-paced world. As Co-Founder and CEO of TechRise Inc., Human brings a wealth of experience and insight to the company, ensuring it remains at the forefront of the tech industry.`,
    company: 'TechRise Inc.',
    companyLocation: 'San Francisco, CA',
    established: 2015,
    website: 'https://www.techrise.com',
    email: 'human1@techrise.com',
    phone: '(555) 765-4321',
    specialties: ['SaaS', 'AI Solutions', 'Cybersecurity'],
    achievements: [
      'Recognized as a Top Innovator by Tech Magazine',
      'Pioneered groundbreaking AI technologies',
      'Secured partnerships with Fortune 500 companies',
    ],
  },
];

const ClientPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const client = people.find((person) => person.id === parseInt(id));
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeIn(true);
    }, 100); // Delay to trigger fade-in effect

    return () => clearTimeout(timer);
  }, []);

  if (!client) {
    return <div className="text-white">Client not found</div>;
  }

  const handleNavigate = () => {
    navigate(`/project/${client.id}`);
  };

  return (
    <div className={`bg-gray-900 text-gray-200 transition-opacity duration-700 ${fadeIn ? 'opacity-100' : 'opacity-0'}`}>
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Image Section */}
        <div className="mb-8">
          <img src={client.imageUrl} alt={client.name} className="w-full h-[220px] h-auto rounded-lg shadow-md" />
        </div>

        <h1 className="text-3xl font-bold mb-4">Technical Specifications</h1>
        <p className="mb-8">
          Organize is a system to keep your desk tidy and photo-worthy all day long. Procrastinate your work while you meticulously arrange items into dedicated trays.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="font-semibold">Origin</h3>
            <p>Designed by Good Goods, Inc.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="font-semibold">Material</h3>
            <p>Solid walnut base with rare earth magnets and polycarbonate add-ons.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="font-semibold">Finish</h3>
            <p>Hand sanded and finished with natural oil.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="font-semibold">Includes</h3>
            <p>Pen Tray, Phone Tray, Small Tray, Large Tray, Sticky Note Holder.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="font-semibold">Dimensions</h3>
            <p>15" x 3.75" x .75"</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="font-semibold">Considerations</h3>
            <p>Made from natural materials. Grain and color vary with each item.</p>
          </div>
        </div>

        <div className="mt-8">
          <button 
            onClick={handleNavigate} 
            className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-500 transition duration-300 shadow-lg"
          >
            Go to Project Page
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClientPage;
