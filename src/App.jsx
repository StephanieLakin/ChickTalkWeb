import React from "react";
import styles from "./style";
import {
  Navbar,
  CoopsRuns,
  Hero,
  GettingStarted,
  GettingStartedDetail,
} from "./components";

const App = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div
        className={`${styles.paddingX} ${styles.flexCenter} bg-primary fixed w-[100%] z-[5]`}
      >
        <div className={`${styles.boxWidth} `}>
          <Navbar />
        </div>
      </div>
      <div className={`bg-tertiary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <GettingStarted />
          <GettingStartedDetail />
          <CoopsRuns />

          {/*<Footer /> */}
        </div>
      </div>
    </div>
  );
};

export default App;
