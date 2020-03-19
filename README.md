# README
## userテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|mail|integer|null: false, foreign_key: true|

### Association
- has_many :groups, through: :groups_users
- has_many :groups_users
- has_many :messages



## messagesテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
|message|text|
|image|string|

### Association
- belongs_to :user
- belongs_to :group



## groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user



## groups_テーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|

### Association
- has_many :users, through: :groups_users
- has_many :groups_users
- has_many :messages
