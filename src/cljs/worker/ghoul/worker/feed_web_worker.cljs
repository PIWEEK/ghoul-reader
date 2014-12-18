(ns ghoul.worker.feed-web-worker
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [cljs.core.async :as async :refer [<! timeout]]
            [ghoul.http :as http]
            [ghoul.feeds-storage :as storage]
            ))

(def refresh-time-milis (* 5 60 1000))

(defn update-feed [feed-uid feed-url]
  (go-loop []
    (.log js/console (str "Refreshing: " feed-url))
    (let [feed-data (-> feed-url
                        http/get-rss <!
                        :data :items)]
      (doseq [feed feed-data]
        (let [result (<! (storage/get-item feed-uid (:uid feed)))]
          (if (= result :not-found)
            (do
              (let [to-store (-> feed (assoc :feeduid feed-uid))]
                (-> to-store storage/add-feed <!)
                (js/postMessage (clj->js {:action "update" :result "ok" :data to-store}))))))))
    (<! (timeout refresh-time-milis))
    (recur)))

(defn manage-command [event]
  (let [data (-> event
                 .-data
                 (js->clj :keywordize-keys true))]
    (cond (= (:action data) "update") (update-feed (:uid data) (:url data))
          :else (.log js/console (str event)))))

(js/addEventListener "message" manage-command)
(storage/init-database)
