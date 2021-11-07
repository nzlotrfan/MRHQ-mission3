import { useState } from "react";
import "./App.css";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import axios from "axios";
function App() {
  const [searchString, setSearchString] = useState("");
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [results, setResults] = useState("Search results will display here");

  const handleSubmit = () => {
    axios
      .post("http://localhost:4000/search", {
        searchString: searchString,
      })
      .then((response) => {
        if (response.status === 200) {
          setMessage("Search results loading!");
          setOpen(true);
          setSearchString("");
        }
      })
      .catch((error) => {
        setMessage(error.response.data);
        setOpen(true);
        setSearchString("");
        setResults(error.response.data);
      });
  };

  return (
    <div className="App">
      <h1>Turners Search Page</h1>

      <p>Search box!</p>
      <TextField
        variant="outlined"
        size="small"
        type="text"
        value={searchString}
        onChange={(e) => setSearchString(e.target.value)}
      />

      <div>{results}</div>

      <div style={{ marginTop: "2rem" }}>
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </div>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        autoHideDuration={3000}
        open={open}
        onClose={() => setOpen(false)}
        message={message}
      />
    </div>
  );
}

export default App;
