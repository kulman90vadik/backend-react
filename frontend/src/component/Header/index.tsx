import { Link } from "react-router-dom";
import Navigation from "../Navigation";
import styles from './header.module.scss';

const navigation = [
  { lebel: "Home", link: "/" },
  { lebel: "Login", link: "/login" },
];


const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className="flex-between">
          <Link className={styles.link_logo} to="/">
            <img className={styles.logo} src="" alt="Logo" />
          </Link>
          <Navigation navigation={navigation} classNameNav='header-nav'/>
        </div>
      </div>
    </header>
  );
}
 
export default Header;