(ns ghoul.app.model.types
  (:require [schema.core :as s :include-macros true]
            [cljs-uuid-utils.core :as uuid]
            [cljs.reader :as rdr]))

;; FEED DATA
(s/defrecord FeedData
    [title       :- s/Str
     description :- s/Str
     feed-url    :- s/Str
     site-url    :- s/Str
     favicon-url :- s/Str
     uuid        :- s/Str
     pending     :- s/Int])

(rdr/register-tag-parser! "ghoul.app.model.types.FeedData" #(map->FeedData %))


;; GROUP DATA
(s/defrecord GroupData
    [name          :- s/Str
     expanded      :- s/Bool
     subscriptions :- [FeedData]
     pending       :- s/Int
     editing       :- s/Bool])

(rdr/register-tag-parser! "ghoul.app.model.types.GroupData" #(map->FeedData %))

;; Constructor helpers

(defn create-feed
  "Create an empty feed data"
  ([title description feed-url site-url]
   (create-feed title description feed-url site-url "/images/rssicon.png"))

  ([title description feed-url site-url favicon-url]
   {:type        :feed
    :title       title
    :description description
    :feed-url    feed-url
    :site-url    site-url
    :favicon-url favicon-url
    :uuid        (uuid/uuid-string (uuid/make-random-uuid))
    :pending     0}))

(defn create-group
  "Create an empty group"
  ([name expanded subscriptions pending editing]
   {:type          :group
    :name          name
    :expanded      expanded
    :subscriptions subscriptions
    :pending       pending
    :editing       editing}))