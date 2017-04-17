(ns redditv.components.header
  (:require [rum.core :as rum]
            [redditv.utils :refer [set-hash! force-app-reload! app-hash decode-html-string]]
            [redditv.playlist :as playlist]
            [redditv.components.mdl :as mdl]))

(def subreddits 
  [
   "videos"
   "youtubehaiku"
   "documentaries"
   "deepintoyoutube"
   "commercialcuts"
   "cringe"
   "artisanvideos"
   "lectures"
   "360video"
   "trailers"
   "contagiouslaughter"
   "accidentalcomedy"
   "publicfreakout"
   "idiotsfightingthings"
   ])

(defn search-subreddit [app-state subreddit]
  (swap! app-state assoc
         :subreddit subreddit
         :playlist-selected-index 0
         :show-subreddits false)
  (playlist/reload app-state :reload? true)
  (set-hash! (app-hash app-state)))

(defn subreddit-listing [app-state name]
  [:.header-subreddit-listing-element
   {:on-click #(search-subreddit app-state name)
    :title name}
   (str "/r/" name)])

(rum/defc c-header
  < 
  rum/reactive
  [app-state]
  (let [{:keys [subreddit loading? show-subreddits]} (rum/react app-state)
        selected (playlist/get-selected app-state)
        title (-> selected :title str decode-html-string)]
    (if-not (-> @app-state :fullscreen)
      [:.redditv-header
       [:.redditv-header-flex
        [:.header-logo "redditv"]
        [:.header-subreddit.noselect {:on-click #(swap! app-state update-in [:show-subreddits] not)}
         (str "/r/" subreddit)
         (mdl/icon {:name (if show-subreddits "expand_less" "expand_more")
                    :className "redditv-header-button noselect"
                    :title "Pick Popular Subreddit"})]
        [:.header-title {:title title} title]
        (when show-subreddits
          [:.header-subreddit-listing
           [:.header-subreddit-container
            (map #(subreddit-listing app-state %) subreddits)]])
        (when loading? (mdl/spinner {:id "spinner-loading"}))]]
      ;; Fullscreen Header Layout
      [:.redditv-header-fullscreen
       [:.redditv-header-flex-fullscreen
        [:.header-title-fullscreen {:title title} title]]])))
