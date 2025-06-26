import { 
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from '@mui/material'
import { styled } from '@mui/system';

const StyledDialog = styled(Dialog)(() => ({
  '& .MuiPaper-root': {
    backgroundColor: 'var(--bg)',
    color: 'var(--text)',
    borderRadius: 15,
    padding: '1em',
    fontFamily: 'var(--font-main)'
  },
  '& .MuiDialogTitle-root': {
    fontFamily: 'inherit',
    fontWeight: 'bold',
    fontSize: '1.5em',
  },
  '& .MuiDialogContentText-root': {
    fontFamily: 'inherit',
    color: 'inherit',
  }
}))

function DialogAction(props) {
  const { open, handleClose, title, text, actions } = props

  const actionsComponent = actions?.map((a, i)=> (
    <Button key={i} onClick={a.onClick} autoFocus={a.autoFocus ? true : false}>{a.label}</Button>
  ))

  return (
    <StyledDialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      {/* {children} */}
      <DialogTitle id="alert-dialog-title">
        {title}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {text}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        {actionsComponent}
      </DialogActions>
    </StyledDialog>
  )
}

export default DialogAction