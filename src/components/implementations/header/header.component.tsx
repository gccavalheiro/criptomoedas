import { Header as HeaderComponent } from '@/components/header';
import { SearchBar } from '@/components/search-bar/search-bar';

import Link from 'next/link';
import { ThemeSelector } from '../theme-selector';

export function Header() {
  return (
    <HeaderComponent.Root>
      <HeaderComponent.Content>
        <HeaderComponent.ContentInner>
          <HeaderComponent.Navigation>
            <Link href="/">
              <HeaderComponent.Logo>Crypto Tracker</HeaderComponent.Logo>
            </Link>
            <SearchBar />
          </HeaderComponent.Navigation>
          <HeaderComponent.Actions>
            <ThemeSelector />
          </HeaderComponent.Actions>
        </HeaderComponent.ContentInner>
      </HeaderComponent.Content>
    </HeaderComponent.Root>
  );
}
