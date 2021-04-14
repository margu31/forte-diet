import styled, { css } from "styled-components";

const StyledInputRadio = styled.span`
  ${({
    $fontSize,
    $width,
    $height,
    $borderColor,
    $hoverBackground,
    $hoverColor,
  }) => css`
    label {
      font-size: ${$fontSize}rem;
      width: ${$width}px;
      height: ${$height}px;
      line-height: ${$height}px;
      border-right: 1px solid ${$borderColor};

      &:hover {
        background-color: ${$hoverBackground};
        color: ${$hoverColor};
      }
    }
  `}

  input {
    display: none;
  }

  label {
    display: inline-block;
    cursor: pointer;
    text-align: center;
  }
`;

// const StyledInputRadio = styled.span`
//   ${({
//     $fontSize,
//     $width,
//     $height,
//     $borderColor,
//     $hoverBackground,
//     $hoverColor,
//   }) => css`
//     label {
//       font-size: ${$fontSize}rem;
//       width: ${$width}px;
//       height: ${$height}px;
//       line-height: ${$height}px;

//       &:hover {
//         background-color: ${$hoverBackground};
//         color: ${$hoverColor};
//       }
//     }
//   `}

//   input {
//     display: none;
//   }

//   label {
//     display: inline-block;
//     cursor: pointer;
//     text-align: center;
//     border: 1px solid red;
//     border-radius: 5px;
//     border-top-right-radius: 0;
//     border-bottom-right-radius: 0;
//   }

//   & + & {
//     label {
//       border-left: none;
//       border-top-left-radius: 0;
//       border-bottom-left-radius: 0;
//     }
//   }
// `;

export default StyledInputRadio;
