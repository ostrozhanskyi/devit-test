// Для теста создал данную коллекцию
conn = new Mongo();
db = conn.getDB("test");
// db = connect("localhost:27017/test");

db.posts.insert([
  {"title": "Harry Potter and the Deathly Hallows", "content": "To stop Voldemort, Harry knows he must find the remaining Horcruxes and destroy them.", "author": "J.K. Rowling", "like": 2163020, "dislike": 25944}, 
  {"title": "The Name of the Wind", "content": "Told in Kvothe's own voice, this is the tale of the magically gifted young man who grows to be the most notorious wizard his world has ever seen. ", "author": "Patrick Rothfuss", "like": 521388, "dislike": 12721}, 
  {"title": "The Way of Kings", "content": "Roshar is a world of stone and storms. Uncanny tempests of incredible power sweep across the rocky terrain so frequently that they have shaped ecology and civilization alike. Animals hide in shells, trees pull in branches, and grass retracts into the soilless ground. Cities are built only where the topography offers shelter.", "author": "Brandon Sanderson", "like": 245850, "dislike": 3786},
  {"title": "The Wise Man's Fear", "content": "My name is Kvothe. I have stolen princesses back from sleeping barrow kings. I burned down the town of Trebon. I have spent the night with Felurian and left with both my sanity and my life. I was expelled from the University at a younger age than most people are allowed in. I tread paths by moonlight that others fear to speak of during day. I have talked to Gods, loved women, and written songs that make the minstrels weep. You may have heard of me.", "author": "Patrick Rothfuss", "like": 306498, "dislike": 4125}, 
  {"title": "Words of Radiance", "content": "Expected by his enemies to die the miserable death of a military slave, Kaladin survived to be given command of the royal bodyguards, a controversial first for a low-status 'darkeyes.' Now he must protect the king and Dalinar from every common peril as well as the distinctly uncommon threat of the Assassin, all while secretly struggling to master remarkable new powers that are somehow linked to his honorspren, Syl.", "author": "Brandon Sanderson", "like": 183242, "dislike": 953}, 
  {"title": "Clockwork Princess", "content": "Danger and betrayal, love and loss, secrets and enchantment are woven together in the breathtaking finale to the #1 New York Times bestselling Infernal Devices Trilogy, prequel to the internationally bestselling Mortal Instruments series.", "author": "Cassandra Clare", "like": 257372, "dislike": 4219}, 
  {"title": "A Storm of Swords", "content": "Here is the third volume in George R.R. Martin's magnificent cycle of novels that includes A Game of Thrones and A Clash of Kings. Together, this series comprises a genuine masterpiece of modern fantasy, destined to stand as one of the great achievements of imaginative fiction.", "author": "George R.R. Martin", "like": 438390, "dislike": 3360}, 
  {"title": "Harry Potter and the Prisoner of Azkaban", "content": "For twelve long years, the dread fortress of Azkaban held an infamous prisoner named Sirius Black. Convicted of killing thirteen people with a single curse, he was said to be the heir apparent to the Dark Lord, Voldemort.", "author": "J.K. Rowling", "like": 2057909, "dislike": 14795}
])


// Выведите 5 записей из коллекции "posts" пропустив первые 5
db.posts.find().skip(5).limit(5)

// Выведите все записи у которых like больше 100
db.posts.find({like: {$gt : 100}})

// Добавьте новую запись в коллекцию posts
db.posts.insert([
  {"title": "New great book", "content": "True life story", "author": "Noname", "like": 23020, "dislike": 94}, 
 ])

// Выведите список авторов и их общее количество like
db.posts.aggregate({$group:{_id:"$author", total:{$sum:"$like"}}})

