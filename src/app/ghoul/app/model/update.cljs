(ns ghoul.app.model.update
  (:require [ghoul.app.model.types :as types]))

(defn- group-index-toggle [group-name index-value]
  (let [index-type (first  index-value)
        index-id   (second index-value)]
    (if (and (= index-type :group) (= index-id group-name))
      (let [[type name feeds expanded] index-value]
        [type name feeds (not expanded)])
      index-value)))

(defn toggle-group-display
  "Updates the group visibility in the model index"
  [model group-name]
  (as-> group-name $
    (partial group-index-toggle $)
    (map $ (:index model))
    (assoc model :index $)))
