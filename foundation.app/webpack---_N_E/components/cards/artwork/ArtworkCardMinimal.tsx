/** @jsxRuntime classic */
/* @jsx jsx */
import React from 'react';
import { jsx, Box } from 'theme-ui';

import Account from 'types/Account';
import Artwork from 'types/Artwork';
import { pointerEventsNone } from 'types/styles';

import {
  buildArtworkCardAssetUrl,
  buildPosterUrl,
  hasVideoAssetProcessingStatus,
} from 'utils/assets';

import { getArtworkCardStyles } from './ArtworkCard';
import { ArtworkCardSkeletonMinimal } from 'components/cards/artwork/ArtworkCardSkeleton';
import ArtworkCardMedia from 'components/cards/artwork/subcomponents/ArtworkCardMedia';
import ArtworkCardTitle from './subcomponents/ArtworkCardTitle';
import ArtworkCardTitleContainer from './subcomponents/ArtworkCardTitleContainer';
import UserTagRaw from 'components/users/UserTagRaw';
import ArtworkCardOptimizing from './subcomponents/ArtworkCardOptimizing';

interface ArtworkCardMinimalProps {
  artwork: Artwork;
  creator: Account;
}

export default function ArtworkCardMinimal(
  props: ArtworkCardMinimalProps
): JSX.Element {
  const { artwork, creator } = props;

  const sx = getArtworkCardStyles();

  if (!artwork) {
    return <ArtworkCardSkeletonMinimal />;
  }

  const assetUrl = buildArtworkCardAssetUrl(artwork);
  const posterUrl = buildPosterUrl(artwork);

  const isVideoAssetPending = hasVideoAssetProcessingStatus(artwork);

  return (
    <Box sx={{ ...sx.card, pointerEvents: pointerEventsNone }}>
      <Box sx={{ position: 'relative' }}>
        <ArtworkCardOptimizing
          isVisible={isVideoAssetPending}
          sx={{ top: 'm', left: 'm' }}
        />
        <ArtworkCardMedia assetUrl={assetUrl} posterUrl={posterUrl} />
      </Box>
      <ArtworkCardTitleContainer>
        <ArtworkCardTitle>{artwork.name}</ArtworkCardTitle>
        <UserTagRaw user={creator} sx={{ marginTop: 'auto' }} />
      </ArtworkCardTitleContainer>
    </Box>
  );
}
