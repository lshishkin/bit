import Reat, { useEffect, useState } from "react"

export const usePageBottom = (id: string) => {
    const [bottom, setBottom] = useState(false);
    const element = document.getElementById(id);
    useEffect(() => {
        function handleScroll() {
            if (element) {
                const isBottom = Math.round(element.scrollHeight - element.scrollTop) === element.clientHeight

                setBottom(isBottom);
            }

        }
        if (element) {
            element.addEventListener("scroll", handleScroll);
        }

        return () => {
            if (element) element.removeEventListener("scroll", handleScroll);
        };
    }, [element]);

    return bottom;
}