import { createContext, useContext, useMemo, useState } from 'react';
import { useQuery, useMutation } from 'react-query';

import {
  getPolicyHolders,
  createPolicyHolder,
} from '../../services/policyHolderService';

type PolicyHoldersProviderProps = {
  children: JSX.Element;
};

export type Address = {
  city: string;
  line1: string;
  line2?: string;
  postalCode: string;
  state: string;
};

export type PolicyHolder = {
  age: number;
  isPrimary: boolean;
  name: string;
  phoneNumber: string;
  address: Address;
};

type PolicyHolderState = {
  policyHolders: PolicyHolder[];
};

type PolicyHolderDispatch = {
  createPolicyHolderMutation: (policyHolder: PolicyHolder) => void;
};

const PolicyHolderProviderState = createContext<PolicyHolderState | undefined>(
  undefined
);
const PolicyHolderProviderDispatch = createContext<
  PolicyHolderDispatch | undefined
>(undefined);

const PolicyHoldersProvider = ({ children }: PolicyHoldersProviderProps) => {
  const [policyHolders, setPolicyHolders] = useState<PolicyHolder[]>([]);

  useQuery(
    'get_all_policy_holders',
    async () => {
      return await getPolicyHolders();
    },
    {
      onSuccess: (response) => {
        setPolicyHolders(response?.data.policyHolders);
      },
    }
  );

  const { mutate: createPolicyHolderMutation } = useMutation({
    mutationFn: async (policyHolder: PolicyHolder) => {
      return await createPolicyHolder(policyHolder);
    },
    onSuccess: (response) => {
      setPolicyHolders(response?.data.policyHolders);
    },
  });

  const state = useMemo(
    () => ({
      policyHolders,
    }),
    [policyHolders]
  );

  const dispatch = useMemo(
    () => ({ createPolicyHolderMutation }),
    [createPolicyHolderMutation]
  );

  return (
    <PolicyHolderProviderState.Provider value={state}>
      <PolicyHolderProviderDispatch.Provider value={dispatch}>
        {children}
      </PolicyHolderProviderDispatch.Provider>
    </PolicyHolderProviderState.Provider>
  );
};

export default PolicyHoldersProvider;

export const usePolicyHolderState = (): PolicyHolderState => {
  const context = useContext(PolicyHolderProviderState);

  if (context === undefined) {
    throw new Error(
      'usePolicyHolderState must be used within a PolicyHoldersProvider'
    );
  }

  return context;
};

export const usePolicyHolderDispatch = (): PolicyHolderDispatch => {
  const context = useContext(PolicyHolderProviderDispatch);

  if (context === undefined) {
    throw new Error(
      'usePolicyHolderDispatch must be used within a PolicyHoldersProvider'
    );
  }

  return context;
};
