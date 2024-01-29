import styled, { css } from 'styled-components';
import { space, SpaceProps } from 'styled-system';
import { FC } from 'react';

import userImage from 'static/user.png';

interface IImgStyleProps {
  $rounded?: boolean;
}

const ImgStyle = styled.img<IImgStyleProps & SpaceProps>(
  ({ $rounded }) => css`
    display: flex;
    width: 40px;
    height: 40px;
    border: #252323 3px solid;

    ${$rounded &&
    css`
      border-radius: 50%;
    `}

    ${space};
  `,
);

interface IImgProps {
  rounded?: boolean;
  src?: string;
}

const Img: FC<IImgProps & SpaceProps> = ({
  rounded,
  src = userImage,
  ...other
}) => {
  return <ImgStyle $rounded={rounded} src={src} {...other} />;
};

export { Img };
