# Source Structure

Use these folders when you need to find or update site content:

- `pages/`: route-level pages rendered by `App.js`.
- `pages/styles/`: page-specific styles split by area (`research`, `impact`, `team`, etc.); `pages/Pages.css` only imports these files.
- `components/layout/`: shared site chrome such as the navbar and footer.
- `components/home/`: homepage sections.
- `components/news/`: news list rendering and news post data.
- `components/shared/`: reusable UI helpers used by multiple pages.
- `data/`: structured page content grouped by domain:
  - `data/research/`: research programmes and funding.
  - `data/impact/`: impact, publications, books, patents, policy, and engagement items.
  - `data/team/`: team and alumni content.
  - `data/blog/`: blog post summaries.
- `assets/images/`: images and media grouped by purpose.
- `archive/`: old or unused code/assets kept for reference but not imported by the live app.
