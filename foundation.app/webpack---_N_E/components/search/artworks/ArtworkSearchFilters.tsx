import { NextRouter, useRouter } from 'next/router';
import qs from 'qs';

import Box from 'components/base/Box';
import Grid from 'components/base/Grid';
import Text from 'components/base/Text';

import { AlgoliaArtworkAvailability } from 'types/Algolia';

import { styled } from 'stitches.config';

import GroupedRefinementFilters from '../algolia/GroupedRefinementFilters';
import RefinementFilters from 'components/search/algolia/RefinementFilters';
import AlogilaRangeInput from 'components/forms/fields/algolia/AlgoliaRangeInput';

const FilterSection = styled(Grid, {
  borderBottom: 'solid 1px $black10',
  paddingBottom: '$7',
  gap: '$7',
});

const FilterHeading = styled(Text, {
  fontSize: '$2',
  fontWeight: 600,
  fontFamily: '$body',
});

function searchParams(router: NextRouter) {
  const searchIndex = router.asPath.indexOf('?');
  // If url has no search param default to empty state
  if (searchIndex === -1) {
    return {};
  }
  const search = router.asPath.substring(searchIndex + 1);
  const searchParams = qs.parse(search);
  return searchParams;
}

const getMarketLabel = (isPrimary: string): string =>
  isPrimary === 'true' ? 'Primary' : 'Secondary';

export default function ArtworkSearchFilters(): JSX.Element {
  const router = useRouter();
  const hasPriceRangeFromUrl = Boolean(
    searchParams(router).range?.['auction.currentPrice']
  );

  return (
    <Box>
      <Grid css={{ gap: '$7' }}>
        <FilterSection>
          <FilterHeading>Price range</FilterHeading>
          <AlogilaRangeInput
            attribute="auction.currentPrice"
            hasSearchValue={hasPriceRangeFromUrl}
          />
        </FilterSection>

        <FilterSection>
          <GroupedRefinementFilters
            attribute="availability"
            title="Availability"
            defaultRefinement={[
              AlgoliaArtworkAvailability.RESERVE_NOT_MET,
              AlgoliaArtworkAvailability.LIVE_AUCTION,
            ]}
            groups={[
              {
                title: 'Available',
                filters: [
                  AlgoliaArtworkAvailability.RESERVE_NOT_MET,
                  AlgoliaArtworkAvailability.LIVE_AUCTION,
                ],
                filtersVisible: true,
              },
              {
                title: 'Sold',
                filters: [AlgoliaArtworkAvailability.SOLD],
                filtersVisible: false,
              },
            ]}
          />
        </FilterSection>

        <FilterSection>
          <RefinementFilters
            attribute="auction.isPrimarySale"
            title="Market"
            defaultRefinement={['true', 'false']}
            transformItems={(items) =>
              items.map((item) => ({
                ...item,
                label: getMarketLabel(item.label),
              }))
            }
          />
        </FilterSection>

        <RefinementFilters
          attribute="mimeTypeFacet"
          title="Type"
          sortOrder={['IMAGE', 'VIDEO']}
          defaultRefinement={['IMAGE', 'VIDEO']}
        />
      </Grid>
    </Box>
  );
}
