# Write your MySQL query statement below
select
    p.firstName,
    p.lastName,
    case 
        when a.personId is not Null then a.city
        else null
    end as city,
    a.state
from Person p
left join Address a 
on p.personId = a.personId
