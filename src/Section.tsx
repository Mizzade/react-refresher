import { useContext } from "react";
import { LevelContext } from "./context/LevelContext";

export function Section({ children }) {
  const level = useContext(LevelContext);
  return (
    <section className="section">
      <LevelContext value={level + 1}>
      {children}
      </LevelContext>
    </section>
  );
}
