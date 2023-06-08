import InfiniteScroll from 'react-infinite-scroller';

export default function InfiniteScrollTimeline({ loadMore, hasMore, loader, children }) {
  function handleLoadMore() {
    if (loadMore) {
      loadMore();
    }
  }

  return (
    <InfiniteScroll
      pageStart={0}
      loadMore={handleLoadMore}
      hasMore={hasMore}
      loader={loader}
      className="StyleInfiniteScroll"
    >
      {children}
    </InfiniteScroll>
  );
}