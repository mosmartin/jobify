import mongoose from 'mongoose';

export const dbConn = (url) => {
  return mongoose.connect(url);
};
