import { Card } from "./components/card/Card";
import "./App.css";

function App() {
  return (
    <>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          marginTop: "20px",
          backgroundImage:
            "url(https://tailwindcss.com/_next/static/media/1.9a971f31.jpg)",
          backgroundSize: "138.125rem 100%",
          height: "31.1875rem",
        }}
      >
        <Card>
          <p>Spring boot on java</p>
        </Card>
      </div>
    </>
  );
}

export default App;
