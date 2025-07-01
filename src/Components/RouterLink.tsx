import { NavLink, NavLinkProps } from 'react-router-dom';
import useTheme from '../hooks/useTheme';
import styled from 'styled-components';

const ActiveLinkStyled = styled(NavLink)`
  &.active {
    position: relative;
    &:before {
      content: '';
      position: absolute;
      width: 22px;
      height: 3px;
      background: ${({ theme }) => theme.colors.primary};
      bottom: -21px;
      left: calc(50% - 11px);
    }
  }
`;

export default function RouterLink(props: NavLinkProps) {
  const { theme } = useTheme();
  const normal = {
    color: theme.text1
  };
  const active = {
    color: theme.primary
  };
  return (
    <ActiveLinkStyled {...props} className={'hover:!text-primaryHover'} style={({ isActive }) => (isActive ? active : normal)}>
      <span className="">{props.children}</span>
    </ActiveLinkStyled>
  );
}
