import React, { useEffect, useState, useCallback } from 'react';
import useToggle from '../../../hooks/useToggle';
import Option from '../../atoms/Option';
import { memoList } from '../../../util/memoKind';
import styled from 'styled-components';

const DEFAULT_TEXT = 'Select Kind of Memo!';

const Select = () => {
  const [defaultText, setDefaultText] = useState<string>(DEFAULT_TEXT);
  const [showList, toggleList, setShowList] = useToggle(false);

  useEffect(() => {
    // 외부 클릭시 List 안보이도록
    function onClickOutSide(this: Document, ev: MouseEvent) {
      const target = ev.target as HTMLTextAreaElement;
      const classList = target.classList;
      if (
        !classList.contains('select-option') &&
        !classList.contains('selected-text')
      ) {
        setShowList(false);
      }
    }

    document.addEventListener('mousedown', onClickOutSide);

    return () => {
      document.removeEventListener('mousedown', onClickOutSide);
    };
  }, []);

  // 옵션 클릭시
  const onClickOption = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    const target = e.target as HTMLTextAreaElement;
    setDefaultText(target.getAttribute('data-name'));
    setShowList(false);
  }, []);

  return (
    <Container>
      <DefaultText
        className={showList ? 'selected-text active' : 'selected-text'}
        onClick={toggleList}>
        {defaultText}
      </DefaultText>
      {showList && (
        <SelectOptions className="select-options" onClick={onClickOption}>
          {memoList.map((v, i) => (
            <Option key={i} dataName={v}>
              {v}
            </Option>
          ))}
        </SelectOptions>
      )}
    </Container>
  );
};

const Container = styled.article`
  cursor: pointer;
  width: 200px;
  position: relative;
  background-color: #3399ff;
  color: #fff;

  padding: 0.7em;
`;

const DefaultText = styled.div`
  ::after {
    content: '';
    position: absolute;
    right: 5px;
    top: 16px;
    border: 7px solid transparent;
    border-color: #fff transparent transparent transparent;
  }

  &.active::after {
    top: 8px;
    border-color: transparent transparent #fff transparent;
  }
`;

const SelectOptions = styled.ul`
  list-style-type: none;
  position: absolute;
  width: 100%;
  left: 0;
  padding-top: 0.5em;
`;

export default Select;
