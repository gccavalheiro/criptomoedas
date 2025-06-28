import Link from 'next/link';

import { ThemeSelector } from '../theme-selector';
import { SearchBar } from '@/components/search-bar/search-bar.component';
import { Header } from '@/components/header.component';

export function HeaderImplementation() {
  return (
    <Header.Root>
      <Header.Content>
        <Header.ContentInner>
          <Header.Navigation>
            <Link href="/">
              <Header.Logo>Crypto Tracker</Header.Logo>
            </Link>
            <SearchBar />
          </Header.Navigation>
          <Header.Actions>
            <ThemeSelector />
          </Header.Actions>
        </Header.ContentInner>
      </Header.Content>
    </Header.Root>
  );
}
