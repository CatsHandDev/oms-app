// src/components/layout/Header.tsx
'use client';
import { AppBar, Toolbar, Typography } from '@mui/material';

const drawerWidth = 240;

export default function Header() {
  return (
    <AppBar
      position="fixed"
      sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px`, zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <Toolbar>
        <Typography variant="h6" noWrap component="div">
          OMSダッシュボード
        </Typography>
      </Toolbar>
    </AppBar>
  );
}