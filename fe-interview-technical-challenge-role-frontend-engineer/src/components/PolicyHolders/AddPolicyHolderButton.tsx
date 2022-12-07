import { Button } from '@mui/material';

import { usePolicyHolderDispatch } from './PolicyHoldersProvider';

const AddPolicyHolderButton = () => {
  const { createPolicyHolderMutation } = usePolicyHolderDispatch();

  return (
    <Button
      onClick={() => {
        createPolicyHolderMutation({
          name: 'Justin Fields',
          age: 23,
          address: {
            line1: '123 fake st',
            line2: 'apt 3',
            city: 'Chicago',
            state: 'IL',
            postalCode: '234234',
          },
          phoneNumber: '18005555555',
        });
      }}
    >
      Add a policyholder
    </Button>
  );
};

export default AddPolicyHolderButton;
