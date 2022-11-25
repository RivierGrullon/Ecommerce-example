import {
    useShopQuery,
    Seo,
    useRouteParams,
    ShopifyAnalyticsConstants,
    useServerAnalytics,
  } from "@shopify/hydrogen";
  import { Suspense } from "react";
  
 import { Layout } from "@components/template/Layout.server";
import ProductCard from "@components/organisms/ProductCard.server";
import { ProductQuery } from "@models/api/Collection";
  
 export default function Collection() {
    const { handle } = useRouteParams();
  
    const {
      data: { collection },
    } = useShopQuery({
      query: ProductQuery,
      variables: {
        handle,
      },
    });
  
    useServerAnalytics({
      shopify: {
        pageType: ShopifyAnalyticsConstants.pageType.collection,
        resourceId: collection.id,
      },
    });
  
    return (
      <Layout>
        <Suspense>
          <Seo type="collection" data={collection} />
        </Suspense>
        <header className="grid w-full gap-8 p-4 py-8 md:p-8 lg:p-12 justify-items-start">
          <h1 className="text-4xl whitespace-pre-wrap font-bold inline-block">
            {collection.title}
          </h1>
  
          {collection.description && (
            <div className="flex items-baseline justify-between w-full">
              <div>
                <p className="max-w-md whitespace-pre-wrap inherit text-copy inline-block">
                  {collection.description}
                </p>
              </div>
            </div>
          )}
        </header>
  
        <section className="w-full gap-4 md:gap-8 grid p-6 md:p-8 lg:p-12">
          <div className="grid-flow-row grid gap-2 gap-y-6 md:gap-4 lg:gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {collection.products.nodes.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </Layout>
    );
  }
