import PolicyHoldersTable from './PolicyHoldersTable';
import AddPolicyHolderButton from './AddPolicyHolderButton';

const PolicyHoldersView = () => {
  return (
    <>
      <PolicyHoldersTable />
      <AddPolicyHolderButton />
    </>
  );
};

export default PolicyHoldersView;

/* TODOs
 * handle getPolicyHolders error
 * extend table to include header and multiple policy holders?
 */
