import { useState } from "react";
import { useNavigate } from "react-router-dom";

const initialClientState = {
  name: "",
  legalName: "",
  addresses: "",
  primaryRep: { name: "", designation: "", email: "" },
  secondaryRep: { name: "", designation: "", email: "" },
  imageUrl: "", // Add imageUrl field
};

export default function No_clients() {
  const [people, setPeople] = useState([]);
  const [newClient, setNewClient] = useState(initialClientState);
  const [showForm, setShowForm] = useState(false);
  const [showPopup, setShowPopup] = useState(false); // State for the popup
  const navigate = useNavigate();

  const handleClick = (personId) => {
    navigate(`/client/${personId}`);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewClient((prev) => ({ ...prev, [name]: value }));
  };

  const handleRepChange = (e, type) => {
    const { name, value } = e.target;
    setNewClient((prev) => ({
      ...prev,
      [type]: { ...prev[type], [name]: value },
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewClient((prev) => ({ ...prev, imageUrl: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPerson = {
      id: people.length + 1,
      name: newClient.name,
      legalName: newClient.legalName,
      addresses: newClient.addresses,
      primaryRep: newClient.primaryRep,
      secondaryRep: newClient.secondaryRep,
      imageUrl: newClient.imageUrl, // Use uploaded image URL
      status: "Active", // Default status
    };
    setPeople((prev) => [...prev, newPerson]);
    setShowForm(false);
    setNewClient(initialClientState);
    setShowPopup(true); // Show the popup
    setTimeout(() => setShowPopup(false), 3000); // Hide the popup after 3 seconds
  };

  return (
    <div className="h-full py-2 sm:py-3 px-4 sm:px-14">
      <div className="mx-auto max-w-7xl px-8 lg:px-10">
        {/* Button to Open Form */}
        <div className="mb-4">
          <button
            onClick={() => setShowForm(true)}
            className="bg-green-500 hover:bg-green-600 text-white py-3 px-4 text-[14px] rounded-lg transition duration-300"
          >
            Add New Client
          </button>
        </div>

        {/* Form for Client Details */}
        {showForm && (
          <form
            onSubmit={handleSubmit}
            className="mb-8 p-4 bg-black rounded-lg"
          >
            <h3 className="text-lg font-bold text-white mb-4">
              Client Details
            </h3>
            <input
              type="text"
              name="legalName"
              placeholder="Company Name"
              value={newClient.legalName}
              onChange={handleChange}
              className="block w-full mb-2 p-2 bg-gray-800 text-white rounded"
              required
            />
            <input
              type="text"
              name="name"
              placeholder="Legal Name"
              value={newClient.name}
              onChange={handleChange}
              className="block w-full mb-2 p-2 bg-gray-800 text-white rounded"
              required
            />

            <input
              type="text"
              name="addresses"
              placeholder="Addresses"
              value={newClient.addresses}
              onChange={handleChange}
              className="block w-full mb-2 p-2 bg-gray-800 text-white rounded"
              required
            />
            <h4 className="font-semibold text-white">Primary Representative</h4>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={newClient.primaryRep.name}
              onChange={(e) => handleRepChange(e, "primaryRep")}
              className="block w-full mb-2 p-2 bg-gray-800 text-white rounded"
              required
            />
            <input
              type="text"
              name="designation"
              placeholder="Designation"
              value={newClient.primaryRep.designation}
              onChange={(e) => handleRepChange(e, "primaryRep")}
              className="block w-full mb-2 p-2 bg-gray-800 text-white rounded"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={newClient.primaryRep.email}
              onChange={(e) => handleRepChange(e, "primaryRep")}
              className="block w-full mb-4 p-2 bg-gray-800 text-white rounded"
              required
            />
            <h4 className="font-semibold text-white">
              Secondary Representative
            </h4>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={newClient.secondaryRep.name}
              onChange={(e) => handleRepChange(e, "secondaryRep")}
              className="block w-full mb-2 p-2 bg-gray-800 text-white rounded"
              required
            />
            <input
              type="text"
              name="designation"
              placeholder="Designation"
              value={newClient.secondaryRep.designation}
              onChange={(e) => handleRepChange(e, "secondaryRep")}
              className="block w-full mb-2 p-2 bg-gray-800 text-white rounded"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={newClient.secondaryRep.email}
              onChange={(e) => handleRepChange(e, "secondaryRep")}
              className="block w-full mb-4 p-2 bg-gray-800 text-white rounded"
              required
            />
            {/* Image Upload */}
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="block w-full mb-4 p-2 bg-gray-800 text-white rounded"
              required
            />
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded"
            >
              Create Card
            </button>
            <button
              type="button"
              onClick={() => setShowForm(false)}
              className="ml-2 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
            >
              Cancel
            </button>
          </form>
        )}

        {/* Popup Notification */}
        {showPopup && (
          <div className="fixed bottom-5 right-5 bg-green-500 text-white py-2 px-4 rounded-lg shadow-lg">
            Client created successfully!
          </div>
        )}

        {/* Grid for Clients */}
        <ul
          role="list"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-16"
        >
          {people.map((person) => (
            <li
              key={person.id}
              onClick={() => handleClick(person.id)}
              className="cursor-pointer bg-gray-800 p-3 w-[360px] h-120 rounded-lg shadow-lg border-4 border-gray-600 hover:border-green-600 hover:bg-zinc-900 transition duration-300 ease-in-out relative"
            >
              {/* Status Bar attached to the top of the card */}
              <div
                className={`absolute top-0 left-0 right-0 h-1 rounded-t-lg ${
                  person.status === "Active"
                    ? "bg-green-500"
                    : person.status === "Pending"
                    ? "bg-yellow-500"
                    : "bg-red-500"
                }`}
              ></div>

              <div className="flex justify-between items-center pb-4 pt-6">
                <img
                  alt={person.name}
                  src={person.imageUrl || "defaultImage.png"} // Fallback to default image if none uploaded
                  className="h-[110px] w-[110px] rounded-full"
                />
                <div>
                  <h3 className="text-lg font-bold text-green-400">
                    {person.legalName} {/* Display company name */}
                  </h3>
                  <p className="text-[12px] text-gray-300">
                    {person.addresses}
                  </p>{" "}
                  {/* Display address */}
                </div>
              </div>

              <div className="flex justify-end pt-5">
                <button className="bg-green-500 hover:bg-green-600 text-white py-3 px-4 text-[14px] rounded-lg transition duration-300">
                  Go To Project
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
