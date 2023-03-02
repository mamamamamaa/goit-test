import { Card } from "../Card/Card";
import { Global } from "@emotion/react";
import globalStyles from "../../global.css";
import { users } from "../../users.json";

export const App = () => {
  return (
    <>
      <Global styles={globalStyles} />
      <article>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <Card userData={user} />
            </li>
          ))}
        </ul>
      </article>
    </>
  );
};
