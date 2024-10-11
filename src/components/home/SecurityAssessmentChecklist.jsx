import React, { useState } from "react";

function SecurityAssessmentChecklist({ onCreateProject }) {
  const [formData, setFormData] = useState({
    // Application Security Assessment
    numberOfApplications: "",
    testingURLs: "",
    applicationDescription: "",
    languagesUsed: "",
    inputFields: "",
    staticPages: "",
    dynamicPages: "",
    userRoles: "",
    eCommerce: "No",
    contentManagement: "No",
    accessMethod: "",
    projectName: "",
    hosting: "",
    audience: "",
    penetrationTest: "No",
    testPurpose: "",

    // External Network / Cloud Infrastructure Security Assessment
    publicIPs: "",
    complianceRequirement: "No",

    // Internal Network Security Assessment
    deviceTypes: "",
    networkManagementSystem: "",
    physicalOrRemote: "Remote",
    officeLocation: "",
    vpnNeeded: "No",
    internalCompliance: "No",

    // Source Code Review – SAST Testing
    sourceApplicationDescription: "",
    backendFrontendDatabase: "",
    linesOfCode: "",
    sourceInputFields: "",
    sourceECommerce: "No",
    sourceAccessMethod: "",
    sourceAudience: "",
    sourceTestPurpose: "",

    // General
    companyName: "",
    address: "",
    name: "",
    designation: "",
    contactDetails: "",
    comments: "",
  });

  const [projects, setProjects] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // When an option is selected, call the handler passed from home.jsx
    if (name === "sourceAccessMethod" && value) {
      onCreateProject(value); // Pass the selected access method to home.jsx
    }
  };

  const handleSave = () => {
    if (formData.sourceAccessMethod) {
      onCreateProject(formData.sourceAccessMethod); // Call the parent function to create a project
      setFormData({ sourceAccessMethod: "" }); // Clear the form after saving
    }
  };


  
  const [accessMethod, setAccessMethod] = useState("");
  const [projectName, setProjectName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (accessMethod && projectName) {
      onCreateProject(accessMethod, projectName);
      setAccessMethod(""); // Reset after creation
      setProjectName(""); // Reset after creation
    } else {
      alert("Please provide both access method and project name.");
    }
    
  };


  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 bg-gray-900 text-gray-200 shadow-md rounded-md space-y-6"
    >
      <h2 className="text-xl font-bold mb-4">
        Application Security Assessment
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <label className="block">
          <span className="text-sm">Number of Applications</span>
          <input
            type="text"
            name="numberOfApplications"
            value={formData.numberOfApplications}
            onChange={handleChange}
            className="mt-1 block w-full p-2 bg-gray-800 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
          />
        </label>

        <label className="block">
          <span className="text-sm">Testing URLs</span>
          <input
            type="text"
            name="testingURLs"
            value={formData.testingURLs}
            onChange={handleChange}
            className="mt-1 block w-full p-2 bg-gray-800 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
          />
        </label>

        <label className="block col-span-2">
          <span className="text-sm">Application Description</span>
          <textarea
            name="applicationDescription"
            value={formData.applicationDescription}
            onChange={handleChange}
            className="mt-1 block w-full p-2 bg-gray-800 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
          />
        </label>

        <label className="block">
          <span className="text-sm">Languages Used</span>
          <input
            type="text"
            name="languagesUsed"
            value={formData.languagesUsed}
            onChange={handleChange}
            className="mt-1 block w-full p-2 bg-gray-800 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
          />
        </label>

        <label className="block">
          <span className="text-sm">Number of Input Fields</span>
          <input
            type="number"
            name="inputFields"
            value={formData.inputFields}
            onChange={handleChange}
            className="mt-1 block w-full p-2 bg-gray-800 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
          />
        </label>

        <label className="block">
          <span className="text-sm">Approximate Number of Static Pages</span>
          <input
            type="number"
            name="staticPages"
            value={formData.staticPages}
            onChange={handleChange}
            className="mt-1 block w-full p-2 bg-gray-800 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
          />
        </label>

        <label className="block">
          <span className="text-sm">Approximate Number of Dynamic Pages</span>
          <input
            type="number"
            name="dynamicPages"
            value={formData.dynamicPages}
            onChange={handleChange}
            className="mt-1 block w-full p-2 bg-gray-800 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
          />
        </label>

        <label className="block">
          <span className="text-sm">Number of User Roles</span>
          <input
            type="text"
            name="userRoles"
            value={formData.userRoles}
            onChange={handleChange}
            className="mt-1 block w-full p-2 bg-gray-800 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
          />
        </label>

        <label className="block">
          <span className="text-sm">E-commerce/Payment Gateway</span>
          <select
            name="eCommerce"
            value={formData.eCommerce}
            onChange={handleChange}
            className="mt-1 block w-full p-2 bg-gray-800 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
          >
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </label>

        <label className="block">
          <span className="text-sm">Content Management Module</span>
          <select
            name="contentManagement"
            value={formData.contentManagement}
            onChange={handleChange}
            className="mt-1 block w-full p-2 bg-gray-800 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
          >
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </label>
      </div>
      <h2 className="text-xl font-bold mb-4">
        External Network / Cloud Infrastructure Security Assessment
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <label className="block">
          <span className="text-sm">Number of Public IPs to be Assessed</span>
          <input
            type="number"
            name="publicIPs"
            value={formData.publicIPs}
            onChange={handleChange}
            className="mt-1 block w-full p-2 bg-gray-800 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
          />
        </label>

        <label className="block">
          <span className="text-sm">Compliance Requirement?</span>
          <select
            name="complianceRequirement"
            value={formData.complianceRequirement}
            onChange={handleChange}
            className="mt-1 block w-full p-2 bg-gray-800 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
          >
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </label>
      </div>
      <h2 className="text-xl font-bold mb-4">
        Internal Network Security Assessment
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <label className="block">
          <span className="text-sm">Device Types/Platforms</span>
          <input
            type="text"
            name="deviceTypes"
            value={formData.deviceTypes}
            onChange={handleChange}
            className="mt-1 block w-full p-2 bg-gray-800 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
          />
        </label>

        <label className="block">
          <span className="text-sm">Network Management System</span>
          <input
            type="text"
            name="networkManagementSystem"
            value={formData.networkManagementSystem}
            onChange={handleChange}
            className="mt-1 block w-full p-2 bg-gray-800 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
          />
        </label>

        <label className="block">
          <span className="text-sm">Physical or Remote Assessment</span>
          <select
            name="physicalOrRemote"
            value={formData.physicalOrRemote}
            onChange={handleChange}
            className="mt-1 block w-full p-2 bg-gray-800 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
          >
            <option value="Physical">Physical</option>
            <option value="Remote">Remote</option>
          </select>
        </label>

        <label className="block">
          <span className="text-sm">Office Location (if Physical)</span>
          <input
            type="text"
            name="officeLocation"
            value={formData.officeLocation}
            onChange={handleChange}
            className="mt-1 block w-full p-2 bg-gray-800 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
          />
        </label>

        <label className="block">
          <span className="text-sm">VPN Needed?</span>
          <select
            name="vpnNeeded"
            value={formData.vpnNeeded}
            onChange={handleChange}
            className="mt-1 block w-full p-2 bg-gray-800 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
          >
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </label>

        <label className="block">
          <span className="text-sm">Internal Compliance Required?</span>
          <select
            name="internalCompliance"
            value={formData.internalCompliance}
            onChange={handleChange}
            className="mt-1 block w-full p-2 bg-gray-800 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
          >
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </label>
      </div>
      <h2 className="text-xl font-bold mb-4">
        Source Code Review – SAST Testing
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <label className="block">
          <span className="text-sm">Source Application Description</span>
          <textarea
            name="sourceApplicationDescription"
            value={formData.sourceApplicationDescription}
            onChange={handleChange}
            className="mt-1 block w-full p-2 bg-gray-800 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
          />
        </label>

        <label className="block">
          <span className="text-sm">
            Backend/Frontend/Database Technologies
          </span>
          <input
            type="text"
            name="backendFrontendDatabase"
            value={formData.backendFrontendDatabase}
            onChange={handleChange}
            className="mt-1 block w-full p-2 bg-gray-800 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
          />
        </label>

        <label className="block">
          <span className="text-sm">Lines of Code (Approx)</span>
          <input
            type="number"
            name="linesOfCode"
            value={formData.linesOfCode}
            onChange={handleChange}
            className="mt-1 block w-full p-2 bg-gray-800 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
          />
        </label>

        <label className="block">
          <span className="text-sm">Number of Input Fields</span>
          <input
            type="number"
            name="sourceInputFields"
            value={formData.sourceInputFields}
            onChange={handleChange}
            className="mt-1 block w-full p-2 bg-gray-800 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
          />
        </label>

        <label className="block">
          <span className="text-sm">E-commerce/Payment Gateway?</span>
          <select
            name="sourceECommerce"
            value={formData.sourceECommerce}
            onChange={handleChange}
            className="mt-1 block w-full p-2 bg-gray-800 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
          >
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </label>

        <label className="block">
          <span className="text-sm">Access Method</span>
          <select
            name="sourceAccessMethod"
            id="accessMethod"
        value={accessMethod}
        onChange={(e) => setAccessMethod(e.target.value)}
            className="mt-1 block w-full p-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            required >
            <option value="" disabled>
              Select Access Method
            </option>
            <option value="Web Application">Web Application</option>
            <option value="Mobile Application">Mobile Application</option>
            <option value="NET">NET</option>
            <option value="CAMP">CAMP</option>
          </select>
        </label>
        <label className="block">
          <span className="text-sm">Audience for Source Code</span>
          <input
            type="text"
            name="sourceAudience"
            value={formData.sourceAudience}
            onChange={handleChange}
            className="mt-1 block w-full p-2 bg-gray-800 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
          />
        </label>
        <label className="block">
          <span className="text-sm">Project Name</span>
          <input
            type="text"
            name="projectName"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            className="mt-1 block w-full p-2 bg-gray-800 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
          required/>
        </label>

        <label className="block">
          <span className="text-sm">Purpose of Source Code Review</span>
          <textarea
            name="sourceTestPurpose"
            value={formData.sourceTestPurpose}
            onChange={handleChange}
            className="mt-1 block w-full p-2 bg-gray-800 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
          />
        </label>
      </div>
      <h2 className="text-xl font-bold mb-4">General</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <label className="block">
          <span className="text-sm">Company Name</span>
          <input
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            className="mt-1 block w-full p-2 bg-gray-800 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            required
          />
        </label>

        <label className="block">
          <span className="text-sm">Address</span>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="mt-1 block w-full p-2 bg-gray-800 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
          />
        </label>

        <label className="block">
          <span className="text-sm">Your Name</span>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 block w-full p-2 bg-gray-800 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
          />
        </label>

        <label className="block">
          <span className="text-sm">Designation</span>
          <input
            type="text"
            name="designation"
            value={formData.designation}
            onChange={handleChange}
            className="mt-1 block w-full p-2 bg-gray-800 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
          />
        </label>

        <label className="block">
          <span className="text-sm">Contact Details</span>
          <input
            type="text"
            name="contactDetails"
            value={formData.contactDetails}
            onChange={handleChange}
            className="mt-1 block w-full p-2 bg-gray-800 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
          />
        </label>

        <label className="block col-span-2">
          <span className="text-sm">Comments</span>
          <textarea
            name="comments"
            value={formData.comments}
            onChange={handleChange}
            className="mt-1 block w-full p-2 bg-gray-800 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
          />
        </label>
      </div>
      {/* Submit Button */}
      <div className="flex justify-end space-x-4 mt-4">
        {/* Save Button */}
        <button
          type="submit" // It's important to use `type="button"` to prevent default form submission
          onClick={handleSave}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md"
        >
          Save
        </button>

        {/* Cancel Button */}
        <button
          type="cancel"
          className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}

export default SecurityAssessmentChecklist;
