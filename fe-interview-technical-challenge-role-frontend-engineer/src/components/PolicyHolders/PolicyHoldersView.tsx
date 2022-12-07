import PolicyHoldersTable from './PolicyHoldersTable';
import AddPolicyHolderButton from './AddPolicyHolderButton';

const PolicyHoldersView = () => (
  <>
    <PolicyHoldersTable />
    <AddPolicyHolderButton />
  </>
);

export default PolicyHoldersView;

/* TODOs
 * == API ==
 * handle getPolicyHolders error
 * handle create policy error
 *
 * == Table ==
 * extend table to include header and multiple policy holders?
 * extend policy holder view to include more than 2 policy holders?
 * form to add secondary policy holder deets
 * Address / phone number validation (formik?)
 * Responsiveness
 * Remove / disable button if 2 policy holders (assuming we only want to allow max 2 holders)
 * Edit / remove policy holder?
 * Update primary policyHolder?
 * make address line 2 optional? If so update formatAddress function to remove comma when no line 2
 * Loading indicators?
 *
 * == Provider ==
 * persist policy holders on navigation (presumably this would be handled by returning newly added policy holder from get)
 *
 * == Testing ==
 * policy holders test (jest / cypress)
 *
 */
