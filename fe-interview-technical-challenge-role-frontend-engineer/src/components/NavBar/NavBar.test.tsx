import NavBar from './NavBar';
import { renderWithProviders, GetByText } from '../../utils/test';

describe('NavBar', () => {
  const defaultProps = {
    links: [
      { text: 'Link1', href: '/link1' },
      { text: 'Link2', href: '/link2' },
      { text: 'Link3', href: '/link3' },
    ],
  };

  let getByText: GetByText;

  beforeEach(() => {
    ({ getByText } = renderWithProviders(<NavBar {...defaultProps} />));
  });

  it('should render NavBar links', () => {
    expect(getByText('Link1')).toBeInTheDocument();
    expect(getByText('Link2')).toBeInTheDocument();
    expect(getByText('Link3')).toBeInTheDocument();
  });

  it('should render an `href` attribute for each link', () => {
    expect(getByText('Link1')).toHaveAttribute('href');
    expect(getByText('Link2')).toHaveAttribute('href');
    expect(getByText('Link3')).toHaveAttribute('href');
  });
});
