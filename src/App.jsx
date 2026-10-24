import { useEffect, useReducer, useState } from 'react'
import { fetchPosts } from './api/postsApi'
import { initialState, postsReducer } from './reducer/postsReducer'
import FilterForm from './components/FilterForm'
import PostList from './components/PostList'

function App() {
  const [state, dispatch] = useReducer(postsReducer, initialState)
  const [filter, setFilter] = useState('')

  useEffect(() => {
    const controller = new AbortController()

    async function loadPosts() {
      dispatch({ type: 'FETCH_START' })
      try {
        const data = await fetchPosts(controller.signal)
        dispatch({ type: 'FETCH_SUCCESS', payload: data })
      } catch (error) {
        if (error.name === 'AbortError') return
        dispatch({ type: 'FETCH_ERROR', payload: error.message })
      }
    }

    loadPosts()

    return () => controller.abort()
  }, [])

  const filteredPosts = state.posts.filter((post) =>
    post.title.toLowerCase().includes(filter.toLowerCase())
  )

  return (
    <div style={{ maxWidth: '600px', margin: '40px auto', fontFamily: 'sans-serif' }}>
      <h1>Post Dashboard</h1>

      <FilterForm filter={filter} onFilterChange={setFilter} />

      {state.loading && <p>Loading posts...</p>}
      {state.error && <p>Error: {state.error}</p>}
      {!state.loading && !state.error && filteredPosts.length === 0 && <p>No posts found.</p>}
      {!state.loading && !state.error && filteredPosts.length > 0 && (
        <PostList posts={filteredPosts} />
      )}
    </div>
  )
}

export default App
