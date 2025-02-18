import { useEffect, useState } from 'react';
import api from '../api';

export default function Profile() {
  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    bio: '',
    skills: '',
    experience: ''
  });

  useEffect(() => {
    api.get('/users/me').then(res => {
      setUser(res.data);
      setFormData({
        name: res.data.name,
        bio: res.data.bio || '',
        skills: (res.data.skills || []).join(', '),
        experience: res.data.experience || ''
      });
    });
  }, []);

  const handleUpdate = async (e) => {
    e.preventDefault();
    const updated = await api.put('/users/me', {
      ...formData,
      skills: formData.skills.split(',').map(s => s.trim())
    });
    setUser(updated.data);
  };

  return (
    <div className="container mx-auto p-4 max-w-2xl">
      <h1 className="text-3xl font-bold mb-6">Your Profile</h1>
      <form onSubmit={handleUpdate} className="space-y-4">
        <input
          className="w-full p-2 border rounded"
          placeholder="Full Name"
          value={formData.name}
          onChange={(e) => setFormData({...formData, name: e.target.value})}
        />
        <textarea
          className="w-full p-2 border rounded"
          placeholder="Bio"
          value={formData.bio}
          onChange={(e) => setFormData({...formData, bio: e.target.value})}
        />
        <input
          className="w-full p-2 border rounded"
          placeholder="Skills (comma separated)"
          value={formData.skills}
          onChange={(e) => setFormData({...formData, skills: e.target.value})}
        />
        <textarea
          className="w-full p-2 border rounded"
          placeholder="Experience"
          value={formData.experience}
          onChange={(e) => setFormData({...formData, experience: e.target.value})}
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Update Profile
        </button>
      </form>
    </div>
  );
}