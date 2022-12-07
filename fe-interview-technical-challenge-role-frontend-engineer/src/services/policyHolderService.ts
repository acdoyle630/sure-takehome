import axios from 'axios';
import { PolicyHolder } from '../components/PolicyHolders/PolicyHoldersProvider';

const baseUrl =
  'https://fe-interview-technical-challenge-api-git-main-sure.vercel.app/api';

export const getPolicyHolders = async () => {
  try {
    const res = await axios.get(`${baseUrl}/policyholders`);
    return res;
  } catch (e) {
    console.error(e);
  }
};

export const createPolicyHolder = async (policyHolder: PolicyHolder) => {
  try {
    const res = await axios.post(`${baseUrl}/policyholders`, policyHolder);
    return res;
  } catch (e) {
    console.error(e);
  }
};
