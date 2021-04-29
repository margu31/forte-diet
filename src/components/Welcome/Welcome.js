import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getSearchMenus } from 'redux/modules/board';
import {
  StyledWelcomeWrapper,
  WelcomeHeading,
  WelcomeContent,
  SearchSection,
  SearchInputForm,
  SerachBar,
  SearchLabel,
  SearchInput,
  SearchBtn,
  SearchHeading
} from './Welcome.styled';
import { Dropdown } from 'components';

export default function Welcome({ setBoardToSearch }) {
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();

  const handleChange = e => {
    setSearch(e.target.value);
  };

  const handleSearch = e => {
    e.preventDefault();

    setBoardToSearch();
    dispatch(getSearchMenus(25)(search));
  };
  return (
    <StyledWelcomeWrapper>
      <WelcomeHeading>우연히, 식단 페이지 소개 및 식단 검색</WelcomeHeading>
      <WelcomeContent />
      <SearchSection>
        <SearchHeading>식단 검색</SearchHeading>
        <SearchInputForm legend='식단 검색'>
          <fieldset>
            <SerachBar>
              <SearchLabel>식단 검색: </SearchLabel>
              <SearchInput placeholder='브로콜리, 카레 ...' onChange={handleChange} />
              <Dropdown selects={['인기', '최근']} />
              <SearchBtn onClick={handleSearch}>Go!</SearchBtn>
            </SerachBar>
          </fieldset>
        </SearchInputForm>
      </SearchSection>
    </StyledWelcomeWrapper>
  );
}
