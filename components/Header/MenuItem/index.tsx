import { Link, Text, BoxProps } from '@chakra-ui/react';

interface MenuItemProps extends BoxProps {
  isLast?: boolean;
  to?: string;
}

const MenuItem = ({ children, isLast, to = '/', ...rest }: MenuItemProps) => {
  return (
    <Link href={to} _hover={{ textDecoration: 'none', fontWeight: 'bold' }}>
      <Text display="block" {...rest}>
        {children}
      </Text>
    </Link>
  );
};

export default MenuItem;
