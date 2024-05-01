import styles from './NavBar.module.css'

const NavBar = ({ setPage }) => (
  <nav className={styles.navBar}>
    <button onClick={()=>setPage("planets")}>Planets</button> 
    <button onClick={()=>setPage("people")}>People</button>
  </nav>
);

export default NavBar
