import React from "react";

const App = () => {
  // Function will execute on click of button
  const onButtonClick = () => {
    // using Java Script method to get PDF file with auth headers
    fetch("SamplePDF.pdf", {
      headers: {
        auth: "some token",
      },
      method: "GET",
    }).then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);

        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "SamplePDF.pdf";
        alink.click();
      });
    });
  };
  return (
    <>
      <center>
        <h1>Click on below button to download PDF file</h1>
        <button onClick={onButtonClick}>Download PDF</button>
      </center>
    </>
  );
};

export default App;
