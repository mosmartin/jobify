export const register = async (req, res) => {
  res.status(200).json({ message: 'Register' });
};

export const login = async (req, res) => {
  res.status(200).json({ message: 'Login' });
};

export const updateUser = async (req, res) => {
  res.status(200).json({ message: 'Update User' });
};
