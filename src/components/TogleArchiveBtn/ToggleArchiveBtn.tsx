import React from 'react'
import Button from '../Button'
import './ToggleArchiveBtn.scss'

const ToggleArchiveHandler = (event: React.MouseEvent<HTMLElement>) => {
  event.preventDefault()
  console.log(event.target);
  console.log('ToggleArchiveHandler');
};

const ToggleArchiveBtn = () => {
  return (
    <Button name='Show archive' className='toggle-archive-btn' onClick ={ ToggleArchiveHandler } />
  )
}

export default ToggleArchiveBtn
