# README
## userテーブル
|Column|Type|Options|
|------|----|-------|
|name|text|null: false|
|user_id|integer|null: false, foreign_key: true|
|mail|integer|null: false, foreign_key: true|

### Association
- has_many :groups, throught: :groups_users
- has_many :groups_users
- has_many :messages



## messageテーブル
|Column|Type|Options|
|------|----|-------|
|name|text|null: fales|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
|message|text,integer|null: false|
|image|string|

### Association
- belongs_to :user
- belongs_to :groups



## groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :groups
- has_many :users



## groups_テーブル
|Column|Type|Options|
|------|----|-------|
|name|text|null: false|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- has_many :users
- belongs_to :groups_users