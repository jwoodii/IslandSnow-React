import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import logo from './IslandSnowLogo.png'
import image from './IslandSnowImg.jpg'
import { Container, Header, Menu, Dropdown, Icon } from 'semantic-ui-react';

class TopMenu extends React.Component {
  render() {
    return (
        <Menu borderless className="topmenu">
          <Container>
            <Menu.Item fitted><Icon name="facebook f"/></Menu.Item>
            <Menu.Item fitted><Icon name="twitter"/></Menu.Item>
            <Menu.Item fitted><Icon name="pinterest"/></Menu.Item>
            <Menu.Item fitted><Icon name="instagram"/></Menu.Item>
            <Menu.Item fitted position="right"><Icon name="home"/></Menu.Item>
            <Menu.Item fitted><Icon name="search"/></Menu.Item>
            <Menu.Item fitted><Icon name="user"/></Menu.Item>
            <Dropdown item text="MY CART 0" icon="shop">
              <Dropdown.Menu>
                <Dropdown.Item>My cart is currently empty.</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Container>
        </Menu>
    )
  }
}

class IslandSnowLogo extends React.Component {
  render() {
    return (
        <img class="ui centered image" src={(logo)}/>
    )
  }
}

class MiddleMenu extends React.Component {
  render() {
    return (
        <div class="ui borderless middlemenu menu">
          <div class="ui centered grid container">
            <div class="ui dropdown item">
              <div class="text">MEN</div>
              <i class="angle down icon"></i>
              <div class="menu">
                <div class="item">TANK TOPS</div>
                <div class="item">SHIRTS</div>

              </div>
            </div>

            <div class="ui dropdown item">
              <div class="text">WOMEN</div>
              <i class="angle down icon"></i>
              <div class="menu">
                <div class="item">TANK TOPS</div>
                <div class="item">SHIRTS</div>
              </div>
            </div>

            <a class="item">KIDS </a>

            <div class="ui dropdown item">
              <div class="text">BRANDS</div>
              <i class="angle down icon"></i>
              <div class="menu">
                <div class="item">My cart is currently empty</div>
              </div>
            </div>

            <a class="item">SEARCH</a>

          </div>
        </div>

    )
  }
}

class FullWidthImage extends React.Component {
  render() {
    return (
        <img class="ui fluid image" src={(image)}/>
    )
  }
}

class FooterMenu extends React.Component {
  render() {
    return (
        <div class="footer-background">
        <div class="ui three column grid container">
          <div class="column">
            NAVIGATION
            <hr/>
            <div class="ui list">
              <div class="item">About Us</div>
              <div class="item">Videos</div>
              <div class="item">Store Locations</div>
            </div>
          </div>
          <div class="column">
            MAIN MENU
            <hr/>
            <div class="ui list">
              <div class="item">Men</div>
              <div class="item">Women</div>
              <div class="item">Kids</div>
            </div>
          </div>
          <div class="column">
            CONNECT
            <hr/>
            <div class="ui list">
              <div class="item">Sign up for the Latest Updates</div>
              <div class="ui labeled input">
                <input type={"text"} placeholder={"Enter Email Address"}/>
                <div class="ui black label">
                  Join
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>

        )
    }
    }


  class IslandSnow extends React.Component {

    render() {
    return (
    <div>
    <TopMenu/>
    <IslandSnowLogo/>
    <MiddleMenu/>
    <FullWidthImage/>
    <FooterMenu/>
    </div>
    );
  }
  }

  ReactDOM.render(
    <IslandSnow/>
  , document.getElementById('root'));