# Write your MySQL query statement below
select 
s.student_id,
s.student_name,
sub.subject_name,
count(e.student_id) as attended_exams 
from Students s 
cross join Subjects sub
left join Examinations e  on 
    e.subject_name = sub.subject_name
    and e.student_id = s.student_id
group by sub.subject_name, s.student_id
order by student_id, subject_name