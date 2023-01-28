"use client";
import { Inter } from '@next/font/google'
import { Features } from './component/Features/page';
import Header from './component/Header/page';
import Pricing from './component/Pricing/page';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Header/>
    <Pricing/>
    <Features/>
    </>
  )
}
