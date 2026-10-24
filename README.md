# Post Dashboard (React + Vite)

Assignment 6 for Web Programming. A small React app that loads posts from
https://jsonplaceholder.typicode.com/posts, shows loading / error / empty states,
and lets the user filter the posts by title.

## How to run

```
npm install
npm run dev
```

## File organization

- `src/api/postsApi.js`: `fetchPosts` function. Only data fetching, no React and no JSX.
- `src/reducer/postsReducer.js`: initial state and the pure reducer (`FETCH_START`, `FETCH_SUCCESS`, `FETCH_ERROR`).
- `src/App.jsx`: owns the reducer, fetches on mount with `useEffect`, keeps the filter in `useState` and derives the filtered posts during render.
- `src/components/FilterForm.jsx`: controlled input for the title filter.
- `src/components/PostList.jsx`: renders the posts with `.map()` and `post.id` as key.
- `src/components/Post.jsx`: shows one post (title and body), no state.

## Challenges I faced

- (write your own here)
