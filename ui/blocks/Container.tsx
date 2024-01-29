import styled, { css } from 'styled-components';
import {
  space,
  SpaceProps,
  flexbox,
  FlexboxProps,
  fontSize,
  color,
  FontSizeProps,
  ColorProps,
} from 'styled-system';

interface IContainerProps {
  $column?: boolean;
  $gap?: number;
}

const Container = styled.div<
  IContainerProps & SpaceProps & FlexboxProps & FontSizeProps & ColorProps
>(
  ({ $column, $gap }) => css`
    display: flex;

    ${$column &&
    css`
      flex-direction: column;
    `};

    ${$gap &&
    css`
      gap: ${$gap}px;
    `}

    ${space};
    ${flexbox};
    ${fontSize};
    ${color};
  `,
);

export { Container };
