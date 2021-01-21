import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { makeStyles } from '@material-ui/core/styles';
import {EnvelopeIcon} from "../icons/Icons";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    fontSize:'1.2rem'
  },
}));
export default function FormDialog() {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Box my={10}>
        <Typography variant="h4" component="h1" gutterBottom align='center'>
          <Button
            size="large"
            className={classes.button}
            startIcon={<EnvelopeIcon />}
            variant="outlined"
            color="primary"
            onClick={handleClickOpen}>
            訂閱電子報
          </Button>
        </Typography>
      </Box>

      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        {/*<DialogTitle id="form-dialog-title">訂閱</DialogTitle>*/}
        <DialogContent>
          {/*<DialogContentText>*/}
          {/*  要訂閱此網站，請在此處輸入您的電子郵件地址。我們偶爾會發送更新。*/}
          {/*</DialogContentText>*/}
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="您的電子郵件信箱"
            type="email"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            取消
          </Button>
          <Button onClick={handleClose} color="primary">
            訂閱
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
