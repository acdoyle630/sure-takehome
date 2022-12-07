import { Box } from '@mui/material';

import InfoTable from '../InfoTable';
import { usePolicyHolderState, Address } from './PolicyHoldersProvider';

const PolicyHoldersTable = () => {
  const { policyHolders } = usePolicyHolderState();

  const formatAddress = ({
    line1,
    line2,
    city,
    postalCode,
    state,
  }: Address): string => {
    return `${line1}, ${line2}
${city}, ${state} ${postalCode}`;
  };

  return (
    <Box>
      {policyHolders.map((holder) => (
        <InfoTable
          sx={{ mb: '10px' }}
          header={
            holder.isPrimary
              ? 'Primary Policy Holder'
              : 'Additional Policy Holder'
          }
          rows={[
            { key: 'Name', value: holder.name },
            { key: 'Age', value: holder.age },
            { key: 'Address', value: formatAddress(holder.address) },
            { key: 'Phone Number', value: holder.phoneNumber },
            {
              key: 'Primary policyholder',
              value: holder.isPrimary ? 'True' : 'False',
            },
          ]}
        />
      ))}
    </Box>
  );
};

export default PolicyHoldersTable;
