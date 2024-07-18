// Copyright The OpenTelemetry Authors
// SPDX-License-Identifier: Apache-2.0

import Link from 'next/link';
import { useEffect } from 'react';
import * as S from './Banner.styled';

const Banner = () => {
    console.log("InsideBanner.tsx")
  useEffect(() => {
      console.log("Banner.tsx:::useEffect")
      const script = document.createElement('script');
      script.src = '../public/scripts/acn-genwiz-rum-monitor.js';
      script.async = true;
      document.body.appendChild(script);
      console.log("RUMdsfsfdfd")
       return () => {
         document.body.removeChild(script);
       };
  }, []);
 console.log("Banner.tsx:::beforereturn")


  return (
    <S.Banner>
      <S.ImageContainer>
        <S.BannerImg />
      </S.ImageContainer>
      <S.TextContainer>
        <S.Title>The best telescopes to see the world closerSK</S.Title>
        <Link href="#hot-products"><S.GoShoppingButton>Go Shopping</S.GoShoppingButton></Link>
      </S.TextContainer>
    </S.Banner>
  );
};

export default Banner;
