import User from "../models/userModel.js";

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getOneUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const createUser = async (req, res) => {
  //res.send(req.body);
  try {
    const newUser = await User.create(req.body);
    res.status(200).json(newUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedUser = await User.findByIdAndUpdate(id, req.body);
    if (!updatedUser) {
      return res
        .status(404)
        .json({ message: `Cannot find the product with ID: ${id}` });
    } else {
      const user = await User.findById(id);
      res.status(200).json(user);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedUser = await User.findByIdAndDelete(id);
    if(!deletedUser){
        return res.status(404).json({ message: `Couldn't find the user by id: ${id}`})
    }else{
        res.status(200).json(deletedUser);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
