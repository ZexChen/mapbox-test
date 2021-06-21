import React , { useState } from 'react';
import { Container, IconButton, Button } from '@material-ui/core';
import TableInfo from './components/TableInfo';
import EditModal from './components/EditModal'

export default function ElectricFencePage() {
  const [open, setOpen] = useState(false);
  const [listDatas, setListDatas] = useState([])
  const [geoData, setGeoData] = useState({
    type: 'FeatureCollection',
    features: []
  })
  const [isEditStatus, setEditStatus] = useState(false) 
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Container>
      <EditModal
        open={open}
        handleOpen={handleOpen}
        handleClose={handleClose}
        setListDatas={setListDatas}
        setGeoData={setGeoData}
        geoData={geoData}
        isEditStatus={isEditStatus}
        setEditStatus={setEditStatus}
      />
      <TableInfo
        datas={listDatas}
        setListDatas={setListDatas}
        setGeoData={setGeoData}
        geoData={geoData}
        handleOpen={handleOpen}
        setEditStatus={setEditStatus}
      />
    </Container>
  )
}