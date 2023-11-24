import { Suspense } from 'react';
import {
  RecommendedProducts,
  RecommendedProductsSkeleton,
} from '#/components/recommended-products';
import { Reviews, ReviewsSkeleton } from '#/components/reviews';
import { SingleProduct } from '#/components/single-product';
import { Ping } from '#/components/ping';

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  return (
    <div className="space-y-8 lg:space-y-14">
      <SingleProduct id={id} />

      <Ping />

      <Suspense fallback={<RecommendedProductsSkeleton />}>
        <RecommendedProducts filterId={id} />
      </Suspense>

      <Ping />

      <Suspense fallback={<ReviewsSkeleton />}>
        <Reviews />
      </Suspense>
    </div>
  );
}
