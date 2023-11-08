## Next.js Partial Prerendering

This is a demo of [Next.js](https://nextjs.org) using Partial Prerendering.

This template uses the new Next.js [App Router](https://nextjs.org/docs/app). This includes support for enhanced layouts, colocation of components, tests, and styles, component-level data fetching, and more.

It also uses the experimental Partial Prerendering feature available in Next.js 14.

You can learn more about Partial Prerendering by re-watching the [Next.js Conf 2023 Keynote](https://www.youtube.com/watch?v=gfU1iZnjRZM&list=PLBnKlKpPeagl57K9bCw_IXShWQXePnXjY&index=2), reading the [Partial Prerendering announcement](https://vercel.com/blog/partial-prerendering-with-next-js-creating-a-new-default-rendering-model?__vercel_draft=1), and by taking the [Next.js Learn chapter on Partial Prerendering](https://nextjs.org/learn/dashboard-app/partial-prerendering).

> ⚠️ Please note that PPR is truly an experimental technology that is not recommended for production. You may run into some DX issues, especially on larger code bases, and known issues around performance of client-side navigations.

## How it works

The index route `/` uses Partial Prerendering through:

1. Enabling the experimental flag in `next.config.js`.

```js
experimental: {
    ppr: true,
},
```

2. Using `<Suspense />` to wrap Dynamic content.
