
export const login = async (username, password) => {
    const response = await fetch('http://localhost:5000/users');
    const users = await response.json();
    
    const user = users.find(u => u.username === username && u.password === password);
    return user; // If found, return user, otherwise null
  };
  