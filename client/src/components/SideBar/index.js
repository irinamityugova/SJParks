import React from 'react';
import jwt_decode from 'jwt-decode';
import styled from 'styled-components';
import NavButton from '../UI/Generic/NavButton';

const SideNav = styled.div`
  border-right: solid 3px ${props => props.theme.colors.primary};
  position: fixed;
  top: 0;
  background: ${props => props.theme.colors.dark};
  width: 150px;
  height: 100vh;
  color: ${props => props.theme.colors.lightbg};
  z-index: 2;
  @media screen and (max-width: ${(props) => props.theme.displays.mobileL}) {
    width: 100%;
    height: auto;
    #navbar{
      margin-top: -300px;
      padding-top: 50px;
      -webkit-transition: all 0.5s ease;
      -moz-transition: all 0.5s ease;
      transition: all 0.5s ease;
    }
  }

  .logout {
    position: absolute;
    bottom: 10px;
    width: 100%;
    @media screen and (max-width: ${props => props.theme.displays.mobileL}) {
      position: relative;
      bottom: 0px;
    }
  }

  .title {
    text-align: center;
    margin: 1rem 0;
    h1 {
      font-size: 1.8em;
      margin-bottom: 0.3rem;
    }
    @media screen and (max-width: ${(props) => props.theme.displays.mobileL}) {
      display: none;
    }
  }

  .menuIcon {
    display: none;
<<<<<<< HEAD
    text-align: center;
    margin: 10px 0;
    @media screen and (max-width: ${props => props.theme.displays.mobileL}) {
      display: block;
    }
  }
  @media screen and (max-width: ${props => props.theme.displays.mobileL}) {
    .navbar-nav {
      margin-top: -200px;
    }
  }
  @media screen and (max-width: ${props => props.theme.displays.mobileL}) {
    width: 100%;
    height: auto;
  }
=======
    height: 20px;
    width: 30px;
    padding: 40px 20px;
    position: fixed;
    right: 0px;
    justify-content: center;
    @media screen and (max-width: ${(props) => props.theme.displays.mobileL}) {
      display: block;
    }
  }
>>>>>>> Mobile topnav
`;
function openNav() {
  document.getElementById("navbar").style.marginTop = "30px";
}

<<<<<<< HEAD
export default class SideBar extends React.Component {
  state = {
    menuIcon: 'fa fa-bars'
=======
/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("navbar").style.marginTop = "-300px";
}
  export default class SideBar extends React.Component {
  state = {
    menuIcon: 'fa fa-bars',
    menu: false
>>>>>>> Mobile topnav
  };
  componentDidMount() {
    const token = localStorage.getItem('token');
    if (token) {
      this.setState({
        userID: jwt_decode(token).user._id
      });
    }
  }

  logout = () => {
    localStorage.removeItem('token');
    window.location.replace('/login');
  };

  toggleMenu = () => {
<<<<<<< HEAD
    if (this.state.menuIcon === 'fa fa-bars') {
      this.setState({ menuIcon: 'fa fa-times' });
    } else {
      this.setState({ menuIcon: 'fa fa-bars' });
=======
    if(this.state.menuIcon === 'fa fa-bars'){
      openNav()
      this.setState({
        menuIcon: 'fa fa-times',
        menu: true
      })
    } else {
      closeNav()
      this.setState({
        menuIcon: 'fa fa-bars',
        menu: false
      })
>>>>>>> Mobile topnav
    }
  };
  render() {
    return (
      <SideNav>
        <div className="title">
          <h1>SJParks</h1>
          <p>Admin</p>
        </div>
<<<<<<< HEAD
        <div className="menuIcon">
          <i className={this.state.menuIcon} onClick={this.toggleMenu} />
=======
        <div className='menuIcon' onClick={this.toggleMenu}>
          <i className={this.state.menuIcon}/>
>>>>>>> Mobile topnav
        </div>
        <div id="navbar">
          <ul>
            <li>
              <NavButton
                to={`/admin/${this.state.userID}/updates`}
                name="Updates"
                action="updatePage"
              />
            </li>
            <li>
              <NavButton
                to={`/admin/${this.state.userID}/parks`}
                name="Parks"
                action="parkPage"
              />
            </li>
            <li>
              <NavButton
                to={`/admin/${this.state.userID}/users`}
                name="Users"
                action="userPage"
              />
            </li>
          </ul>

          <div className="logout">
            <NavButton
              onClick={this.logout}
              type="submit"
              name="Logout"
              action="logoutPage"
            />
          </div>
        </div>
      </SideNav>
    );
  }
}
