import { Users } from "../models/user.js";

// add items to cart
export const addToCart = async (req, res) => {
  try {
    const { id } = req.headers; // User ID from headers
    const { itemId } = req.body; // Item ID from request body

    // Find the user by ID
    let user = await Users.findById(id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Check if the item already exists in the cart
    const itemExists = user.cart.some((item) => item.toString() === itemId);

    if (!itemExists) {
      // Add the item to the cart
      user.cart.push(itemId);
      await user.save();

      return res.status(200).json({ message: "Item added to cart" });
    } else {
      return res.status(400).json({ message: "Item already in cart" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// remove items from user cart
export const removeFromCart = async (req, res) => {
  try {
    const { id } = req.headers; // User ID from headers
    const { itemId } = req.body; // Item ID from request body

    // Find the user by ID
    let user = await Users.findById(id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Check if the item exists in the cart
    const itemIndex = user.cart.findIndex((item) => item.toString() === itemId);

    if (itemIndex !== -1) {
      // Remove the item from the cart
      user.cart.splice(itemIndex, 1);
      await user.save();

      return res.status(200).json({ message: "Item removed from cart" });
    } else {
      return res.status(400).json({ message: "Item not found in cart" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//fetch user cart data
export const getCart = async (req, res) => {
  try {
    const { id } = req.headers; // User ID from headers

    // Find the user by ID and populate the cart items
    let user = await Users.findById(id).populate("cart");
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json({ cart: user.cart });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
