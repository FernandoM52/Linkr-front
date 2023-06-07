import InfiniteScroll from 'react-infinite-scroller';

export default function InfiniteScroll({ loadMore, hasMore, loader, children }) {
  function handleLoadMore() {
    if (loadMore) {
      loadMore();
    }
  }

  return (
    <InfiniteScroll
      pageStart={0}
      loadMore={handleLoadMore}
      hasMore={hasMorePosts}
      loader={<></>}
    >
      {children}
    </InfiniteScroll>
  );
}