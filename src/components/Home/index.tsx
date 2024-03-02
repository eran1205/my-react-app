import React from 'react';
// import { connect, ConnectedProps } from 'react-redux';
import { GuestLinks } from './GuestLinks';
// import { AuthLinks } from './AuthLinks';

// const mapStateToProps = (state: AppState) => ({
//   loading: state.auth.loading,
//   isAuthenticated: state.auth.isAuthenticated,
// });
// const mapDispatchToProps = {};

// const connector = connect(mapStateToProps, mapDispatchToProps);
// interface Props extends ConnectedProps<typeof connector> {}

export const Home = () => {
  // const { loading, isAuthenticated } = props;
  //return <>{!loading && isAuthenticated ? <AuthLinks /> : <GuestLinks />}</>;
  return (
    <>
      <GuestLinks />
    </>
  );
};

// const Home = connector(_Home);
// export { Home };
