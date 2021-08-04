import { useEffect } from "react"
import useIntersectionObserver from "./useIntersectionObserver"

function useDetectIntersection({ ref, opts }) {
	const {
		entry,
		setTarget,
	} = useIntersectionObserver(opts)

	useEffect(() => {
		if (ref.current) {
			setTarget(ref.current)
		}
	}, [ref.current])

	return entry?.isIntersecting
}

export default useDetectIntersection
