import ArtworkCardMetaContainer from 'components/cards/artwork/subcomponents/meta/ArtworkCardMetaContainer';
import ArtworkCardMetaListButton from 'components/cards/artwork/subcomponents/meta/ArtworkCardMetaListButton';
import { TopSurfaceBox } from 'components/cards/artwork/subcomponents/meta/ArtworkCardMetaBlock';

import { ArtworkMetaProps } from 'components/cards/artwork/subcomponents/meta/types';

export default function ArtworkCardMetaMinted(
  props: ArtworkMetaProps
): JSX.Element {
  const { artwork, isOwnerOnProfile } = props;

  if (isOwnerOnProfile) {
    return (
      <ArtworkCardMetaContainer>
        <TopSurfaceBox css={{ display: 'block', flex: 1 }}>
          <ArtworkCardMetaListButton artwork={artwork} />
        </TopSurfaceBox>
      </ArtworkCardMetaContainer>
    );
  }

  return null;
}
