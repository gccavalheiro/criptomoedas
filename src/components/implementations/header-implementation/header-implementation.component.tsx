import Link from 'next/link';

import { SearchBar } from '@/components/search-bar/search-bar.component';
import { HeaderComposition } from '@/components/header-composition.component';
import { ThemeSelector } from '../theme-selector/theme-selector.component';

export function HeaderImplementation() {
  return (
    <HeaderComposition.Root>
      <HeaderComposition.Content>
        <HeaderComposition.ContentInner>
          <HeaderComposition.Navigation>
            <Link href="/">
              <HeaderComposition.Logo>Crypto Tracker</HeaderComposition.Logo>
            </Link>
            <SearchBar />
          </HeaderComposition.Navigation>
          <HeaderComposition.Actions>
            <ThemeSelector />
          </HeaderComposition.Actions>
        </HeaderComposition.ContentInner>
      </HeaderComposition.Content>
    </HeaderComposition.Root>
  );
}
