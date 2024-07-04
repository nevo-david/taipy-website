import { ROUTES } from '@/constants/routes';

import Link from '@/components/shared/link';
import PostItem from '@/components/shared/post-item';

import { getPages } from '@/lib/sanity/client';

async function RelatedPosts() {
  const relatedPosts = await getPages();
  const allPosts = relatedPosts[0].posts;

  return (
    <section className="related mt-[200px] lg:mt-[104px] md:mt-[88px] sm:mt-16">
      <div className="container max-w-7xl">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-48 font-semibold leading-dense tracking-tight lg:text-40 md:text-36 sm:text-28">
            See what&apos;s happening at Taipy&apos;s
          </h2>
          <Link href={ROUTES.BLOG} size="md" theme="white" arrowTheme="red">
            All posts
          </Link>
        </div>
        <div className="grid grid-cols-3 gap-x-8 gap-y-9 lg:gap-x-6 md:gap-x-5 sm:grid-cols-1 sm:gap-y-7">
          {allPosts?.map((relatedPost) => (
            <PostItem key={relatedPost._id} post={relatedPost} isRelated />
          ))}
        </div>
      </div>
    </section>
  );
}

export default RelatedPosts;
