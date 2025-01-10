import { Link } from "react-router-dom";
import Navigation from "../Navigation";
import styles from './header.module.scss';
import { useSelector } from "react-redux";
import { logout, selectIsAuth } from "../../redux/slices/auth";
import { useAppDispatch } from "../../redux/store";

const navigation = [
  { lebel: "Home", link: "/" },
  // { lebel: "Login", link: "/login" },
];


const Header = () => {
  const isAuth = useSelector(selectIsAuth);
// const d = useSelector(dataAuth);
 const dispatch = useAppDispatch();

  console.log(isAuth);
  // console.log(d);
// 
  const onClickLogout = () => {
    if(window.confirm('Вы действительно хотите выйти?')){
      dispatch(logout())
      window.localStorage.removeItem('token')
    }
  }


  return (
    <header className={styles.header}>
      <div className="container">
        <div className="flex-between">
          {/* <div>
            {isAuth}
          </div> */}
          <Link className={styles.link_logo} to="/">
            <img className={styles.logo} src="" alt="Logo" />
          </Link>
          <Navigation navigation={navigation} classNameNav='header-nav'/>


          {isAuth ?
          <>
            <button className={styles.exit} onClick={onClickLogout} type="button">
             Выйти
           </button>
          </>
           :
           <>
            <Link className={styles.login} to="./login">
              Login
            </Link>
            <Link className={styles.login} to="./registration">
              Registration
            </Link>
           </>
          }

        </div>
      </div>
    </header>
  );
}
 
export default Header;