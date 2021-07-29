/** @jsxRuntime classic */
/* @jsx jsx */
import React from 'react';
import { jsx, Flex, ThemeUIStyleObject } from 'theme-ui';

import UserTagRaw from 'components/users/UserTagRaw';
import Link from 'components/links/Link';

import { getUsernameOrAddress } from 'utils/helpers';

import { userLink, userTag } from './styles';

import Account from 'types/Account';

interface UserTagProps {
  user: Account;
  className?: string;
  isLoading?: boolean;
}

export default function UserTag(props: UserTagProps): JSX.Element {
  const { user, className } = props;

  const usernameOrAddress = getUsernameOrAddress(user);

  const tagStyles: ThemeUIStyleObject = { ...userTag, paddingRight: [20, 20] };

  if (!usernameOrAddress) {
    return (
      <Flex sx={{ ...userLink, pointerEvents: 'none' }} className={className}>
        <UserTagRaw {...props} sx={tagStyles} />
      </Flex>
    );
  }

  return (
    <Link href={`/${usernameOrAddress}`}>
      <a sx={userLink} className={className}>
        <UserTagRaw {...props} sx={tagStyles} className={className} />
      </a>
    </Link>
  );
}
