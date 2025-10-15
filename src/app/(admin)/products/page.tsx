// src/app/(admin)/products/page.tsx
'use client';
import { Box, Button, Typography } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import AddIcon from '@mui/icons-material/Add';
import { Product } from '@/types';

// APIから取得するダミーデータ
const dummyProducts: Product[] = [
  { id: '1', productCode: 'ITEM-001', janCode: '490000000001', name: '商品A', price: 1000, stock: 100, createdAt: new Date() },
  { id: '2', productCode: 'ITEM-002', janCode: '490000000002', name: '商品Bセット', price: 3500, stock: 50, createdAt: new Date() },
  { id: '3', productCode: 'ITEM-003', name: '商品C', price: 500, stock: 20, createdAt: new Date() },
  { id: '4', productCode: 'ITEM-004', janCode: '490000000004', name: '商品D', price: 8000, stock: 0, createdAt: new Date() },
];

const columns: GridColDef[] = [
  { field: 'productCode', headerName: '商品管理コード', width: 150 },
  { field: 'name', headerName: '商品名', width: 300 },
  { field: 'price', headerName: '価格', type: 'number', width: 130,
    valueFormatter: (value: number) => `${value.toLocaleString()}円`,
  },
  { field: 'stock', headerName: '在庫数', type: 'number', width: 130 },
  { field: 'janCode', headerName: 'JANコード', width: 150 },
  {
    field: 'createdAt',
    headerName: '登録日',
    type: 'date',
    width: 180,
    valueGetter: (value) => new Date(value),
  },
];

export default function ProductsPage() {
  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <Typography variant="h5">商品管理</Typography>
        <Button variant="contained" startIcon={<AddIcon />}>
          新規商品登録
        </Button>
      </Box>
      <Box sx={{ height: 600, width: '100%' }}>
        <DataGrid
          rows={dummyProducts}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { pageSize: 10, page: 0 },
            },
          }}
          pageSizeOptions={[5, 10, 25]}
          checkboxSelection
        />
      </Box>
    </Box>
  );
}