import { Layout } from "@components/template/Layout.server";
import { PRODUCT_QUERY } from "@models/api/Product";
import {ProductDetails} from "@components/organisms/ProductDetails.client"
import {
  useShopQuery,
  useServerAnalytics,
  useRouteParams,
  ShopifyAnalyticsConstants,
  Seo,
} from "@shopify/hydrogen";
import { Suspense } from "react";
export default function Product({ params }) {
  const { handle } = useRouteParams();

  const {
    data: { product },
  } = useShopQuery({
    query: PRODUCT_QUERY,
    variables: {
      handle,
    },
  });

  useServerAnalytics({
    shopify: {
      pageType: ShopifyAnalyticsConstants.pageType.product,
      resourceId: product.id,
    },
  });

  return (
    <Layout>
      <Suspense>
        <Seo type="product" data={product} />
      </Suspense>
      <ProductDetails product={product} />
    </Layout>
  );
}