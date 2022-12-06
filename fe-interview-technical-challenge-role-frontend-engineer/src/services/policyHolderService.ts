import axios from 'axios';

export const getPolicyHolders = async () => {
  try {
    const res = await axios.get(
      'https://fe-interview-technical-challenge-api-git-main-sure.vercel.app/api/policyholders'
    );
    return res;
  } catch (e) {
    console.error(e);
  }
};
