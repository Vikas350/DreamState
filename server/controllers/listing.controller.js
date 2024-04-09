import Listing from "../models/listing.model.js";
import { errorHandler } from "../utils/error.js";

export const createListing = async (req, res, next) => {
  try {
    const listing = await Listing.create(req.body);
    // console.log(listing)
    return res.status(200).json(listing);
  } catch (error) {
    next(error);
  }
};

export const deleteListing = async (req, res, next) => {
  // first find the listing with same id
  const listing = await Listing.findById(req.params.id);

  // if listing not found
  if (!listing) {
    return next(errorHandler(404, "Listing not found!"));
  }

  // if user does not match
  if (req.user.id !== listing.userRef) {
    return next(errorHandler(401, "You can only delete your own listing!"));
  }

  try {
    // if everything is OK just delete the listing
    await Listing.findByIdAndDelete(req.params.id);
    res.status(200).json("Listing has been deleted!");
  } catch (error) {
    next(error);
  }
};

export const updateListing = async (req, res, next) => {
  const listing = await Listing.findById(req.params.id);

  // if listing not found
  if (!listing) {
    return next(errorHandler(404, "Listing not found!"));
  }

  // if user does not match
  if (req.user.id !== listing.userRef) {
    return next(errorHandler(401, "You can only update your own listing!"));
  }

  try {
    const updatedListing = await Listing.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(updatedListing);
  } catch (error) {
    next(error);
  }
};

export const getListing = async (req, res, next) => {
  try {
    const listing = await Listing.findById(req.params.id);

    if (!listing) {
      return next(errorHandler(404, "Listing not found!"));
    }
    
    res.status(200).json(listing);
  } catch (error) {
    next(error);
  }
};
