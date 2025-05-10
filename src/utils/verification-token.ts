import { randomBytes } from 'crypto';

const generateVerificationToken = () => {
  return randomBytes(32).toString('hex');
};

export default generateVerificationToken;
