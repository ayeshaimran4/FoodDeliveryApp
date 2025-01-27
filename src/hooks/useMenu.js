import { useState, useEffect } from 'react';
import axios from 'axios';

const useMenu = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await axios.get('http://localhost:5000/menu');
        setMenuItems(response.data);
      } catch (err) {
        setError('Failed to fetch menu items.');
      } finally {
        setLoading(false);
      }
    };
    fetchMenu();
  }, []);

  return { menuItems, loading, error };
};

export default useMenu;
