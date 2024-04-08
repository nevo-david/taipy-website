import { Route } from 'next';

import Link from '@/components/shared/link';

import { ClassName } from '@/types/classname';

interface Breadcrumb {
  title: string;
  url?: URL | Route<string>;
}

interface BreadcrumbsProps extends ClassName {
  items: Breadcrumb[];
}

function Breadcrumbs({ items, className }: BreadcrumbsProps) {
  return (
    <nav className={className}>
      <ol className="flex gap-x-2.5">
        {items.map(({ title, url }, index) => (
          <li className="text-15 leading-snug" key={index}>
            {url ? (
              <Link href={url} theme="orange">
                {title}
              </Link>
            ) : (
              <span className="line-clamp-1 text-grey-60">{title}</span>
            )}
            {index < items.length - 1 && <span className="ml-2.5 text-grey-30">/</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export default Breadcrumbs;
