import { gql } from "@shopify/hydrogen";

export const PRODUCT_QUERY = gql`
fragment MediaFields on Media {
  mediaContentType
  alt
  previewImage {
    url
  }
  ... on MediaImage {
    id
    image {
      url
      width
      height
    }
  }
  ... on Video {
    id
    sources {
      mimeType
      url
    }
  }
  ... on Model3d {
    id
    sources {
      mimeType
      url
    }
  }
  ... on ExternalVideo {
    id
    embedUrl
    host
  }
}
query Product($handle: String!) {
  product(handle: $handle) {
    id
    title
    vendor
    descriptionHtml
    media(first: 7) {
      nodes {
        ...MediaFields
      }
    }
    variants(first: 100) {
      nodes {
        id
        availableForSale
        compareAtPriceV2 {
          amount
          currencyCode
        }
        selectedOptions {
          name
          value
        }
        image {
          id
          url
          altText
          width
          height
        }
        priceV2 {
          amount
          currencyCode
        }
        sku
        title
        unitPrice {
          amount
          currencyCode
        }
      }
    }
    seo {
      description
      title
    }
  }
}
`;