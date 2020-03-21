import React, { useState } from "react";
import {
  Button,
  Typography,
  TextField,
  Card,
  CardContent
} from "@material-ui/core";
import axios from "axios";
import { useMutation } from "@apollo/react-hooks";
import { ADD_DOCUMENT_MUTATION } from "../queries/queries";

const ImageConvert = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [title, setTitle] = useState(null);
  const [extractedText, setExtractedText] = useState(null);
  const [addDocument] = useMutation(ADD_DOCUMENT_MUTATION, {});

  const onChangeHandler = event => {
    event.preventDefault();
    setSelectedFile(event.target.files[0]);
  };

  const onClickHandler = event => {
    event.preventDefault();
    const data = new FormData();
    data.append("file", selectedFile);
    axios
      .post("http://localhost:5001/upload", data, {
        // receive two    parameter endpoint url ,form data
      })
      .then(res => {
        // then print response status
        console.log(res);
        setExtractedText(res.data);
      });
    return false;
  };

  const handleAdd = () => {
    try {
      //console.log(values);
      addDocument({
        variables: {
          content: extractedText,
          title: title,
          date: new Date().toISOString()
        }
      });
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div>
      <Typography>Image to Text Conversion</Typography>
      <br></br>
      <input type="file" name="file" onChange={onChangeHandler} />
      <br></br>
      <Button
        variant="contained"
        onClick={onClickHandler}
        color="secondary"
        style={{ marginTop: "16px", marginBottom: "8px" }}
      >
        Upload
      </Button>
      <Card>
        <CardContent>
          <Typography>Title</Typography>
          <TextField
            onChange={event => setTitle(event.target.value)}
            value={title}
            style={{ width: "100%" }}
          />
          <Typography style={{ marginTop: "16px" }}>Content</Typography>
          <TextField
            multiline
            rowsMax="20"
            onChange={event => setExtractedText(event.target.value)}
            value={extractedText}
            style={{ width: "100%" }}
          ></TextField>
          <Button
            variant="contained"
            onClick={handleAdd}
            color="secondary"
            style={{ marginTop: "16px", marginBottom: "8px" }}
          >
            Save
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default ImageConvert;
