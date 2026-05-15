# Free API and Dataset Options

Research date: May 16, 2026

## Best default: GDELT DOC 2.0 API

- Cost: Free and open, no API key required.
- Use case: Global news search, frequent updates, article metadata, source country, language, dates, URLs.
- Endpoint used in this MVP: `https://api.gdeltproject.org/api/v2/doc/doc`
- Useful parameters: `query`, `mode=ArtList`, `format=json`, `maxrecords`, `sort`, `startdatetime`, `enddatetime`.
- Country filtering: Use GDELT query operators such as `sourcecountry:US` where available, plus fallback keyword/source filtering.
- Limits: Public service; no paid key, but cache requests and keep result counts modest.
- Source: [GDELT DOC 2.0 API announcement/docs](https://blog.gdeltproject.org/gdelt-doc-2-0-api-debuts/amp/)

## Google News RSS

- Cost: Free RSS feed, no key.
- Use case: Fallback news discovery by query, language, and region.
- Endpoint pattern: `https://news.google.com/rss/search?q=QUERY&hl=en-US&gl=US&ceid=US:en`
- Country filtering: `gl` and `ceid` can bias region; not a strict country filter.
- Limits: Unofficial-but-public RSS behavior; cache and avoid aggressive polling.
- Source: [Google News RSS background](https://www.aakashweb.com/articles/google-news-rss-feed-url/)

## Reddit RSS

- Cost: Public RSS feeds are free; no API key for RSS.
- Use case: Public discussion posts and search results.
- Endpoint examples: `https://www.reddit.com/search.rss?q=QUERY`, `https://www.reddit.com/r/{subreddit}/.rss`
- Country filtering: No reliable country metadata; use keyword/language/source fallback.
- Limits: Reddit may throttle anonymous requests. Use RSS gently and cache results.
- Sources: [Reddit API docs showing RSS support](https://www.reddit.com/dev/api/), [Open RSS Reddit feed notes](https://openrss.org/feeds/reddit)

## NewsData.io

- Cost: Free tier available with API key.
- Free tier noted in current public docs/blog: 200 credits per day, 10 articles per credit, 30 credits per 15 minutes.
- Use case: Optional keyed news fallback with explicit country/language filters.
- How to get a key: Create a free account at NewsData.io, then place the key in `.env.local` as `NEWSDATA_API_KEY`.
- Not used by default in this MVP to keep the app keyless.
- Source: [NewsData.io rate limit page](https://newsdata.io/blog/newsdata-rate-limit/)

## NewsAPI

- Cost: Free developer tier available with API key, but production/commercial use can be restricted.
- Use case: Optional developer/testing fallback for headlines and article metadata.
- How to get a key: Register at NewsAPI.org and place the key in `.env.local` as `NEWSAPI_KEY`.
- Caveat: Check current plan terms before shipping publicly.
- Source: [NewsAPI pricing](https://newsapi.org/pricing)

## Public RSS feeds

- Cost: Free.
- Use case: Add trusted source-specific feeds, for example BBC, Al Jazeera, ESPN, club/team news feeds, or local newspapers.
- Country filtering: Usually inferred from source or keywords.
- Limits: Feed-specific; cache results and respect publisher terms.

## Local/manual fallback

- Cost: Free.
- Use case: User uploads CSV/text when APIs are unavailable or when analyzing a curated source set.
- Suggested CSV fields: `title`, `source`, `url`, `published_at`, `text`, `country`, `language`.
- Status: Planned extension point; data model already supports `sourceType: "manual"`.
