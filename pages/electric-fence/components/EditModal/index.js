import React from 'react';
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add';
import styled from 'styled-components';
import EditLayer from './geometryEditor';
import { Divider, NoSsr, Typography } from '@material-ui/core';
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import SaveIcon from '@material-ui/icons/Save';
import CancelIcon from '@material-ui/icons/BackspaceOutlined';


const AddButton = styled(Button)`
  margin: 10px 0;
`

const ConfirmButton = styled(Button)`
  margin: 0 0 0 10px;
`

const CancelButton = styled(Button)`
`

const ModalContent = styled.div`
  height: 100px
`

const ModalTitle = styled.h2`
  position: absolute;
  top: 5px;
  z-index: 100;
  padding: 10px 20px;
  color: #fff;
  background: #049;
  -webkit-box-shadow: 5px 5px 0 #003270;
  box-shadow: 5px 5px 0 #003270;
`
const ModalFloor = styled.div`
  position: absolute;
  right: 10px;
  bottom: 20px;
`

export default function EditModal(props) {
  const { setEditStatus, geoData, setGeoData, setListDatas, handleClose, handleOpen, open, isEditStatus } = props;
  const title = isEditStatus ? 'Edit Map' : 'Create Map'

  const body = (
    <DialogContent>
      <ModalTitle>{title}</ModalTitle>
      <EditLayer geoData={geoData} setGeoData={d => setGeoData(d)}/>
      <ModalFloor>
        <Typography align="right">
          <CancelButton
            size="large"
            variant="outlined"
            color="#fff"
            onClick={handleClose}
            startIcon={<CancelIcon />}
          >
            Back
          </CancelButton>
          <ConfirmButton
            variant="contained"
            color="secondary"
            size="large"
            startIcon={<SaveIcon />}
            onClick={() => {
              setListDatas([{
                name: 'map4',
                type: 'ploygon'
              }])
              handleClose()
            }}
          >
            Save
          </ConfirmButton>
        </Typography>
      </ModalFloor>
    </DialogContent>
  );

  return (
    <div>
      <NoSsr>
        <AddButton
          variant="outlined"
          color="primary"
          startIcon={<AddIcon />}
          onClick={() => {
            setGeoData({
              type: 'FeatureCollection',
              features: []
            })
            setEditStatus(false)
            handleOpen()
          }}
        >
          Create
        </AddButton>
      </NoSsr>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        maxWidth="lg"
      >
        {body}
      </Dialog>
    </div>
  );
}
