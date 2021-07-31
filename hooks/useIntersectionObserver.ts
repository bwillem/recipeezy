import { useEffect, useRef, useState } from "react";
import { isBrowser } from "../util/misc";

interface UseIntersectionObserverOpts {
	root: Element | Document | null,
	rootMargin: string,
	threshhold: number[],
}

const defaultOpts = {
	root: null,
	rootMargin: '0px',
	threshhold: [0],
}

function useIntersectionObserver(opts: UseIntersectionObserverOpts = defaultOpts) {
	// the dom node to observer
	const [target, setTarget] = useState<Element>()
	const [entry, setEntry] = useState<IntersectionObserverEntry>()

	const observer = useRef<IntersectionObserver>(isBrowser() ? (
		new IntersectionObserver(([entry]) => setEntry(entry), opts)
	) : null)

	useEffect(() => {
		if (target) {
			observer.current?.observe(target)
		}
		return () => {
			observer.current?.disconnect()
		}
	}, [target])

	return {
		entry,
		setTarget,
	}
}

export default useIntersectionObserver
