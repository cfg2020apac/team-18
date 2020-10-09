import React, { useCallback, useMemo, useState } from "react";
import { Avatar, Box, Button, Card, Container, List, ListItem, ListItemAvatar, ListItemText, Snackbar } from "@material-ui/core";
import Alert from '@material-ui/lab/Alert';
import FolderIcon from '@material-ui/icons/Folder';
import { useDropzone } from "react-dropzone";

import {
  createStyles,
  makeStyles,
  Theme,
  useTheme,
} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) =>
  createStyles({
    card: {
      margin: 50,
    },
    title: {
      marginLeft: 50,
      marginRight: 50,
      marginTop: 50,
      textAlign: "left",
      // color: "#f44336",
      fontWeight: "bold",
      fontSize: 50,
    },
    subtitle: {
      marginTop: 10,
      marginLeft: 50,
      marginRight: 50,
      textAlign: "left",
      fontSize: 16,
    },
    button: {
      borderRadius: 30,
    }
  })
);

const baseStyle = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '20px',
  borderWidth: 2,
  borderRadius: 2,
  borderColor: 'black',
  borderStyle: 'dashed',
  backgroundColor: '#fafafa',
  color: 'black',
  outline: 'none',
  transition: 'border .24s ease-in-out',
  // height: 400,
};

const activeStyle = {
  borderColor: '#2196f3'
};

const acceptStyle = {
  borderColor: '#00e676'
};

const rejectStyle = {
  borderColor: '#ff1744'
};


export const AddDataPage = () => {
  const [open, setOpen] = useState(false);
  const [files, setFiles] = useState([]);
  const onDrop = useCallback(acceptedFiles => {
    setFiles(acceptedFiles);
  }, [])

  const {
    acceptedFiles,
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject
  } = useDropzone({ onDrop });
  const classes = useStyles();

  const style = useMemo(() => ({
    ...baseStyle,
    ...(isDragActive ? activeStyle : {}),
    ...(isDragAccept ? acceptStyle : {}),
    ...(isDragReject ? rejectStyle : {})
  }), [
    isDragActive,
    isDragReject,
    isDragAccept
  ]);

  const handleUploadFiles = () => {
    setOpen(true);
    setFiles([]);
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <Box>
      <Container className={classes.title}>
        Import Data
      </Container>
      <Container className={classes.subtitle}>
        *Accepted files: csv, xlsx
      </Container>
      <Card className={classes.card}>
        <div className="container">
          <div {...getRootProps({style})}>
            <input {...getInputProps()} />
            <p>Drag 'n' drop some files here, or click to select files</p>
          </div>
        </div>
      </Card>
      {files.length !== 0 &&
      <>
        <Card className={classes.card}>
          <List>
            {files.map((file) => (
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <FolderIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={file.path}
                  secondary={`${file.size} bytes`}
                />
              </ListItem>
            ))}
          </List>
        </Card>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={handleUploadFiles}
        >
          Upload Files
        </Button>
      </>}
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="info">
          Files uploaded successfully !
        </Alert>
      </Snackbar>
    </Box>
  );
}