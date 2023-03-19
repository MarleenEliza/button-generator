import styles from "./Layout.module.scss";
import CodeInterface from "src/components/interface/CodeInterface/CodeInterface";
import UserInterface from "src/components/interface/UserInterface/UserInterface";

function App() {
  return (
    <main className={styles["layout"]}>
      <UserInterface></UserInterface>
      <CodeInterface> child</CodeInterface>
    </main>
  );
}

export default App;
