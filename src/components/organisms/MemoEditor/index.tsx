import React, { useCallback, useState } from 'react';
import TitleText from '../../molecules/TitleText';
import MainText from '../../molecules/MainText';
import Select from '../../molecules/Select';
import useValidation from '../../../hooks/useValidation';
import { SentMemoData } from '../../../model/memoData';
import { Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { createAction, updateAction } from '../../../actions/memo';
import Button from '../../atoms/Button';
import styled from 'styled-components';

interface Props {
  exData?: SentMemoData;
}

const DEFAULT_TEXT = 'Select Kind of Memo!';

const MemoEditor = ({ exData }: Props) => {
  const [mainText, onChangeMainText, mainTextError] = useValidation({
    initialValue: exData ? exData.main : '',
    max: 500,
    min: 0,
  });
  const [titleText, onChangeTitleText, mainTitleError] = useValidation({
    initialValue: exData ? exData.title : '',
    max: 40,
    min: 1,
  });
  const [memoKind, setMemoKind] = useState<string>(
    exData ? exData.kind : DEFAULT_TEXT
  );
  const [redirect, setRedirect] = useState<boolean>(false);

  const dispatch = useDispatch();

  const onSave = useCallback(() => {
    const kind = memoKind === DEFAULT_TEXT ? '🏄🏽‍♀️Life' : memoKind;
    const seconds = new Date().getTime() / 1000; // 현재 시간 구하기
    const data = {
      title: titleText,
      main: mainText,
      kind,
      time: { seconds },
    };
    let actionData;
    if (exData) {
      // edit mode
      data['id'] = exData.id;
      actionData = updateAction(data);
    } else {
      actionData = createAction(data);
    }
    dispatch(actionData);
    setRedirect(true);
  }, [mainText, titleText, memoKind]);

  if (redirect) {
    return <Redirect to="/" />;
  }
  return (
    <StyledMemoEditor>
      <TitleText
        value={titleText}
        onChange={onChangeTitleText}
        error={mainTitleError}
      />
      <MainText
        value={mainText}
        onChange={onChangeMainText}
        error={mainTextError}
      />
      <SelectContainer>
        <Select defaultText={memoKind} setDefaultText={setMemoKind} />
      </SelectContainer>
      <Button color="#3399ff" onClick={onSave}>
        save
      </Button>
    </StyledMemoEditor>
  );
};

const StyledMemoEditor = styled.section`
  display: flex;
  flex-direction: column;
  padding: 2em 0.5em;
  position: relative;
`;

const SelectContainer = styled.div`
  position: absolute;
  top: 112px;
  right: 25px;
`;

export default MemoEditor;
