export default function JobCard({ job }) {
    return (
      <div className="p-4 border rounded-lg shadow-sm hover:shadow-md transition-shadow">
        <h3 className="text-xl font-semibold">{job.title}</h3>
        <p className="text-gray-600 mt-2">{job.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-blue-600">${job.budget}</span>
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Apply
          </button>
        </div>
      </div>
    );
  }