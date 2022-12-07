import { Box } from '@mui/material';

import InfoTable from '../InfoTable';
import { usePolicyHolderState, Address } from './PolicyHoldersProvider';

const PolicyHoldersTable = () => {
  const { policyHolders } = usePolicyHolderState();

  const firstPolicy = policyHolders[0];
  const secondaryPolicy = policyHolders[1];

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

  const rows =
    policyHolders.length > 0
      ? [
          { key: 'Name', value: firstPolicy.name },
          { key: 'Age', value: firstPolicy.age },
          { key: 'Address', value: formatAddress(firstPolicy.address) },
          { key: 'Phone Number', value: firstPolicy.phoneNumber },
          {
            key: 'Primary policyholder',
            value: firstPolicy.isPrimary ? 'True' : 'False',
          },
        ]
      : [];

  const secondaryRow =
    policyHolders.length > 1
      ? [
          { key: 'Name', value: secondaryPolicy.name },
          { key: 'Age', value: secondaryPolicy.age },
          { key: 'Address', value: formatAddress(secondaryPolicy.address) },
          { key: 'Phone Number', value: secondaryPolicy.phoneNumber },
          {
            key: 'Primary policyholder',
            value: secondaryPolicy.isPrimary ? 'True' : 'False',
          },
        ]
      : [];

  return (
    <Box>
      <InfoTable sx={{ mb: 2 }} header="Primary Policy Holder" rows={rows} />
      {policyHolders.length > 1 ? (
        <InfoTable header="Additional Policy Holder" rows={secondaryRow} />
      ) : null}
    </Box>
  );
};

export default PolicyHoldersTable;
