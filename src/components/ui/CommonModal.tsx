'use client';
import { Modal, Paper, Typography } from '@mui/material';

// モーダルの中央表示用のスタイル
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

interface CommonModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export default function CommonModal({ open, onClose, title, children }: CommonModalProps) {
  return (
    <Modal open={open} onClose={onClose}>
      <Paper sx={style}>
        <Typography variant="h6" component="h2" sx={{ mb: 2 }}>
          {title}
        </Typography>
        {children}
      </Paper>
    </Modal>
  );
}