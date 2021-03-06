import React from 'react';
import TitleView from '../../molecules/TitleView';
import MainView from '../../molecules/MainView';
import { SentMemoData } from '../../../model/memoData';
import Button from '../../atoms/Button';
import styled from 'styled-components';

interface Props {
  data: SentMemoData;
  type: 'memos' | 'trash';
  onClickUpdate?: (e: React.MouseEvent) => void;
  onClickRemove?: (e: React.MouseEvent) => void;
  onClickRestore?: (e: React.MouseEvent) => void;
}

const MemoView = ({
  data,
  type,
  onClickUpdate,
  onClickRemove,
  onClickRestore,
}: Props) => {
  return (
    <StyledMemoView>
      <TitleView text={data.title} time={data.time} />
      <MainView text={data.main} />
      <ButtonContainer>
        {type === 'memos' ? (
          <>
            <Button color="green" onClick={onClickUpdate}>
              Update
            </Button>
            <Button color="red" onClick={onClickRemove}>
              Remove
            </Button>
          </>
        ) : (
          <>
            <Button color="green" onClick={onClickRestore}>
              Restore
            </Button>
            <Button color="red" onClick={onClickRemove}>
              Remove
            </Button>
          </>
        )}
      </ButtonContainer>
    </StyledMemoView>
  );
};

const StyledMemoView = styled.section`
  height: 100%;
`;

const ButtonContainer = styled.div`
  position: absolute;
  bottom: 30px;
  right: 10%;
  width: 200px;

  display: flex;
  justify-content: space-between;
`;

export default MemoView;
