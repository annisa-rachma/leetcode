# Write your MySQL query statement below
select
    s.student_id,
    s.student_name,
    u.subject_name,
    count(e.subject_name) as attended_exams
from Students s
    join Subjects as u
    left join Examinations e 
    on s.student_id = e.student_id 
    and e.subject_name = u.subject_name
    group by s.student_id, u.subject_name
    order by s.student_id, u.subject_name