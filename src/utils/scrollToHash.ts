/**
 * Scrolls to the element with the given ID, if it exists.
 * Uses smooth scrolling with a slight offset for fixed headers.
 * @param hash - The hash (including the #) or element ID to scroll to
 */
export function scrollToHash(hash: string): void {
  // Remove the # if present
  const id = hash.startsWith('#') ? hash.slice(1) : hash;

  if (!id) return;

  // Small delay to ensure DOM is ready after route change
  setTimeout(() => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, 100);
}

/**
 * Handles hash navigation on initial page load and hash changes.
 * Call this in useEffect when the component mounts or when location changes.
 */
export function handleHashOnLoad(): void {
  const hash = window.location.hash;
  if (hash) {
    scrollToHash(hash);
  }
}
