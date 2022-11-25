import FeaturedCollections from "@components/organisms/FeaturedCollections.server";
import { Suspense } from "react";
import { Layout } from "@components/template/Layout.server";

export default function Home() {
  return (
    <Layout>
      <Suspense>
        <FeaturedCollections></FeaturedCollections>
      </Suspense>
    </Layout>
  );
}
