import { PolylineOutlined } from '@mui/icons-material';
import InfoTable from '../InfoTable';
import { usePolicyHolderState, Address } from './PolicyHoldersProvider';

const PolicyHoldersTable = () => {
  const { policyHolders } = usePolicyHolderState();

  const firstPolicy = policyHolders[0];

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

  const rows = [
    { key: 'Name', value: firstPolicy.name },
    { key: 'Age', value: firstPolicy.age },
    { key: 'Address', value: formatAddress(firstPolicy.address) },
    { key: 'Phone Number', value: firstPolicy.phoneNumber },
    {
      key: 'Primary policyholder',
      value: firstPolicy.isPrimary ? 'True' : 'False',
    },
  ];

  return <InfoTable header="Policy Holders" rows={rows} />;
};

export default PolicyHoldersTable;
