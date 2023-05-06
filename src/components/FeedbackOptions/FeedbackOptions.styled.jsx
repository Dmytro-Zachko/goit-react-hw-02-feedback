import styled from '@emotion/styled'

export const OptionList = styled.ul`
display: flex;
gap: 10px;
`
export const OptionListItem = styled.button`
 width: 60px;
 padding: 5px;
  border: none;
  border-radius: 2px;
  cursor: pointer;
  transition: transform 250ms linear;
  background-color: #fff;
  box-shadow: 2px 2px 5px 1px rgba(0, 0, 0, 0.7);

   :hover {
    transform: scale(1.05);
    background-color: blue;
    color: #fff;
  }
`