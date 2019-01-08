var queries = function(){

    this.q1 = `select firstname,lastname,email from users where email='efewtrell8c@craigslist.org'`;

    this.q2 = `SELECT firstname,lastname, email, role, name as teamname
    FROM users inner join team
    on users.team_id= team.id`;
    this.q3=`SELECT firstname,lastname, email, role, name as teamname, batch_number as batchnumber, location 
    FROM users INNER JOIN team  
    ON users.team_id = team.id JOIN campus 
    on team.campus_id = campus.id
    where role='student-team-leader' limit 10;`

}

module.exports = new queries();

