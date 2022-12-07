import { Link, Box } from '@mui/material';
import { Link as RouterLink, useLocation } from 'react-router-dom';

import { colors } from '../../theme/colors';

type TNavBar = {
  links: {
    text: string;
    href: string;
    'data-testid'?: string;
  }[];
};

function NavBar({ links }: TNavBar) {
  const { pathname } = useLocation();
  return (
    <Box
      component="aside"
      sx={{
        background: '#0c2975',
        padding: '16px',
        width: '200px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Link
        component={RouterLink}
        to="/"
        sx={{ cursor: 'pointer', marginBottom: '80px', marginTop: '40px' }}
      >
        <img src="/surelogo.svg" alt="logo"></img>
      </Link>

      {links.map(({ text, href, 'data-testid': dataTestId }) => {
        const isActive = href === pathname;

        return (
          <Link
            component={RouterLink}
            key={href}
            to={href}
            color="#fff"
            underline="hover"
            aria-current={isActive && 'page'}
            sx={{
              backgroundColor: isActive ? colors.white : colors.blue,
              width: '100%',
              color: isActive ? colors.blue : colors.white,
              cursor: 'pointer',
              '&:not(:last-of-type)': {
                marginBottom: '16px',
              },
            }}
            data-testid={dataTestId}
          >
            {text}
          </Link>
        );
      })}
    </Box>
  );
}

export default NavBar;
