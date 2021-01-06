import React, {useState} from "react";


export default function UploadForm() {

  const [file, setFile] = useState(null)
  const [error, setError] = useState(''); 

  const types = ["image/png", "image/jpeg"]


  const handleChange = (e) => {
      let selected = e.target.files[0];
      if(selected && types.includes(selected.type)) {
          setFile(selected);
      } else {
          setError("Image uploaded failed, users can only upload png or jpeg files")
      }
  }

  return (
    <form>
      <input type="file" onChange={handleChange} />
    </form>
  );
}
