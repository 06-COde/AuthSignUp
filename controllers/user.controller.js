import User from "../module/schema.js";

export const getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password"); // exclude password

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({
      message: "User profile fetched successfully ",
      user,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error: " + error.message });
  }
};
