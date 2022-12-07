import InstructionsBar from './InstructionsBar';
import { renderWithProviders, GetByText } from '../../utils/test';
import { fireEvent } from '@testing-library/react';

describe('InstructionsBar', () => {
  const mockOnClick = jest.fn();
  const defaultProps = {
    onClick: mockOnClick,
  };

  let getByText: GetByText;

  beforeEach(() => {
    ({ getByText } = renderWithProviders(
      <InstructionsBar {...defaultProps} />
    ));
  });

  it('should render a "View challenges" button', () => {
    expect(getByText('View challenges')).toBeInTheDocument();
  });

  describe('when the button is clicked', () => {
    beforeEach(() => {
      fireEvent.click(getByText('View challenges'));
    });

    it('should call the onClick prop', () => {
      expect(mockOnClick).toBeCalled();
    });
  });
});
