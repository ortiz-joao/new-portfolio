import { onMounted, onBeforeUnmount } from "vue";
const useIntersectionObserver = (elementRef, callback, threshold = 0 ,rootRef = null) => {
  const options = {
    root: rootRef,
    rootMargin: '0px',
    threshold
  }

  console.log(options)
  const interCallback = function (entries) {
    if (entries) {
      entries.forEach(entry => callback(entry))
    }
  };

  const observer = new IntersectionObserver(interCallback, options);

  onMounted(() => {
    observer.observe(elementRef.value)
  })

  onBeforeUnmount(() => {
    observer.unobserve(elementRef.value)
  })
  return {
    observer,
  };
};
export default useIntersectionObserver;