import { ReactNode } from 'react';

import { styled } from 'stitches.config';
import brandTheme from 'utils/themes/brand/theme';
import Box from 'components/base/Box';

interface BrandThemeProps {
  children: ReactNode;
}

const BrandContainer = styled(Box, {});

export default function BrandTheme(props: BrandThemeProps): JSX.Element {
  const { children } = props;
  return <BrandContainer className={brandTheme}>{children}</BrandContainer>;
}
