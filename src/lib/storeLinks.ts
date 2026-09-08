export const APP_STORE_URL = "https://apps.apple.com/us/app/guidera/id6760977450"

export const ANDROID_TESTING_URL = "https://play.google.com/apps/testing/com.guidera.one"

/**
 * Google Play public listing for com.guidera.one currently returns 404
 * (app not published / not publicly available). Set this when the listing is live.
 * Example: "https://play.google.com/store/apps/details?id=com.guidera.one"
 */
export const PLAY_STORE_URL = "" as string

/**
 * Keep the public Guidera download links stable while Android moves from
 * closed testing to production. Once PLAY_STORE_URL is populated, every
 * existing /download/android share automatically starts using it.
 */
export const ANDROID_DOWNLOAD_URL = PLAY_STORE_URL || ANDROID_TESTING_URL
