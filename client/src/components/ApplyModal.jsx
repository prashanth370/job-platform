import { useState } from 'react';
import api from '../api';

export default function ApplyModal({ jobId, onClose }) {
  const [proposal, setProposal] = useState('');
  const [bid, setBid] = useState('');

  const handleApply = async () => {
    await api.post(`/jobs/${jobId}/apply`, { proposal, bid });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg w-96">
        <h3 className="text-xl font-bold mb-4">Apply for Job</h3>
        <textarea
          className="w-full p-2 border rounded mb-4"
          placeholder="Your proposal..."
          value={proposal}
          onChange={(e) => setProposal(e.target.value)}
        />
        <input
          type="number"
          className="w-full p-2 border rounded mb-4"
          placeholder="Your bid amount"
          value={bid}
          onChange={(e) => setBid(e.target.value)}
        />
        <div className="flex justify-end gap-2">
          <button onClick={onClose} className="px-4 py-2 text-gray-500">
            Cancel
          </button>
          <button 
            onClick={handleApply}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          >
            Submit Application
          </button>
        </div>
      </div>
    </div>
  );
}