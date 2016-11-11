module.exports = {
    SELECT_TOPIC: 'select c.id,c.title,c.create_time,c.content,c.page_view,c.reply_num,c.praise,c.user_id,u.user_name,u.signature from topic c,user u where c.id= ? and u.id=c.user_id',
    SELECT_COMMENT: 'select c.id,c.content,c.user_id,c.create_time,u.user_name from comment c,user u where u.Id=c.user_id and c.topic_id=? order by c.create_time desc',
    SELECT_OTHER_TOPIC:'select id,title from topic where user_id=? and id <> ?',
    INSERT_COMMENT: 'insert into comment(id,content,topic_id,user_id,create_time) values(?,?,?,?,?)'
}