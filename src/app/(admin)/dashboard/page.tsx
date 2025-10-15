// src/app/(admin)/dashboard/page.tsx
'use client';
import { Box, Typography, Paper, Grid } from '@mui/material';

export default function DashboardPage() {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        ダッシュボード
      </Typography>
      <Grid container spacing={3}>
        <Grid sx={{ xs: 12, md: 4}}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6">本日の注文件数</Typography>
            <Typography variant="h4">123件</Typography>
          </Paper>
        </Grid>
        <Grid sx={{ xs: 12, md: 4}}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6">本日の売上</Typography>
            <Typography variant="h4">¥456,789</Typography>
          </Paper>
        </Grid>
        <Grid sx={{ xs: 12, md: 4}}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6">要対応（発送待ち）</Typography>
            <Typography variant="h4">58件</Typography>
          </Paper>
        </Grid>
      </Grid>
      {/* ここにグラフや詳細なレポートを追加していく */}
    </Box>
  );
}