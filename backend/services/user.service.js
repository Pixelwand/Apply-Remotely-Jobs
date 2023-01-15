export const findAndUpdateUser = async (
    query,
    update,
    options
  ) => {
    return await userModel.findOneAndUpdate(query, update, options);
  };
  