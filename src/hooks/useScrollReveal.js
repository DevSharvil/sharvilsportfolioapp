import { useInView } from 'react-intersection-observer'

/**
 * Returns [ref, isVisible] — attach ref to the element you want to animate.
 * Once it enters the viewport, isVisible flips to true (stays true by default).
 */
export function useScrollReveal(options = {}) {
  const { ref, inView } = useInView({
    threshold: options.threshold ?? 0.1,
    triggerOnce: options.once ?? true,
    rootMargin: options.rootMargin ?? '0px 0px -60px 0px',
  })

  return [ref, inView]
}
