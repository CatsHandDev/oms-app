// src/theme/theme.ts
'use client';
import { createTheme } from '@mui/material/styles';
import { jaJP } from '@mui/material/locale';

const theme = createTheme(
  {
    palette: {
      primary: {
        main: '#1976d2', // コーポレートカラーなどに変更
      },
      secondary: {
        main: '#dc004e',
      },
    },
    typography: {
      fontFamily: [
        'Roboto',
        '"Noto Sans JP"',
        '"Helvetica"',
        'Arial',
        'sans-serif',
      ].join(','),
    },
  },
  jaJP // DataGridなどを日本語化
);

export default theme;