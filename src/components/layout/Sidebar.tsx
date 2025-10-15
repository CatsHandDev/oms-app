// src/components/layout/Sidebar.tsx
'use client';
import Link from 'next/link';
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import InventoryIcon from '@mui/icons-material/Inventory';
import AssessmentIcon from '@mui/icons-material/Assessment';

const drawerWidth = 240;

const menuItems = [
  { text: 'ダッシュボード', icon: <DashboardIcon />, path: '/dashboard' },
  { text: '受注管理', icon: <ShoppingCartIcon />, path: '/orders' },
  { text: '商品管理', icon: <InventoryIcon />, path: '/products' },
  { text: '顧客管理', icon: <PeopleIcon />, path: '/customers' },
  { text: '分析', icon: <AssessmentIcon />, path: '/analytics' },
];

export default function Sidebar() {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
      }}
    >
      <Toolbar />
      <Box sx={{ overflow: 'auto' }}>
        <List>
          {menuItems.map((item) => (
            <ListItem key={item.text} disablePadding>
              <ListItemButton component={Link} href={item.path}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
}