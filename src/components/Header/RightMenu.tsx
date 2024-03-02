/* eslint-disable prettier/prettier */
import React from 'react';
import { Menu, Grid } from 'antd';
import { NavLink } from 'react-router-dom';
import { LoginOutlined } from '@ant-design/icons';
// import { logout } from 'src/components/Auth/Auth.thunks';
// import { connect, ConnectedProps } from 'react-redux';
import { PATH } from 'src/constants/paths';
// import { AuthLinks } from '../Home/AuthLinks';

const { useBreakpoint } = Grid;

// const mapStateToProps = (state: AppState) => ({
//   isAuthenticated: state.auth.isAuthenticated,
//   user: state.auth.user as IUser,
// });
// const mapDispatchToProps = {
//   logout,
// };

// const connector = connect(mapStateToProps, mapDispatchToProps);
// interface Props extends ConnectedProps<typeof connector> {}

export const RightMenu = () => {
  // const { isAuthenticated, logout, user } = props;
  const { md } = useBreakpoint();
  const guestLinks = (
    <Menu mode={md ? 'horizontal' : 'inline'}>
      <Menu.Item key="menukey-login">
        <NavLink className="navbar-item primary" to={PATH.LOGIN}>
          Sign In
        </NavLink>
      </Menu.Item>
      <Menu.Item key="menukey-signup">
        <NavLink className="navbar-item" to={PATH.REGISTER}>
          Register
        </NavLink>
      </Menu.Item>
    </Menu>
  );
  // const authLinks = (
  //   <Menu mode={md ? 'horizontal' : 'inline'}>
  //     <Menu.Item key="menukey-profile">
  //       <NavLink className="navbar-item primary" to={PATH.PROFILE}>
  //         {/* Hi <strong>{user.username}</strong> */}
  //         Login
  //       </NavLink>
  //     </Menu.Item>
  //     <Menu.Item key="menukey-profile">
  //       <NavLink className="navbar-item primary" to={PATH.PROFILE}>
  //         {/* Hi <strong>{user.username}</strong> */}
  //         Hi
  //       </NavLink>
  //     </Menu.Item>
  //     <Menu.Item key="menukey-login">
  //       <NavLink
  //         className="navbar-item primary"
  //         to={PATH.HOME}
  //         // onClick={() => logout()}
  //       >
  //         <span>
  //           <LoginOutlined />
  //           Log Out
  //         </span>
  //       </NavLink>
  //     </Menu.Item>
  //   </Menu>
  // );
  // return <>{isAuthenticated ? authLinks : guestLinks}</>;
  return <>{guestLinks}</>;
};

// const RightMenu = connector(_RightMenu);
// export { RightMenu };
