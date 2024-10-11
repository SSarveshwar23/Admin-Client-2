import React, { useState } from "react";
import SecurityAssessmentChecklist from "./SecurityAssessmentChecklist";

function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [projects, setProjects] = useState([]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleCreateProject = (accessMethod, projectName) => {
    const projectExists = projects.some(
      (project) => project.projectName === projectName
    );

    if (!projectExists) {
      const newProject = {
        id: Math.random().toString(36).substr(2, 9),
        accessMethod,
        projectName,
      };
      setProjects((prevProjects) => [...prevProjects, newProject]);
      closeModal();
    } else {
      alert("Project with this name already exists.");
    }
  };

  return (
    <div className="h-screen  bg-customGray  flex">
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-customGray2 shadow-lg transition-transform transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } w-[384px] z-40 m-20 rounded-2xl`} // Adjusted z-index
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-700">
          <h1 className="text-green-300	 text-2xl font-bold">Projects</h1>
          <button
            onClick={openModal}
            className="bg-green-500 hover:bg-green-400 text-black rounded-full w-20"
          >
            +
          </button>
        </div>

        {/* Project List */}
        <div className="mt-4 space-y-4 p-4 overflow-auto">
          {projects.length > 0 ? (
            projects.map((project) => (
              <div
                key={project.id}
                className="bg-gray-700 border-2 border-solid  border-green-700 p-4 rounded-lg shadow-md"
              >
                <h2 className="text-white text-base	 font-semibold">
                  {project.projectName}
                </h2>
                <p className="text-gray-400 text-xs mt-1">
                  {project.accessMethod}
                </p>
              </div>
            ))
          ) : (
            <p className="text-gray-400">No projects created yet.</p>
          )}
        </div>
      </div>

      {/* Main content */}
      <div
        className={`flex-1 p-6 transition-all duration-300 ${
          isSidebarOpen ? "ml-64" : "ml-0"
        }`} // Smooth transition for the main content
        style={{ zIndex: 10 }} // Lower z-index for main content
      >
        <button
          onClick={toggleSidebar}
          className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700"
        >
          {isSidebarOpen ? "Close Sidebar" : "Open Sidebar"}
        </button>

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 overflow-y-auto z-50">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-3xl w-full max-h-[90%] overflow-y-auto">
              <button
                className="text-white bg-red-500 px-4 py-2 rounded-md hover:bg-red-400 mb-4"
                onClick={closeModal}
              >
                Close
              </button>
              <SecurityAssessmentChecklist onCreateProject={handleCreateProject} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;




