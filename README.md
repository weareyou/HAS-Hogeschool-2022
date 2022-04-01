# Werken bij GGD Fryslân

[![Netlify Status](https://api.netlify.com/api/v1/badges/c151ff36-292b-49c1-b36c-b998c70a9751/deploy-status)](https://app.netlify.com/sites/werken-bij-ggd-fryslan/deploys)

Using SvelteKit with Umbraco as a headless backend.

## Requirements

1. ### Node

Install Node from https://nodejs.org/en/. Currently, 16.x (LTS) is supported.

2. ### Install dependencies

Install dependencies by running `npm i` from the command line.

3. ### Content source

You need an Umbraco API endpoint to get content. Create a copy of the [.env.example](.env.example)
file and name it `.env`. Add the URL of the Umbraco environment where the content should come from (
VITE_UMBRACO_API_URL).

## Local development

Spin up a local development enviroment by running `npm run dev` from the command line.

Note: you need a working content API.

## Building for production

Run `npm run build` to prerender all pages to static HTML to the `/build` folder.
