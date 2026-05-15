# Social Narrative Analyzer

An MVP web app for analyzing how a public topic is framed across free/open sources.

It works without paid APIs or OpenAI keys. The default source path is:

1. GDELT DOC 2.0 API
2. Google News RSS
3. Reddit public search RSS
4. Manual upload can be added as the next extension point

## Features

- Topic search with examples
- Country, trend, date, source, sentiment, language, source-name, and relevance filters
- Select specific articles/posts and analyze selected only
- Narrative/theme clustering
- Sentiment over time
- Repeated phrases and top keywords
- Emotional framing signals
- Source and country breakdowns
- Timeline of narrative changes
- "Who benefits from this framing?" hypothesis
- Shareable report page
- Local file cache to reduce API calls
- SQLite storage for cached search result snapshots

## Setup

```powershell
cd "C:\Users\ana\Documents\Codex\2026-05-16\can-u-make-agent\AI 3"
npm install
npm run dev
```

Open:

```text
http://localhost:3000
```

## Optional Environment

Copy `.env.example` to `.env.local` if you want to add optional free-tier API keys later.

```powershell
copy .env.example .env.local
```

The MVP does not require any key.

## Notes

The NLP is local and lightweight by design: lexicon sentiment, TF-IDF-style keywords, repeated phrases, and seed-based clustering. This keeps the app free and easy to run. For deeper analysis, the next upgrade would be a local Python worker using VADER, scikit-learn, sentence-transformers, and KMeans/HDBSCAN.
