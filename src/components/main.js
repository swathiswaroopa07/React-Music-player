import Home from "./home";
import Aside from "./aside"
import styles from "../styles/main.module.scss"
export default function Main(){
    return(
        <div className={styles.main}>
<Aside/>
<Home/>
        </div>
    )
}