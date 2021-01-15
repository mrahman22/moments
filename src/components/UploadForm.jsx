import React, { useState } from "react";
import ProgressBar from "./ProgressBar";

export default function UploadForm() {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const types = ["image/png", "image/jpeg"];

  const handleChange = (e) => {
    let selected = e.target.files[0];
    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError(null);
    } else {
      setError(
        "Image uploaded failed, users can only upload png or jpeg files"
      );
      setFile(null);
    }
  };

  return (
    <form>
      <input type="file" onChange={handleChange} />
      <div className="file-output">
        {error && (
          <div className="error">
            <p>{error}</p>
          </div>
        )}
        {file && <div className="correct-file">{file.name}</div>}
        {file && <ProgressBar file={file} setFile={setFile}/>}
      </div>
    </form>
  );
}
