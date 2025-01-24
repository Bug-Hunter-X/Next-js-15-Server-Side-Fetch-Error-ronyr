# Next.js 15 Server-Side Fetch Error

This repository demonstrates a common error encountered when fetching data in Next.js 15 page components during server-side rendering. The `fetch` API call needs to be properly handled to avoid runtime errors.

## Bug Description:

The `pages/about.js` file attempts to fetch data using `fetch` within the component. This directly causes an error on the server because `fetch` isn't available in the server-side rendering context.

## Solution:

The `pages/aboutSolution.js` file provides a solution using `getServerSideProps` to fetch data before rendering the component on the server. This ensures data is fetched correctly, and the component is rendered with the correct data.

## Setup:

1. Clone the repository.
2. Navigate to the project directory.
3. Run `npm install`.
4. Run `npm run dev`.