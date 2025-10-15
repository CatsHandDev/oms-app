// src/app/(admin)/products/ProductForm.tsx
'use client';
import { Box, Button, Grid, TextField } from '@mui/material';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

// 1. Zodスキーマを定義。数値項目も最初は文字列として扱う
const productSchema = z.object({
  productCode: z.string().min(1, '商品管理コードは必須です'),
  janCode: z.string(), // .optional()は不要
  name: z.string().min(1, '商品名は必須です'),
  // 文字列として受け取り、正規表現で数値形式かチェック
  price: z.string().min(1, '価格は必須です').regex(/^[0-9]+$/, '数値を入力してください'),
  stock: z.string().min(1, '在庫数は必須です').regex(/^[0-9]+$/, '整数を入力してください'),
});

// 2. フォームの入力値の型 (すべて文字列)
type ProductFormInput = z.infer<typeof productSchema>;

interface ProductFormProps {
  onClose: () => void;
}

export default function ProductForm({ onClose }: ProductFormProps) {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ProductFormInput>({
    resolver: zodResolver(productSchema),
    // 3. defaultValuesもすべて文字列で統一
    defaultValues: {
      productCode: '',
      janCode: '',
      name: '',
      price: '', // 文字列の空
      stock: '', // 文字列の空
    },
  });

  // 4. 送信処理。ここで文字列を数値に変換する
  const onSubmit: SubmitHandler<ProductFormInput> = (data) => {
    const processedData = {
      ...data,
      price: Number(data.price),
      stock: Number(data.stock),
    };
    console.log('APIに送信するデータ:', processedData);
    onClose();
  };

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
      <Grid container spacing={2}>
        {/* === 商品管理コード === */}
        <Grid sx={{ xs: 12, sm: 6 }}>
          <Controller
            name="productCode"
            control={control}
            render={({ field }) => (
              <TextField {...field} label="商品管理コード" fullWidth required error={!!errors.productCode} helperText={errors.productCode?.message} />
            )}
          />
        </Grid>
        {/* === JANコード === */}
        <Grid sx={{ xs: 12, sm: 6 }}>
          <Controller
            name="janCode"
            control={control}
            render={({ field }) => (
              <TextField {...field} label="JANコード" fullWidth error={!!errors.janCode} helperText={errors.janCode?.message} />
            )}
          />
        </Grid>
        {/* === 商品名 === */}
        <Grid sx={{ xs: 12 }}>
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <TextField {...field} label="商品名" fullWidth required error={!!errors.name} helperText={errors.name?.message} />
            )}
          />
        </Grid>
        {/* === 価格 === */}
        <Grid sx={{ xs: 12, sm: 6 }}>
          <Controller
            name="price"
            control={control}
            render={({ field }) => (
              <TextField {...field} label="価格" type="number" fullWidth required error={!!errors.price} helperText={errors.price?.message} />
            )}
          />
        </Grid>
        {/* === 在庫数 === */}
        <Grid sx={{ xs: 12, sm: 6 }}>
          <Controller
            name="stock"
            control={control}
            render={({ field }) => (
              <TextField {...field} label="在庫数" type="number" fullWidth required error={!!errors.stock} helperText={errors.stock?.message} />
            )}
          />
        </Grid>
      </Grid>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 3 }}>
        <Button onClick={onClose} sx={{ mr: 1 }}>キャンセル</Button>
        <Button type="submit" variant="contained">登録</Button>
      </Box>
    </Box>
  );
}