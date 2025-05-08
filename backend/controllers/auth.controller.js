export const signup = (req, res) => {
  try {
    const { fullName, username, password, confirmPassword, gender } = req.body;
  } catch (error) {
    console.error("Error in signup:", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const login = (req, res) => {
  console.log("Login route hit");
  res.status(200).json({ message: "Login successful" });
};

export const logout = (req, res) => {
  console.log("Logout route hit");
};
