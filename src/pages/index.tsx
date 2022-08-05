import React from 'react';
import tw from 'twin.macro';
import AppLayout from '@/layouts/AppLayout';
import { useSiteMeta } from '@/hooks';

const IndexPage = () => {
  const meta = useSiteMeta({
    title: '홈',
    url: '/',
  });

  const IndexPageStyle = tw`text-center text-[32px] font-[700] text-white bg-black-600 p-5 m-5 shadow-xl shadow-black-600/50 rounded-[10px]`;

  return (
    <>
      <AppLayout meta={meta}>
        <div css={IndexPageStyle}>메인</div>
      </AppLayout>
    </>
  );
};

export default IndexPage;
