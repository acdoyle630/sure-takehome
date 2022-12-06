import { createContext, useContext, useMemo, useState } from 'react';
import { useQuery } from 'react-query';

import { getPolicyHolders } from '../../services/policyHolderService';

type PolicyHoldersContainerProps = {
  children: JSX.Element;
};

export type Address = {
  city: string;
  line1: string;
  line2: string;
  postalCode: string;
  state: string;
};

type PolicyHolders = {
  age: number;
  isPrimary: boolean;
  name: string;
  phoneNumber: string;
  address: Address;
};

type PolicyHolderState = {
  policyHolders: PolicyHolders[];
};

const PolicyHolderProviderState = createContext<PolicyHolderState | undefined>(
  undefined
);
const PolicyHolderProviderDispatch = createContext<any | undefined>(undefined);

const PolicyHoldersContainer = ({ children }: PolicyHoldersContainerProps) => {
  const { data: policyHoldersResponse } = useQuery(
    'get_all_policy_holders',
    async () => {
      return await getPolicyHolders();
    }
  );

  const policyHolders = policyHoldersResponse?.data?.policyHolders ?? [];

  const state = useMemo(
    () => ({
      policyHolders,
    }),
    [policyHolders]
  );

  return (
    <PolicyHolderProviderState.Provider value={state}>
      <PolicyHolderProviderDispatch.Provider value={{}}>
        {children}
      </PolicyHolderProviderDispatch.Provider>
    </PolicyHolderProviderState.Provider>
  );
};

export default PolicyHoldersContainer;

export const usePolicyHolderState = (): PolicyHolderState => {
  const context = useContext(PolicyHolderProviderState);

  if (context === undefined) {
    throw new Error('usePolicyHolderState');
  }

  return context;
};
