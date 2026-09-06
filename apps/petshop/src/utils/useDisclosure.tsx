'use client';

import { useState } from 'react';

export const useDisclosure = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleOpenChange = (value: boolean) => setOpen(!value);

  return {
    open,
    setOpen,
    handleOpen,
    handleClose,
    handleOpenChange,
  };
};
