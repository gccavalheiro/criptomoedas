import '@testing-library/jest-dom';
import { ImageProps } from 'next/image';

import { LinkProps } from 'next/link';
import { vi } from 'vitest';

vi.mock('next/image', () => ({
  default: (props: ImageProps) => {
    const { src, alt, ...rest } = props;
    return { type: 'img', src, alt, ...rest };
  },
}));

vi.mock('next/link', () => ({
  default: (props: LinkProps) => {
    const { href, ...rest } = props;
    return { type: 'a', href, ...rest };
  },
}));
