import React, { useCallback } from 'react';
import tw, { css } from 'twin.macro';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '@/store';
import { ChangeWord } from '@/reducers/TestReducer';

const TestPage = () => {
  const word = useSelector((state: RootState) => state.test.word);
  const dispatch = useDispatch<AppDispatch>();

  const onClickButton = useCallback(() => {
    dispatch(ChangeWord());
  }, [ word, ]);

  // const IndexPageStyle = css`
  //   padding: 10px;
  //   background-color: #333333;
  //   color: #ffffff;
  //   margin-bottom: 10px;
  // `;

  const TestPageStyle = tw`p-5 bg-black-700 text-white text-center text-[32px]`;

  const buttonStyle = tw`block p-2.5 bg-blue-500 text-white text-center mt-2.5 mx-auto hover:bg-blue-700 text-2xl`;

  return (
    <>
      <div css={TestPageStyle}>Hello {word}!!</div>
      <button type='button' onClick={onClickButton} css={buttonStyle}>
        클릭해서 변경
      </button>
    </>
  );
};

export default TestPage;
