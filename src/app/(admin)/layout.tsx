// src/app/(admin)/layout.tsx
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Header from '@/components/layout/Header';
import Sidebar from '@/components/layout/Sidebar';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Box sx={{ display: 'flex' }}>
      <Header />
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
}