import React, { useState } from 'react';
import { getSearchMenus } from '../../redux/modules/board';
import {
  StyledWelcomeWrapper,
  WelcomeContent,
  SearchSection,
  SearchInputForm,
  SerachBar,
  SearchLabel,
  SearchInput,
  SearchBtn
} from './Welcome.styled';
import Dropdown from '../Dropdown/Dropdown';
import { useDispatch } from 'react-redux';

export default function Welcome() {
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();

  const handleChange = e => {
    setSearch(e.target.value);
  };

  const handleSearch = e => {
    e.preventDefault();

    dispatch(getSearchMenus(search, 25)());
  };
  return (
    <StyledWelcomeWrapper>
      <WelcomeContent />
      <SearchSection>
        <SearchInputForm legend='식단 검색'>
          <fieldset>
            <SerachBar>
              <SearchLabel>식단 검색: </SearchLabel>
              <SearchInput placeholder='브로콜리, 카레 ...' onChange={handleChange} />
              <Dropdown selects={['제라드', '효리즈만']} />
              <SearchBtn onClick={handleSearch}>Go!</SearchBtn>
            </SerachBar>
          </fieldset>
        </SearchInputForm>
      </SearchSection>
    </StyledWelcomeWrapper>
  );
}
