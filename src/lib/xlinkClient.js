const XLINK_API_BASE = "https://xlink-worker.jcdeichmann.workers.dev/"


export const fetchCollectCows = () => {
    return fetchFromXlink("collect-cows")
}

export const fetchCowsDue = () => {
    return fetchFromXlink("cows-due")
}

const fetchFromXlink = (path) => {
    return fetch(XLINK_API_BASE + path)
      .then(res => res.json())
}