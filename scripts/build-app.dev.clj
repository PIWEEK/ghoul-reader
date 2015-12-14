(require '[cljs.build.api :as b])

(let [start (System/nanoTime)]
  (println "[DEV] Building App " start)
  (b/build
   (b/inputs "src/worker" "src/common")
   {:main 'ghoul.worker-feed-updater
    :output-to "resources/public/js/ghoul.js"
    :output-dir "resources/public/js/out"
    :optimizations :whitespace
    :verbose true
    :pretty-print true
    :source-map-timestamp true
    :language-in  :ecmascript5
    :language-out :ecmascript5})
  (println "[DEV] Building App. Done after: " (/ (- (System/nanoTime) start) 1e9) "seconds"))
