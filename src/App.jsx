import { Footer } from "./components/Footer/Footer";
import {Header} from "./components/Header/Header";
import { Main } from "./components/Main/Main";

import styles from "./App.module.css";
 
 function App() {
  return(
    <div className={styles.App}>
      <Header />
      <Main>
      <form>
        <input type="text" />
        <button>+</button>
      </form>
      {/* <TaskList/> */}
      </Main>
      <Footer autor="Beatriz" ano="2024" />
    </div>
  );
}

export {App} //quero embaixo