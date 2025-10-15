// src/app/page.tsx
import { redirect } from 'next/navigation';

export default function RootPage() {
  // アプリケーションのルートにアクセスされたら、
  // 自動的に /dashboard へリダイレクトします。
  redirect('/dashboard');
}