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

## How does it work?

SvelteKit is a meta framework. It means it is a framework that creates a full-blown website.
SvelteKit makes use of Svelte: a front-end framework for creating reusable components.

### Routing

The [/src/routes/[...rest].svelte](/src/routes/[...rest].svelte) file serves as a catch-all entry
point for all urls (
the [index.svelte](src/routes/index.svelte) is only there to catch the homepage).

An content API is called with the current url as a parameter. It returns the content for that page.

### Pages

Pages are made up of metadata and page content.
In [/src/routes/[...rest].svelte](/src/routes/[...rest].svelte), page metadata is passed into
the [/src/routes/templates/$Meta.svelte](/src/routes/templates/$Meta.svelte) component.

A field in the API determines what kind of template should be rendered. It is checked
in `[...rest].svelte`. For now, this is just one: a modular page.

### Modular pages

Modular pages are pages where a content editor can choose any amount of predefined 'building blocks'
to build up a page. The content API provides an array of used blocks.
In [/src/routes/templates/$ModularPageTemplate.svelte](/src/routes/templates/$ModularPageTemplate.svelte)
a loop runs through the array, checks if we have a matching component, and then renders it with the
content passed in.

### CSP

Content Security Policy (CSP) headers are configured in [svelte.config.js](svelte.config.js)
and [netlify.toml](___netlify.toml). They should be the same, to inform SvelteKit what CSP is
actually configured when running on Netlify.
