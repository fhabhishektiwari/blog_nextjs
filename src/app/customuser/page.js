import custom from "../custom.module.css";
import outside from "../../styles/outside.module.css";
export default function Customuser() {
  return (
    <div>
      <h1 className={custom.main}>Heading 1 custom User Page</h1>
      <h2 className={outside.main}>Heading 1 custom User Page</h2>
      <p className="main">This is paragraphhhhhhhhhhhhhh.</p>
    </div>
  );
}
