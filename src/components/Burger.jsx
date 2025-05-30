import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom'; 
import { HashLink } from 'react-router-hash-link';

class Burger extends React.Component {
  showSetting(event) {
    event.preventDefault();
  }

  render() {
    return (
      <Menu width={'300px'} styles={styles} right>
        <HashLink id="menu-top" style={styles.bmItemListLink} to="/#top">
          TOP
        </HashLink>
        <HashLink id="menu-profile" style={styles.bmItemListLink} to="/#profile">
          PROFILE
        </HashLink>
        <HashLink id="menu-journey" style={styles.bmItemListLink} to="/#journey">
        JOURNEY
        </HashLink>
        <Link id="menu-skill" style={styles.bmItemListLink} to="/skill">
        SKILL
        </Link>
        <Link id="menu-product" style={styles.bmItemListLink} to="/product">
        PRODUCT
        </Link>
        {/* <a id="menu-study" style={styles.bmItemListLink} href="/#study">
        STUDY
        </a> */}
        <a id="menu-blog" style={styles.bmItemListLink} href="https://tech.kuwaharu.com" target='_blank'>
        BLOG
        </a>
      </Menu>
    );
  }
}

export default Burger;

const styles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '36px',
    height: '30px',
    right: '36px',
    top: '36px',
  },
  bmBurgerBars: {
    background: '#FFFFFF',
  },
  bmBurgerBarsHover: {
    background: '#a90000',
  },
  bmCrossButton: {
    height: '24px',
    width: '24px',
  },
  bmCross: {
    background: '#bdc3c7',
  },
  bmMenuWrap: {
    position: 'fixed',
    height: '100%',
  },
  bmMenu: {
    background: '#1F2937',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em',
  },
  bmMorphShape: {
    fill: '#373a47',
  },
  bmItemList: {
    display: 'flex',
    flexDirection: 'column',
    padding: 0,
    fontSize: '1.5em',
  },
  bmItem: {
    display: 'inline-block',
    padding: '10px 0',
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)',
    width: '100%',
  },
  // メニューアイテムのリンクスタイルを追加
  bmItemListLink: {
    display: 'inline-block',
    borderBottom: '1px solid #747272',
    lineHeight: '50px',
    paddingLeft: '15px',
    textDecoration: 'none',
    color: '#fff', // リンクの色を指定
  },
};