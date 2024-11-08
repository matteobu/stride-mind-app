import React from 'react';
import './Header.css';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

const Header: React.FC = () => {
  const runner = useSelector((state: RootState) => state.runner.runnerInstance);

  return (
    <header className="header">
      <img
        src="/strideMindLinearLogo.JPG"
        alt="Stride Mind Logo"
        className="header-logo"
      />
      <div className="header-user-info">
        {runner && (
          <>
            <img
              src={runner.profile_medium}
              alt={`${runner.firstname}'s profile`}
              className="runner-profile-picture"
            />
            <h1 className="runner-info">{runner.firstname}</h1>
            <p className="runner-stat">{runner?.city}</p>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
