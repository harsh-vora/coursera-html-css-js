/* eslint-disable max-lines */
/** @jsxRuntime classic */
/* @jsx jsx */
import React from 'react';
import { jsx, Grid, Box, Text } from 'theme-ui';
import ReactMarkdown from 'react-markdown';

import { notEmptyOrNil } from 'utils/helpers';

import ArtworkAuthenticity from './ArtworkAuthenticity';
import ArtworkSplits from './ArtworkSplits';

import Artwork from 'types/Artwork';
import { listStylePositionInside, whiteSpaceNormal } from 'types/styles';
import { PercentSplitWithUsers } from 'types/Split';

interface ArtworkMetaProps {
  description: string;
  artwork: Artwork;
  percentSplits: PercentSplitWithUsers;
  creatorPublicKey: string;
}

export default function ArtworkMeta(props: ArtworkMetaProps): JSX.Element {
  const { description, artwork, percentSplits, creatorPublicKey } = props;
  const sx = artworkContentStyles();

  const hasDescription = notEmptyOrNil(description);

  return (
    <Grid gap={['l', null, 'xl']}>
      {hasDescription && (
        <Box>
          <Text variant="h.body" sx={{ marginBottom: 'xs' }}>
            Description
          </Text>
          <Text variant="body.body" sx={sx.text}>
            <ReactMarkdown plugins={[require('remark-breaks')]}>
              {description}
            </ReactMarkdown>
          </Text>
        </Box>
      )}
      <Box>
        <Text variant="h.body" sx={{ marginBottom: 'xs' }}>
          Edition of
        </Text>
        <Text variant="h.l" sx={sx.text}>
          1
        </Text>
      </Box>

      {percentSplits && (
        <ArtworkSplits
          percentSplits={percentSplits}
          creatorPublicKey={creatorPublicKey}
        />
      )}

      <Box>
        <ArtworkAuthenticity artwork={artwork} />
      </Box>
    </Grid>
  );
}

const artworkContentStyles = () => ({
  text: {
    maxWidth: '27rem',
    '& > p:not(:last-of-type)': {
      marginBottom: 's',
    },
    '& > ol': {
      listStylePosition: listStylePositionInside,
    },
    '& pre': {
      fontFamily: 'body',
      whiteSpace: whiteSpaceNormal,
    },
    '& code': {
      fontFamily: 'body',
      whiteSpace: whiteSpaceNormal,
    },
  },
});
