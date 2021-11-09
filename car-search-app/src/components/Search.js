import { useState } from "react";
import "./Search.css";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import axios from "axios";
import turners from "../assets/Turners-Logo.gif";
function Search() {
  const [searchString, setSearchString] = useState("");
  const [displayedFormattedSearchString, setDisplayedFormattedSearchString] =
    useState("");
  const [resultsTitle, setResultsTitle] = useState("");
  const [resultsText, setResultsText] = useState("");

  const handleSubmit = () => {
    // Remove Special Characters function
    const newMakeStringOnly = (string) => {
      let temp = string.replace(/[!,?,\-,;,%]/g, " ");
      let formattedString = temp.replace(/\s+/g, " ").trim();
      setDisplayedFormattedSearchString(
        `You searched for: "${formattedString}"`
      );
      return formattedString;
    };

    function addClass() {
      document
        .getElementById("search-results")
        .classList.add("search-results-border");
    }
    addClass();
    const formattedString = newMakeStringOnly(searchString);
    axios
      .post("http://localhost:4000/search", {
        searchString: formattedString,
      })
      .then((response) => {
        if (response.status === 200) {
          setSearchString("");
          const rawData = response.data;
          const question = rawData.result.results[0].question;
          const answer = rawData.result.results[0].text;
          setResultsTitle(question);
          setResultsText(answer);
          console.log(rawData);
        }
      })
      .catch(() => {
        setSearchString("");
        setResultsTitle("");
      });
  };

  return (
    <div className="App">
      <img className="logo" src={turners} alt="logo" />
      {/* <h1>Turners Search Page</h1> */}
      <div className="search-box">
        <TextField
          variant="outlined"
          size="small"
          type="text"
          placeholder="Search me"
          value={searchString}
          onChange={(e) => setSearchString(e.target.value)}
        />
        <div className="btn">
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </div>
      </div>
      <div className="search-results-container">
        <div id="search-results">
          <div className="search-query">{displayedFormattedSearchString}</div>
          <div className="results-title">{resultsTitle}</div>
          <div className="results-text">{resultsText}</div>
        </div>
      </div>
    </div>
  );
}

export default Search;
