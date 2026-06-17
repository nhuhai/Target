import React from 'react';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import CombinedShape from '../CombinedShape/CombinedShape.jsx';
import './Tab.css';

export default function Tab() {
  return (
    <CombinedShape className="tab" ariaLabel="Target">
      <span className="TARGET">TARGET</span>
      <AddCircleOutlineOutlinedIcon className="Material-iconsmore" aria-hidden="true" />
    </CombinedShape>
  );
}
