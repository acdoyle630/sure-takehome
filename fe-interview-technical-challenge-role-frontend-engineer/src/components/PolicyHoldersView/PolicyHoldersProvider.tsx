import { useQuery } from 'react-query';

import { getPolicyHolders } from '../../services/policyHolderService';

type PolicyHoldersContainerProps = {
  children: JSX.Element;
};

const PolicyHoldersContainer = ({ children }: PolicyHoldersContainerProps) => {
  const { data: policyHoldersResponse } = useQuery(
    'get_all_policy_holders',
    async () => {
      return await getPolicyHolders();
    }
  );

  const policyHolders = policyHoldersResponse?.data?.policyHolders ?? [];

  return <>{children}</>;
};

export default PolicyHoldersContainer;
